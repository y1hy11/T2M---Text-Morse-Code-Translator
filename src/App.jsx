import { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import { I18nextProvider } from "react-i18next";
import HeadImg from "./assets/Head_img.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import i18n from "./utils/i18n";
import "./styles/App.css";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/contact"));
const Convert = lazy(() => import("./pages/convert"));
const NotFound = lazy(() => import("./pages/Notfound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function PageContainer() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return (
      <div className="loader-content">
        <img src={HeadImg} alt="Loading" className="loader-logo" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/convert" element={<Convert />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <Router>
          <I18nextProvider i18n={i18n}>
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Suspense
                  fallback={
                    <div className="loader-content">
                      <img
                        src={HeadImg}
                        alt="Loading"
                        className="loader-logo"
                      />
                    </div>
                  }
                >
                  <PageContainer />
                </Suspense>
              </main>
              <Footer />
            </div>
          </I18nextProvider>
        </Router>
      </ErrorBoundary>
    </AppProvider>
  );
}

export default App;