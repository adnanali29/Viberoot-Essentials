"use client";
import { useState } from "react";
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
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <span className={styles.heroOverline}>📬 GET IN TOUCH</span>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>We're a real team of people who care about your wellness journey. Reach out — we'd love to hear from you.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.inner}>
          {/* Contact Info */}
          <div className={styles.infoSide}>
            <h2 className={styles.infoTitle}>Let's Connect</h2>
            <p className={styles.infoBody}>Whether you have a question about our products, need help with your order, or want to explore wholesale opportunities — we're here.</p>

            {[
              { icon: "📍", label: "Address", value: "123 Wellness Ave, Toronto, Ontario, M5V 1A1" },
              { icon: "📧", label: "Email", value: "hello@viberoot.ca" },
              { icon: "📞", label: "Phone", value: "+1 (416) 555-0190" },
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
              href="https://wa.me/14165550190"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
