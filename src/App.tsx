import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InviteModalProvider } from "./context/InviteModalContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import VietnamTrip from "./pages/VietnamTrip";
import BaliTrip from "./pages/BaliTrip";
import AboutWanderMesh from "./pages/AboutWanderMesh";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import InviteForm from "./components/InviteForm";

const App = () => (
  <BrowserRouter>
    <InviteModalProvider>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/upcoming-loops/vibing-in-vietnam" element={<VietnamTrip />} />
        <Route path="/upcoming-loops/bali-uncharted" element={<BaliTrip />} />
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
