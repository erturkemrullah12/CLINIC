// App.jsx
// Root component — combines Home page with OurTreatments ↔ TreatmentDetail navigation.
// No external router needed; navigation is handled via local state.

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Treatments from "./components/Treatments";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import OurTreatments from "./OurTreatments";
import TreatmentDetail from "./TreatmentDetail";
import Hakkimizda from "./components/Hakkimizda";
import treatments from "./treatments.json";
import Booking from "./components/BookingForm";
import BookingForm from "./components/BookingForm";
export default function App() {
  const [view, setView] = useState("home"); // "home" | "treatments" | "treatment-detail" | "hakkimizda" | "booking"
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleShowTreatments = () => {
    setView("treatments");
  };

  const handleSelectTreatment = (treatment) => {
    setSelectedTreatment(treatment);
    setView("treatment-detail");
  };

  const handleBackToTreatments = () => {
    setSelectedTreatment(null);
    setView("treatments");
  };

  const handleBackToHome = () => {
    setView("home");
  };

  const handleShowHakkimizda = () => {
    setView("hakkimizda");
  };

  const handleShowBooking = () => {
    setView("booking");
  };

  const handleNavigateToSection = (sectionId) => {
    // Ana sayfaya dön
    setView("home");
    // Sayfa render olduktan sonra scroll et
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  // Treatment Detail View
  if (view === "treatment-detail" && selectedTreatment) {
    return (
      <TreatmentDetail
        treatment={selectedTreatment}
        onBack={handleBackToTreatments}
      />
    );
  }

  // Our Treatments View
  if (view === "treatments") {
    return (
      <div>
        <Header
          onNavigateToTreatments={handleShowTreatments}
          onNavigateToHome={handleBackToHome}
          onNavigateToHakkimizda={handleShowHakkimizda}
          onNavigateToBooking={handleShowBooking}
          onNavigateToSection={handleNavigateToSection}
        />
        <OurTreatments
          treatments={treatments}
          onSelect={handleSelectTreatment}
        />
        <Footer />
      </div>
    );
  }

  // Hakkımızda / Philosophy View
  if (view === "hakkimizda") {
    return (
      <div className="bg-background-light dark:bg-background-dark">
        <Header
          onNavigateToTreatments={handleShowTreatments}
          onNavigateToHome={handleBackToHome}
          onNavigateToHakkimizda={handleShowHakkimizda}
          onNavigateToBooking={handleShowBooking}
          onNavigateToSection={handleNavigateToSection}
          activeNav="philosophy"
        />
        <Hakkimizda
          onBookConsultation={handleShowBooking}
          onViewTreatments={handleShowTreatments}
        />
        <Footer />
      </div>
    );
  }

  // Booking View
  if (view === "booking") {
    return (
      <div className="bg-background-light dark:bg-background-dark text-[#1c190d] antialiased min-h-screen">
        <Header
          onNavigateToTreatments={handleShowTreatments}
          onNavigateToHome={handleBackToHome}
          onNavigateToHakkimizda={handleShowHakkimizda}
          onNavigateToBooking={handleShowBooking}
          onNavigateToSection={handleNavigateToSection}
        />
        <main className="flex flex-col py-12">
          <BookingForm />
        </main>
        <Footer />
      </div>
    );
  }

  // Home Page View
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1c190d] antialiased">
      <Header
        onNavigateToTreatments={handleShowTreatments}
        onNavigateToHome={handleBackToHome}
        onNavigateToHakkimizda={handleShowHakkimizda}
        onNavigateToBooking={handleShowBooking}
        onNavigateToSection={handleNavigateToSection}
      />
      <main className="flex flex-col">
        <Hero onExploreTreatments={handleShowTreatments} />
        <WhyUs />
        <Treatments onLearnMore={handleShowTreatments} />
        <Results />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
