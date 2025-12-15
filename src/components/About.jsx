"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="about" ref={ref}>
      <div className="about-container">
        <h2 className="section-title">About Plus 4 Academy</h2>

        <div className="about-content">
          <div className="why-section">
            <h3 className="about-subtitle">Why Plus 4 Academy?</h3>
            <p className="about-text">
              Plus 4 Academy was founded to solve one major problem students
              face today — lack of conceptual clarity and proper guidance.
            </p>
            <p className="about-text">
              We provide structured learning, expert teaching, and personal
              mentorship to help students excel in school exams while preparing
              confidently for JEE Main, JEE Advanced, and NEET.
            </p>
          </div>

          <div className="philosophy-section">
            <h3 className="philosophy-title">Our Teaching Philosophy</h3>
            <h4 className="philosophy-subtitle">
              Learn Concepts. Not Just Answers.
            </h4>
            <p className="about-text">
              At Plus 4 Academy, we focus on deep understanding instead of rote
              learning.
            </p>
            <p className="about-text">Our teaching emphasizes:</p>
            <ul className="philosophy-list">
              <li>Strong conceptual foundations</li>
              <li>Logical and analytical thinking</li>
              <li>Application-based problem solving</li>
              <li>Confidence to tackle unfamiliar questions</li>
            </ul>
            <p className="about-text emphasis-text">
              We don't train students to memorize — we train them to think.
            </p>
          </div>

          <div className="integrated-section">
            <h3 className="integrated-title">
              Integrated Boards + Competitive Preparation
            </h3>
            <h4 className="integrated-subtitle">One Preparation. Two Goals.</h4>
            <p className="about-text">Our integrated curriculum ensures:</p>
            <ul className="integrated-list">
              <li>Strict alignment with NCERT syllabus</li>
              <li>Gradual introduction to JEE & NEET level problems</li>
              <li>Regular revision and testing</li>
              <li>Reduced academic stress through smart planning</li>
            </ul>
            <p className="about-text">
              Students perform better in boards without sacrificing competitive
              exam preparation.
            </p>
          </div>

          <div className="courses-section">
            <h3 className="courses-title">Courses We Offer</h3>
            <div className="courses-grid">
              <div className="course-card">
                <h4>Foundation Program (Class 9 & 10)</h4>
                <ul className="course-list">
                  <li>Strong basics in Maths & Science</li>
                  <li>Early exposure to competitive concepts</li>
                  <li>Preparation for Olympiads & school exams</li>
                </ul>
              </div>
              <div className="course-card">
                <h4>Class 11 & 12 Science Coaching (PCM / PCB)</h4>
                <ul className="course-list">
                  <li>Board exam excellence</li>
                  <li>Competitive exam readiness</li>
                  <li>Structured, exam-focused learning</li>
                </ul>
              </div>
              <div className="course-card">
                <h4>JEE & NEET Preparation</h4>
                <ul className="course-list">
                  <li>In-depth concept coverage</li>
                  <li>Advanced problem-solving techniques</li>
                  <li>Previous year question analysis</li>
                  <li>Exam strategy & time management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="faculty-section">
            <h3 className="faculty-title">Faculty & Mentorship</h3>
            <h4 className="faculty-subtitle">More Than Teachers — Mentors</h4>
            <p className="about-text">Our experienced faculty ensures:</p>
            <ul className="faculty-list">
              <li>Simple explanation of complex topics</li>
              <li>Individual doubt-clearing sessions</li>
              <li>Continuous academic monitoring</li>
              <li>Motivation and personal guidance</li>
            </ul>
            <p className="about-text emphasis-text">
              Every student receives personal attention.
            </p>
          </div>

          <div className="assessment-section">
            <h3 className="assessment-title">
              Assessments & Performance Tracking
            </h3>
            <ul className="assessment-list">
              <li>Chapter-wise tests</li>
              <li>Cumulative assessments</li>
              <li>Full-length mock exams</li>
              <li>Detailed performance analysis</li>
            </ul>
            <p className="about-text">
              Regular feedback keeps students and parents informed and on track.
            </p>
          </div>

          <div className="why-us">
            <h3 className="why-us-title">Why Students & Parents Choose Us</h3>
            <ul className="trust-list">
              <li>✔ Concept-focused teaching</li>
              <li>✔ Integrated board + competitive approach</li>
              <li>✔ Small batch sizes</li>
              <li>✔ Regular tests & feedback</li>
              <li>✔ Dedicated personal mentorship</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
