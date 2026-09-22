"use client";
import { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import Image from "next/image";
import styles from "./bulk.module.css";

export default function BulkOrderPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "",
    product: "", quantity: ""
  });
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
          src="/hero_bulk_hd.webp" unoptimized 
          alt="VibeRoot Bulk Buy Banner" 
          fill 
          priority 
          className={styles.heroImgBanner}
        />
      </section>

      <section className={styles.contentSection}>
        <div className={styles.inner}>
          {/* Benefits */}
          <div className={styles.benefits}>
            <h2 className={styles.benefitsTitle}>Why Order in Bulk?</h2>
            {[
              { icon: "💰", title: "Wholesale Pricing", desc: "Save up to 35% off retail on orders of 10kg+" },
              { icon: "🚚", title: "Priority Fulfillment", desc: "Dedicated logistics support and priority Canada Post shipping" },
              { icon: "📦", title: "Custom Packaging", desc: "White-label and custom branding options available on 50kg+ orders" },
              { icon: "🤝", title: "Dedicated Account Manager", desc: "A wellness expert assigned to your account for ongoing support" },
            ].map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>✓</div>
                <h2>Request Received!</h2>
                <p>Thank you, <strong>{form.name}</strong>! Our wholesale team will contact you at <strong>{form.email}</strong> within 24 business hours.</p>
                <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setForm({ name:"", phone:"", email:"", address:"", product:"", quantity:"" }); }}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={submit}>
                <h2 className={styles.formTitle}>Request a Quote</h2>
                <p className={styles.formSubtitle}>Fill in your details and we'll get back to you within 24 hours.</p>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Full Name *</label>
                    <input className={styles.input} type="text" name="name" placeholder="Jane Smith" value={form.name} onChange={handle} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone Number *</label>
                    <input className={styles.input} type="tel" name="phone" placeholder="+1 (587) 832-0198" value={form.phone} onChange={handle} required />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Email Address *</label>
                  <input className={styles.input} type="email" name="email" placeholder="jane@yourcompany.ca" value={form.email} onChange={handle} required />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Shipping Address *</label>
                  <input className={styles.input} type="text" name="address" placeholder="Address / Adresse : VibeRoot Essentials T3P2H4 Calgary, Alberta Canada" value={form.address} onChange={handle} required />
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Product *</label>
                    <select className={styles.select} name="product" value={form.product} onChange={handle} required>
                      <option value="">Select a product</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                      <option value="mixed">Mixed Assortment</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Variant</label>
                    <select className={styles.select} name="variant" onChange={handle} defaultValue="250g">
                      <option value="250g">250g</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Quantity (units) *</label>
                  <input className={styles.input} type="number" name="quantity" placeholder="e.g. 50" min="10" value={form.quantity} onChange={handle} required />
                </div>

                <button type="submit" className={styles.submitBtn}>Submit Bulk Order Request →</button>

                <p className={styles.formNote}>* Minimum order: 10 units. For custom packaging or white-label enquiries, mention in additional comments.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
