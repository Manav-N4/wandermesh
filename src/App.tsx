import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InviteModalProvider } from "./context/InviteModalContext";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import VietnamTrip from "./pages/VietnamTrip";
import BaliTrip from "./pages/BaliTrip";
import EuropeTrip from "./pages/EuropeTrip";
import AboutWanderMesh from "./pages/AboutWanderMesh";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import InviteForm from "./components/InviteForm";

const ReferralTracker = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');

    if (ref) {
      // First-touch attribution: only store if not already present
      if (!localStorage.getItem('referralCode')) {
        localStorage.setItem('referralCode', ref);
      }

      // Cleanup URL (?ref=...)
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  return null;
};

const App = () => (
  <BrowserRouter>
    <InviteModalProvider>
      <ReferralTracker />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/upcoming-loops/vibing-in-vietnam" element={<VietnamTrip />} />
        <Route path="/upcoming-loops/bali-uncharted" element={<BaliTrip />} />
        <Route path="/upcoming-loops/summer-mesh-europe" element={<EuropeTrip />} />
        <Route path="/about-wandermesh" element={<AboutWanderMesh />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <InviteForm />
    </InviteModalProvider>
  </BrowserRouter>
);

export default App;
