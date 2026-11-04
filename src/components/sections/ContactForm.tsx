import { useState, useRef, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Check, Copy } from "lucide-react";

interface Enquiry {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}
type Errors = Partial<Record<keyof Enquiry, string>>;
const subjects: Record<string, string> = {
  general: "General enquiry",
  membership: "Membership information",
  projects: "Proposed initiatives",
  activities: "Areas of activity",
  documents: "Official documents",
};
export default function ContactForm() {
  const [params] = useSearchParams();
  const initialSubject = params.get("topic") ?? "general";
  const initial = {
    name: "",
    email: "",
    subject: subjects[initialSubject] ? initialSubject : "general",
    message: "",
    consent: false,
  };
  const [values, setValues] = useState<Enquiry>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [reviewed, setReviewed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const update = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setReviewed(false);
    setCopied(false);
  };
  function submit(event: FormEvent) {
    event.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2)
      next.name = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 20)
      next.message =
        "Please add a little more detail (at least 20 characters).";
    if (!values.consent)
      next.consent = "Please acknowledge the demonstration-only form.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) document.getElementById(`enquiry-${first}`)?.focus();
    else {
      setReviewed(true);
      window.setTimeout(() => statusRef.current?.focus(), 0);
    }
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(
        `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\nSubject: ${subjects[values.subject]}\n\n${values.message.trim()}`,
      );
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <div className="enquiry-form-wrap">
      <div className="form-heading">
        <span className="eyebrow">Begin a conversation</span>
        <span className="demo-form-badge">
          <span className="label-dot" />
          Demo mode
        </span>
      </div>
      <h2>
        A little about
        <br />
        <em>what’s on your mind.</em>
      </h2>
      <p className="form-explainer">
        This demonstration lets you prepare and review an enquiry. It does not
        send email or store your information. Please avoid sharing sensitive
        details.
      </p>
      <form noValidate onSubmit={submit} className="enquiry-form">
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="enquiry-name">
              Your name <span>*</span>
            </label>
            <input
              id="enquiry-name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Full name"
              maxLength={100}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "error-name" : undefined}
            />
            {errors.name && (
              <span id="error-name" className="field-error">
                {errors.name}
              </span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-email">
              Email address <span>*</span>
            </label>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              maxLength={200}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "error-email" : undefined}
            />
            {errors.email && (
              <span id="error-email" className="field-error">
                {errors.email}
              </span>
            )}
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-subject">I would like to know about</label>
          <select
            id="enquiry-subject"
            name="subject"
            value={values.subject}
            onChange={(e) => update("subject", e.target.value)}
          >
            {Object.entries(subjects).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-message">
            Your message <span>*</span>
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us a little about your enquiry…"
            rows={4}
            minLength={20}
            maxLength={3000}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "error-message" : "message-help"}
          />
          <span className="field-help" id="message-help">
            {values.message.length}/3000 characters · Minimum 20 characters
          </span>
          {errors.message && (
            <span id="error-message" className="field-error">
              {errors.message}
            </span>
          )}
        </div>
        <div className="form-consent">
          <label>
            <input
              id="enquiry-consent"
              type="checkbox"
              checked={values.consent}
              onChange={(e) => update("consent", e.target.checked)}
              required
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "error-consent" : undefined}
            />
            <span>
              I understand this is a demonstration and my enquiry will not be
              sent or stored.
            </span>
          </label>
          {errors.consent && (
            <span id="error-consent" className="field-error">
              {errors.consent}
            </span>
          )}
        </div>
        <button className="form-submit" type="submit">
          Review my enquiry <ArrowUpRight size={18} />
        </button>
        <p className="form-footer-note">
          Required fields are marked with an asterisk (*).
        </p>
      </form>
      {reviewed && (
        <div
          className="enquiry-review"
          tabIndex={-1}
          ref={statusRef}
          role="status"
        >
          <Check size={25} strokeWidth={1.4} />
          <h3>Your enquiry is ready to review.</h3>
          <p>
            Demo complete. Nothing was sent or stored. You can copy the text to
            use once the society’s official contact channel is verified.
          </p>
          <dl>
            <dt>Name</dt>
            <dd>{values.name.trim()}</dd>
            <dt>Email</dt>
            <dd>{values.email.trim()}</dd>
            <dt>Subject</dt>
            <dd>{subjects[values.subject]}</dd>
            <dt>Message</dt>
            <dd className="review-message">{values.message.trim()}</dd>
          </dl>
          <div className="review-actions">
            <button className="text-link" onClick={copy}>
              <Copy size={15} />
              {copied ? "Copied to clipboard" : "Copy enquiry text"}
            </button>
            <button
              className="text-link"
              onClick={() => {
                setValues(initial);
                setReviewed(false);
                setCopied(false);
                setErrors({});
                document.getElementById("enquiry-name")?.focus();
              }}
            >
              Clear enquiry
            </button>
          </div>
          {copyError && (
            <p>
              Clipboard access is unavailable. Please select and copy the
              reviewed text above.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
