import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const services = [
  {
    id: 1,
    title: "بيع الهواتف الذكية",
    description:
      "نقدم أحدث الهواتف الذكية من جميع الماركات العالمية بأسعار تنافسية وضمان شامل",
    icon: "📱",
    features: [
      "هواتف آيفون و سامسونج",
      "هواتف هواوي و شاومي",
      "ضمان شامل لمدة سنة",
      "خدمة ما بعد البيع",
    ],
  },
  {
    id: 2,
    title: "بطاقات SIM",
    description:
      "بطاقات SIM لجميع الشبكات الألمانية مع أفضل العروض والخطط المناسبة لاحتياجاتك",
    icon: "📶",
    features: [
      "بطاقات جميع الشبكات",
      "خطط متنوعة للبيانات",
      "عروض خاصة للطلاب",
      "تفعيل فوري",
    ],
  },
  {
    id: 3,
    title: "الأجهزة اللوحية",
    description:
      "أفضل الأجهزة اللوحية للعمل والترفيه مع إمكانيات متقدمة وأداء عالي",
    icon: "📱",
    features: [
      "آيباد و سامسونج تاب",
      "أجهزة هواوي اللوحية",
      "إكسسوارات متنوعة",
      "حماية الشاشة",
    ],
  },
  {
    id: 4,
    title: "أجهزة الكمبيوتر المحمولة",
    description: "أجهزة كمبيوتر محمولة عالية الأداء للعمل والدراسة والألعاب",
    icon: "💻",
    features: [
      "لابتوبات من جميع الماركات",
      "مواصفات عالية الأداء",
      "ضمان شامل",
      "خدمة الصيانة",
    ],
  },
  {
    id: 5,
    title: "خدمة الدردشة الذكية",
    description:
      "مساعد ذكي متاح 24/7 لمساعدتك في اختيار أفضل الأجهزة والإجابة على استفساراتك",
    icon: "🤖",
    features: [
      "متاح على مدار الساعة",
      "إجابات فورية",
      "نصائح شخصية",
      "دعم باللغة العربية",
    ],
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="services-container">
        <div className="services-header">
          <h1 className="services-title">خدماتنا</h1>
          <p className="services-subtitle">
            نقدم مجموعة شاملة من الخدمات التقنية لجميع احتياجاتكم
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features">
                <h4>المميزات:</h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {service.id === 5 ? (
                <div className="chatbot-service">
                  <button
                    className="chatbot-btn"
                    onClick={() => navigate("/chatbot")}
                  >
                    💬 ابدأ المحادثة الآن
                  </button>
                  <p className="chatbot-note">
                    اضغط هنا للدردشة مع مساعدنا الذكي
                  </p>
                </div>
              ) : (
                <button className="service-btn">تعرف على المزيد</button>
              )}
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>هل تحتاج مساعدة في اختيار الخدمة المناسبة؟</h2>
          <p>فريقنا المتخصص جاهز لمساعدتك في العثور على أفضل الحلول التقنية</p>
          <button className="cta-btn" onClick={() => navigate("/contact")}>
            تواصل معنا
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Services;
