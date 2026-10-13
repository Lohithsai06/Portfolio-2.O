"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError("Please fill in your name, email address, and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(
      formData.projectType
        ? `${formData.projectType} — Inquiry from ${trimmedName}`
        : `Portfolio Inquiry from ${trimmedName}`
    );
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nTopic: ${
        formData.projectType || "General Inquiry"
      }\n\nMessage:\n${trimmedMessage}`
    );

    window.location.href = `mailto:Lohithsai0808@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full px-3 sm:px-6 py-2.5 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-[1140px] mx-auto glass-panel rounded-[32px] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Decorative soft lavender-blue orb in bottom-right matching reference */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:flex absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-gradient-to-tr from-indigo-300/45 via-purple-200/40 to-white/70 border border-white/80 shadow-[0_20px_60px_rgba(99,102,241,0.18)] backdrop-blur-xl items-center justify-center"
        >
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-indigo-400/30 via-violet-300/30 to-white/60 border border-white/70" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-indigo-500 mb-2">
                LET&apos;S CONNECT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Have a project in mind?
                <br />
                Let&apos;s create something amazing together.
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Reach out for full-stack development, RESTful API architecture,
                LAN-based backend systems, or engineering collaborations.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3.5 pt-1">
              <a
                href="mailto:Lohithsai0808@gmail.com"
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs flex items-center justify-center text-slate-700 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">
                    Email
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors break-all">
                    Lohithsai0808@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919380324074"
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs flex items-center justify-center text-slate-700 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">
                    Phone
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    +91 9380324074
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs flex items-center justify-center text-slate-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Profiles Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Lohithsai06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-pill hover:bg-white rounded-full px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-all hover:-translate-y-0.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Lohithsai06</span>
              </a>
              <a
                href="https://linkedin.com/in/lohith-sai-54b44437b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-pill hover:bg-white rounded-full px-4 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-card rounded-[26px] p-5 sm:p-7 space-y-4 max-w-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="sr-only"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-xl bg-white/85 border border-white/95 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="sr-only"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full rounded-xl bg-white/85 border border-white/95 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-project"
                  className="sr-only"
                >
                  Your Project
                </label>
                <select
                  id="contact-project"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/85 border border-white/95 px-4 py-3 text-xs sm:text-sm text-slate-700 shadow-2xs focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:bg-white transition-all"
                >
                  <option value="">Your Project / Topic</option>
                  <option value="Full-Stack Web Application">
                    Full-Stack Web Application
                  </option>
                  <option value="Backend & REST APIs">
                    Backend &amp; REST APIs
                  </option>
                  <option value="LAN & Network Systems">
                    LAN &amp; Network Systems
                  </option>
                  <option value="Software Engineering Opportunity">
                    Software Engineering Opportunity
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="sr-only"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full rounded-xl bg-white/85 border border-white/95 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:bg-white transition-all resize-none"
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200/80 px-3.5 py-2.5 text-xs text-rose-700"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {submitted && !error && (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200/80 px-3.5 py-2.5 text-xs text-emerald-700"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Opening your email client to send your message to{" "}
                    <strong>Lohithsai0808@gmail.com</strong>.
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-6 text-xs sm:text-sm font-semibold shadow-[0_10px_25px_-5px_rgba(15,23,42,0.35)] hover:shadow-[0_14px_30px_-5px_rgba(15,23,42,0.45)] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;