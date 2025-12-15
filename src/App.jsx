"use client";

import { useRef, useState } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import JoinUsForm from "./components/JoinUsForm";
import Footer from "./components/Footer";
import FloatingJoinButton from "./components/FloatingJoinButton";
import JoinUsFormModal from "./components/JoinUsFormModal";
import "./styles.css";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const reviewsRef = useRef(null);
  const joinRef = useRef(null);
  const contactRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    setMobileMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <TopBar />
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onGalleryClick={() => scrollToSection(galleryRef)}
        onReviewsClick={() => scrollToSection(reviewsRef)}
        onJoinClick={() => scrollToSection(joinRef)}
        onContactClick={() => scrollToSection(contactRef)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <FloatingJoinButton onJoinClick={() => scrollToSection(joinRef)} />

      <JoinUsFormModal />

      <section ref={homeRef}>
        <Hero onEnquireClick={() => scrollToSection(joinRef)} />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={galleryRef}>
        <Gallery />
      </section>

      <section ref={reviewsRef}>
        <Reviews />
      </section>

      <section ref={joinRef}>
        <JoinUsForm />
      </section>

      <section ref={contactRef}>
        <Footer />
      </section>
    </div>
  );
}

