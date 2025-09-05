import { Link, useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import Layout from "./Layout";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="home-container">
        <section className="hero-section">
          <h1 className="hero-title">هلو المانيا – كل ما تحتاجه من تقنيات</h1>
          <p className="hero-subtitle">
            أحدث الهواتف، بطاقات SIM، الأجهزة اللوحية والكمبيوترات المحمولة مع
            دعم كامل وخدمة مميزة
          </p>
          <div className="hero-cta">
            <button
              className="cta-btn primary"
              onClick={() => navigate("/services")}
            >
              استكشف خدماتنا
            </button>
            <Link className="cta-btn" to="/contact">
              تواصل معنا
            </Link>
          </div>
        </section>

        <Welcome />

        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">أحدث الهواتف</h3>
              <p className="feature-description">
                تشكيلة واسعة من أفضل الموديلات مع ضمان وخدمة ما بعد البيع
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📶</div>
              <h3 className="feature-title">بطاقات لجميع الشبكات</h3>
              <p className="feature-description">
                عروض مميزة للبيانات والمكالمات تناسب احتياجاتك اليومية
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">دعم وخبرة</h3>
              <p className="feature-description">
                فريق متخصص يساعدك في اختيار الأنسب ويجيب عن استفساراتك
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2 className="cta-title">جاهز للبداية؟</h2>
          <p className="cta-description">
            اكتشف كيف يمكننا مساعدتك في اختيار أفضل الحلول التقنية لك ولعائلتك
          </p>
          <button className="cta-btn" onClick={() => navigate("/services")}>
            اطلع على الخدمات
          </button>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
