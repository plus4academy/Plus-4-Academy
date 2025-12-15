"use client";

import { useState } from "react";
import RefundPolicyModal from "./RefundPolicyModal";

export default function Footer() {
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section contact-info">
              <h3>Plus 4 Academy</h3>
              <p className="address">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Learning+Lane+Your+City+Your+State+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  📍 123 Learning Lane, Your City, Your State, India
                </a>
              </p>
              <p className="contact">
                <a href="tel:+919876543210" className="footer-link">
                  📞 +91-98765-43210
                </a>
              </p>
              <p className="contact">
                <a href="mailto:info@plus4academy.com" className="footer-link">
                  📧 info@plus4academy.com
                </a>
              </p>
            </div>

            <div className="footer-section map-section">
              <iframe
                title="Plus 4 Academy Location"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0, borderRadius: "8px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5215577642803!2d77.20986312346895!3d28.613939775693605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0279c1a95555%3A0xd19b87b5b1a5d5d!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Plus 4 Academy. All rights reserved.</p>
            <button
              className="refund-policy-link"
              onClick={() => setIsRefundModalOpen(true)}
            >
              Refund Policy
            </button>
          </div>
        </div>
      </footer>

      <RefundPolicyModal
        isOpen={isRefundModalOpen}
        onClose={() => setIsRefundModalOpen(false)}
      />
    </>
  );
}
