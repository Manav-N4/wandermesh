import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import VietnamTrip from "./pages/VietnamTrip";
import BaliTrip from "./pages/BaliTrip";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/upcoming-loops/vibing-in-vietnam" element={<VietnamTrip />} />
      <Route path="/upcoming-loops/bali-uncharted" element={<BaliTrip />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
