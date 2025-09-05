import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
