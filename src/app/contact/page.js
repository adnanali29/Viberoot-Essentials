"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.heroBannerImageWrap}>
        <Image 
          src="/hero_contact_hd.webp" unoptimized 
          alt="Contact VibeRoot Essentials Banner" 
          fill 
          priority 
          className={styles.heroImgBanner}
        />
      </section>

      <section className={styles.contentSection}>
        <div className={styles.inner}>
          {/* Contact Info */}
          <div className={styles.infoSide}>
            <h2 className={styles.infoTitle}>Let's Connect</h2>
            <p className={styles.infoBody}>Whether you have a question about our products, need help with your order, or want to explore wholesale opportunities — we're here.</p>

            {[
              { icon: "📍", label: "Address / Adresse", value: "Address / Adresse : VibeRoot Essentials T3P2H4 Calgary, Alberta Canada" },
              { icon: "📧", label: "Email", value: "hello@viberootessentials.com" },
              { icon: "📞", label: "Phone", value: "+1 (587) 832-0198" },
              { icon: "🕐", label: "Hours", value: "Mon–Fri: 9am–6pm EST" },
            ].map((item) => (
              <div key={item.label} className={styles.infoCard}>
                <span className={styles.infoIcon}>{item.icon}</span>
                <div>
                  <div className={styles.infoLabel}>{item.label}</div>
                  <div className={styles.infoValue}>{item.value}</div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/15878320198"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 2.217.72 4.267 1.942 5.926L2.6 21.4l3.585-1.328A9.957 9.957 0 0012 22.035c5.523 0 10-4.484 10-10.018C22 6.484 17.523 2 12 2zm5.83 14.156c-.244.685-1.417 1.309-1.977 1.394-.52.078-1.187.11-3.613-.878-3.08-1.256-5.06-4.382-5.213-4.587-.153-.205-1.246-1.658-1.246-3.161 0-1.503.785-2.242 1.064-2.548.279-.306.608-.383.811-.383.203 0 .406.002.584.01.19.009.444-.072.695.53.254.606.863 2.106.94 2.259.076.153.127.332.025.535-.101.204-.152.332-.304.51-.153.179-.321.399-.459.535-.152.153-.31.321-.133.626.177.306.787 1.3 1.688 2.103 1.157 1.031 2.133 1.35 2.438 1.503.305.153.483.127.66-.076.178-.204.762-.892.965-1.198.203-.306.406-.255.685-.153.28.102 1.776.837 2.08 1.002.304.165.508.244.584.372.076.128.076.741-.168 1.426z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>✓</div>
                <h2>Message Sent!</h2>
                <p>Thanks, <strong>{form.name}</strong>! We'll get back to you at <strong>{form.email}</strong> within 1 business day.</p>
                <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", subject:"", message:"" }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={submit}>
                <h2 className={styles.formTitle}>Send us a Message</h2>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Full Name *</label>
                    <input className={styles.input} type="text" name="name" placeholder="Jane Smith" value={form.name} onChange={handle} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone</label>
                    <input className={styles.input} type="tel" name="phone" placeholder="+1 (416) 555-0000" value={form.phone} onChange={handle} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Email Address *</label>
                  <input className={styles.input} type="email" name="email" placeholder="jane@example.ca" value={form.email} onChange={handle} required />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Subject *</label>
                  <select className={styles.select} name="subject" value={form.subject} onChange={handle} required>
                    <option value="">Select a subject</option>
                    <option>Product Question</option>
                    <option>Order Support</option>
                    <option>Wholesale / Bulk Inquiry</option>
                    <option>Shipping & Delivery</option>
                    <option>Returns & Refunds</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Message *</label>
                  <textarea className={styles.textarea} name="message" rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={handle} required />
                </div>

                <button type="submit" className={styles.submitBtn}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
