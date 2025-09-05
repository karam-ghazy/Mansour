import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>هلو المانيا</h4>
          <p>متجر الهواتف والتقنيات الرائد في ألمانيا</p>
        </div>

        <div className="footer-section">
          <h4>روابط سريعة</h4>
          <ul>
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/about">من نحن</Link>
            </li>
            <li>
              <Link to="/services">خدماتنا</Link>
            </li>
            <li>
              <Link to="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>خدماتنا</h4>
          <ul>
            <li>بيع الهواتف</li>
            <li>بطاقات SIM</li>
            <li>الأجهزة اللوحية</li>
            <li>أجهزة الكمبيوتر</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>معلومات التواصل</h4>
          <p>📧 info@hellogermany.com</p>
          <p>📱 +49 123 456 7890</p>
          <p>📍 برلين، ألمانيا</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          جميع الحقوق محفوظة لدى شركة هلو المانيا <span>{year} &copy;</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
