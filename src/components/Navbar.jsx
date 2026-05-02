import logo from "../assets/SiteLogo.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navbar({
  onHomeClick,
  onGalleryClick,
  onReviewsClick,
  onJoinClick,
  onContactClick,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const isScrollingUp = currentScrollY < lastScrollY - 2;
      const isScrollingDown = currentScrollY > lastScrollY + 6;

      if (currentScrollY < 80 || mobileMenuOpen) {
        setIsNavbarVisible(true);
      } else if (isScrollingUp) {
        setIsNavbarVisible(true);
      } else if (isScrollingDown && currentScrollY > 140) {
        setIsNavbarVisible(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="navbar-spacer" aria-hidden="true"></div>
      <nav
        className={`navbar ${
          isNavbarVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src={logo}
              alt="Plus 4 Academy Logo"
              className="navbar-logo-img"
            />
          </div>

          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            <a
              href="https://quiz.plus4academy.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="scolsat-button"
            >
              <span className="scolsat-text">Scholsat</span>
              <span className="scolsat-icon">{"\uD83D\uDE80"}</span>
            </a>

            <button onClick={onHomeClick} className="nav-link">
              Home
            </button>

            <Link
              to="/directors-message"
              className="nav-link nav-link-featured"
              onClick={() => setMobileMenuOpen(false)}
            >
              Director&apos;s Message
            </Link>

            <Link
              to="/about-us"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/courses"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Courses
            </Link>

            <button onClick={onGalleryClick} className="nav-link">
              Our Gallery
            </button>

            <button onClick={onReviewsClick} className="nav-link">
              Reviews
            </button>

            <Link
              to="/ContactUs"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <button onClick={onJoinClick} className="nav-link cta-button">
              Join Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
