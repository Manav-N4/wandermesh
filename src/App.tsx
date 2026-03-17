import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InviteModalProvider } from "./context/InviteModalContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import VietnamTrip from "./pages/VietnamTrip";
import BaliTrip from "./pages/BaliTrip";
import BLRBreakaway from "./pages/BLRBreakaway";
import AboutWanderMesh from "./pages/AboutWanderMesh";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <InviteModalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/upcoming-loops/vibing-in-vietnam" element={<VietnamTrip />} />
        <Route path="/upcoming-loops/bali-uncharted" element={<BaliTrip />} />
        <Route path="/about-wandermesh" element={<AboutWanderMesh />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </InviteModalProvider>
  </BrowserRouter>
);

export default App;
