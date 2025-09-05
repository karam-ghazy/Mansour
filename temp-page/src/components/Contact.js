import { useState } from "react";
import Layout from "./Layout";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true;
    const phoneRegex = /^[+]?[-0-9\s()]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "الاسم مطلوب";
        if (value.trim().length < 2) return "الاسم يجب أن يكون على الأقل حرفين";
        if (value.trim().length > 50) return "الاسم يجب أن يكون أقل من 50 حرف";

        const nameRegex =
          /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-zA-Z\s]+$/;
        if (!nameRegex.test(value.trim()))
          return "الاسم يجب أن يحتوي على أحرف فقط (بدون أرقام أو رموز خاصة)";
        return "";

      case "email":
        if (!value.trim()) return "البريد الإلكتروني مطلوب";
        if (!validateEmail(value)) return "يرجى إدخال بريد إلكتروني صحيح";
        return "";

      case "phone":
        if (value && !validatePhone(value)) return "يرجى إدخال رقم هاتف صحيح";
        return "";

      case "subject":
        if (!value) return "يرجى اختيار الموضوع";
        return "";

      case "message":
        if (!value.trim()) return "الرسالة مطلوبة";
        if (value.trim().length < 10)
          return "الرسالة يجب أن تكون على الأقل 10 أحرف";
        if (value.trim().length > 1000)
          return "الرسالة يجب أن تكون أقل من 1000 حرف";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("validation-error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">تواصل معنا</h1>
          <p className="contact-subtitle">
            نحن هنا لمساعدتك. أرسل لنا رسالتك وسنرد عليك في أقرب وقت ممكن.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3>معلومات التواصل</h3>
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-details">
                  <h4>البريد الإلكتروني</h4>
                  <p>info@hellogermany.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-details">
                  <h4>رقم الهاتف</h4>
                  <p>+49 123 456 7890</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>العنوان</h4>
                  <p>برلين، ألمانيا</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>ساعات العمل</h3>
              <div className="working-hours">
                <p>الاثنين - الجمعة: 9:00 ص - 6:00 م</p>
                <p>السبت: 10:00 ص - 4:00 م</p>
                <p>الأحد: مغلق</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">الاسم الكامل *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.name && errors.name ? "error" : ""}
                  placeholder="أدخل اسمك الكامل"
                />
                {touched.name && errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.email && errors.email ? "error" : ""}
                  placeholder="أدخل بريدك الإلكتروني"
                />
                {touched.email && errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.phone && errors.phone ? "error" : ""}
                  placeholder="أدخل رقم هاتفك"
                />
                {touched.phone && errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject">الموضوع *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.subject && errors.subject ? "error" : ""}
                >
                  <option value="">اختر الموضوع</option>
                  <option value="general">استفسار عام</option>
                  <option value="support">دعم فني</option>
                  <option value="partnership">شراكة</option>
                  <option value="feedback">ملاحظات</option>
                  <option value="other">أخرى</option>
                </select>
                {touched.subject && errors.subject && (
                  <span className="error-message">{errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">الرسالة *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.message && errors.message ? "error" : ""}
                  rows="6"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
                <div className="message-info">
                  <span className="char-count">
                    {formData.message.length}/1000 حرف
                  </span>
                </div>
                {touched.message && errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  ✅ تم إرسال رسالتك بنجاح! سنرد عليك قريباً.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="error-message">
                  ❌ حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.
                </div>
              )}

              {submitStatus === "validation-error" && (
                <div className="error-message">
                  ❌ يرجى تصحيح الأخطاء في النموذج قبل الإرسال.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
