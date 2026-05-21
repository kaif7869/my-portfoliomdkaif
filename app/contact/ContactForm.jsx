"use client";

import { WandSparkles } from "lucide-react";
import { useRef, useState } from "react";

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const initialStatus = {
  type: "",
  message: ""
};

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const [status, setStatus] = useState(initialStatus);
  const formRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus(initialStatus);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!web3FormsAccessKey) {
      setStatus({
        type: "error",
        message: "Web3Forms access key is not configured yet."
      });
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            access_key: web3FormsAccessKey,
            from_name: "Mohammad Kaif Portfolio",
            replyto: email,
            name,
            email,
            subject: `Portfolio message: ${subject || "New contact"}`,
            message
          })
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Message could not be sent. Please try again."
        );
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message
      });
    } finally {
      setIsSending(false);
    }
  }

  async function improveMessage() {
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!message) {
      setStatus({
        type: "error",
        message: "Please write a message first."
      });
      return;
    }

    setIsImproving(true);
    setStatus(initialStatus);

    try {
      const response = await fetch("/api/contact-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, subject, message })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not improve the message.");
      }

      form.elements.message.value = data.message;
      setStatus({
        type: "success",
        message: "Message improved with AI."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message
      });
    } finally {
      setIsImproving(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field
          label="Name"
          name="name"
          placeholder="Your name"
        />
        <Field
          label="Email"
          name="email"
          placeholder="you@example.com"
          type="email"
        />
      </div>

      <div className="mt-5">
        <Field
          label="Subject"
          name="subject"
          placeholder="Project or message subject"
        />
      </div>

      <label className="mt-5 block">
        <span className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-gray-300">Message</span>
          <button
            type="button"
            onClick={improveMessage}
            disabled={isImproving}
            className="inline-flex items-center gap-2 rounded-lg border border-green-400/30 px-3 py-2 text-xs font-semibold text-green-300 transition hover:bg-green-400/10 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <WandSparkles size={14} />
            {isImproving ? "Improving..." : "Improve with AI"}
          </button>
        </span>
        <textarea
          name="message"
          rows={7}
          required
          placeholder="Tell me about your project..."
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
        />
      </label>

      {status.message ? (
        <p
          className={`mt-4 text-sm font-medium ${
            status.type === "success" ? "text-green-400" : "text-red-300"
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSending}
        className="mt-6 w-full rounded-xl bg-green-400 px-6 py-4 font-semibold text-black transition hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({ label, name, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-gray-300">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
      />
    </label>
  );
}
