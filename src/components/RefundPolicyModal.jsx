"use client";

import { useEffect } from "react";

export default function RefundPolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const policyData = [
    {
      icon: "💳",
      title: "Admission & Fee Payment",
      content: [
        "All fees paid are towards academic services, faculty time, study planning, and infrastructure costs.",
        "Admission is confirmed only after successful payment of the applicable fees.",
        "Fees once paid are considered acknowledgment of acceptance of our teaching methodology, schedule, and policies.",
      ],
    },
    {
      icon: "🔄",
      title: "Refund Eligibility",
      subsections: [
        {
          subtitle: "Classroom / Offline Courses",
          content: [
            "Fees once paid are non-refundable and non-transferable under any circumstances.",
            "No refund will be provided for: Change of mind after enrollment, irregular attendance or discontinuation, change of school/city/board, unsatisfactory performance, or absence due to illness.",
          ],
        },
        {
          subtitle: "Online / Digital Programs",
          content: [
            "In case access to online content has been provided, no refund will be issued once the account has been activated or study material shared.",
          ],
        },
      ],
    },
    {
      icon: "📚",
      title: "Batch Change & Course Upgrade",
      content: [
        "Batch change requests may be considered subject to availability and administrative approval.",
        "Course upgrades or changes, if permitted, may require payment of the fee difference.",
        "Refunds will not be granted for partial course completion.",
      ],
    },
    {
      icon: "⏸️",
      title: "Discontinuation of Course by Student",
      content: [
        "If a student chooses to discontinue the course mid-session for any reason, no refund of fees will be provided.",
        "Course fees cannot be adjusted or carried forward to future batches.",
      ],
    },
    {
      icon: "🏢",
      title: "Cancellation by Plus 4 Academy",
      content: [
        "In rare cases, if Plus 4 Academy cancels a batch due to unavoidable circumstances:",
        "A pro-rata refund may be considered for the unused portion of the course, after deducting administrative charges.",
        "Such decisions remain at the sole discretion of Plus 4 Academy.",
      ],
    },
    {
      icon: "🎁",
      title: "Scholarships, Discounts & Offers",
      content: [
        "Fees paid under scholarship, discount, or promotional offers are strictly non-refundable.",
        "Any concession given is temporary and does not affect refund eligibility.",
      ],
    },
    {
      icon: "💰",
      title: "Mode of Refund",
      content: [
        "Approved refunds, if any, will be processed within 15–30 working days.",
        "Refunds will be credited via the original mode of payment only.",
        "No cash refunds will be made.",
      ],
    },
    {
      icon: "⚖️",
      title: "Dispute Resolution",
      content: [
        "In case of any dispute, the decision of Plus 4 Academy management shall be final and binding.",
        "All disputes will be subject to the jurisdiction of Jabalpur courts only.",
      ],
    },
    {
      icon: "📝",
      title: "Policy Updates",
      content: [
        "Plus 4 Academy reserves the right to modify or update this Refund Policy at any time without prior notice.",
        "The latest version of the policy will always be available on the official website.",
      ],
    },
  ];

  return (
    <div className="refund-modal-overlay" onClick={onClose}>
      <div
        className="refund-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="refund-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="refund-modal-header">
          <h2>Refund Policy</h2>
          <p className="refund-subtitle">Plus 4 Academy</p>
        </div>

        <div className="refund-modal-intro">
          <p>
            At Plus 4 Academy, we are committed to providing high-quality
            educational services with complete transparency. This Refund Policy
            outlines the terms and conditions under which refunds, if any, may
            be processed.
          </p>
          <p className="refund-notice">
            By enrolling in any course or program offered by Plus 4 Academy, the
            student and/or parent/guardian agrees to the terms stated below.
          </p>
        </div>

        <div className="refund-policy-cards">
          {policyData.map((section, index) => (
            <div key={index} className="refund-card">
              <div className="refund-card-icon">{section.icon}</div>
              <h3 className="refund-card-title">{section.title}</h3>

              {section.subsections ? (
                <div className="refund-subsections">
                  {section.subsections.map((sub, subIndex) => (
                    <div key={subIndex} className="refund-subsection">
                      <h4>{sub.subtitle}</h4>
                      <ul>
                        {sub.content.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="refund-card-list">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="refund-modal-footer">
          <p>
            For any questions or clarifications, please contact us at
            info@plus4academy.com
          </p>
        </div>
      </div>
    </div>
  );
}
