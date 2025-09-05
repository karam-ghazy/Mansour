import Layout from "./Layout";
import aboutImage from "../Images/about.avif";

function About() {
  return (
    <Layout>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">من نحن</h1>
            <p className="about-description">
              مرحباً بكم في "هلو المانيا" - متجركم الموثوق للهواتف والتقنيات.
              نحن متخصصون في بيع الهواتف الذكية والأجهزة اللوحية وأجهزة
              الكمبيوتر المحمولة وجميع التقنيات الحديثة.
            </p>
            <p className="about-description">
              تأسس متجرنا على مبادئ الجودة والثقة، حيث نقدم أفضل الخدمات التقنية
              بما في ذلك بيع الهواتف، بطاقات SIM، الأجهزة اللوحية، أجهزة
              الكمبيوتر المحمولة وجميع احتياجاتكم التقنية.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <h3>رؤيتنا</h3>
                <p>
                  أن نكون المتجر الرائد في مجال بيع الهواتف والتقنيات في ألمانيا
                </p>
              </div>
              <div className="feature-item">
                <h3>مهمتنا</h3>
                <p>
                  تقديم أفضل الهواتف والأجهزة التقنية مع خدمات مميزة لجميع
                  عملائنا
                </p>
              </div>
              <div className="feature-item">
                <h3>خدماتنا</h3>
                <p>
                  بيع الهواتف، بطاقات SIM، الأجهزة اللوحية، أجهزة الكمبيوتر
                  المحمولة والتقنيات الحديثة
                </p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img
              src={aboutImage}
              alt="متجر الهواتف والتقنيات"
              className="about-img"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
