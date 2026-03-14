/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { Features } from "./pages/Features";
import { AiSystem } from "./pages/AiSystem";
import { QrCard } from "./pages/QrCard";
import { SmartCity } from "./pages/SmartCity";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ScannedCard } from "./pages/ScannedCard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/features" element={<Features />} />
        <Route path="/ai-system" element={<AiSystem />} />
        <Route path="/qr-card" element={<QrCard />} />
        <Route path="/smart-city" element={<SmartCity />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/scanned-card" element={<ScannedCard />} />
      </Routes>
    </Router>
  );
}
