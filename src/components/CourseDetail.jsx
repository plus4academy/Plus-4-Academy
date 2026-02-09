"use client";

// src/components/CourseDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";

// Import images
import img9th from "../assets/9th_foundation.jpg";
import img10th from "../assets/10th_foundation.jpg";
import img11Jee from "../assets/11_jee.jpg";
import img11Neet from "../assets/11_neet.jpg";
import img12Jee from "../assets/12_jee.jpg";
import img12Neet from "../assets/12_neet.jpg";
import imgJeeCrash from "../assets/jee_crash.png";
import imgNeetCrash from "../assets/neet_crash.png";

export default function CourseDetail() {
  const { courseId } = useParams();
  
  // Define courses directly in this component (same as Courses.jsx)
  const courses = [
    {
      id: 1,
      title: "Class 9 Foundation Course",
      description: "Strong Basics. Smart Start. Confident Future.",
      shortDescription: "Build a strong foundation with comprehensive coverage of NCERT curriculum and beyond.",
      fullDescription: "Our Class 9 Foundation Course is designed to give students a head start in their academic journey. We focus on building strong conceptual understanding in Mathematics, Science, and other core subjects. The course includes interactive live classes, doubt-solving sessions, and regular assessments to track progress.",
      features: [
        "Live interactive classes with expert teachers",
        "Comprehensive study material aligned with NCERT",
        "Regular tests and performance analysis",
        "Doubt clearing sessions",
        "Access to recorded lectures"
      ],
      ideal: "Perfect for students who want to build a strong academic foundation and prepare early for competitive exams.",
      image: img9th,
    },
    {
      id: 2,
      title: "Class 10 Foundation Course",
      description: "Board Excellence + Competitive Readiness",
      shortDescription: "Excel in board exams while building a foundation for JEE/NEET preparation.",
      fullDescription: "Our Class 10 Foundation Course balances board exam preparation with competitive exam readiness. We provide comprehensive coverage of the syllabus with special focus on application-based learning and problem-solving skills.",
      features: [
        "Board exam focused curriculum",
        "Introduction to JEE/NEET level concepts",
        "Mock tests and sample papers",
        "Personal mentorship and guidance",
        "Weekly progress reports"
      ],
      ideal: "Ideal for students aiming for top scores in board exams and planning to pursue JEE/NEET preparation.",
      image: img10th,
    },
    {
      id: 3,
      title: "Class 11 JEE Course",
      description: "Master Concepts. Crack the Competition.",
      shortDescription: "Comprehensive JEE preparation starting from the basics to advanced problem solving.",
      fullDescription: "Our Class 11 JEE Course provides rigorous training in Physics, Chemistry, and Mathematics. We focus on concept clarity, problem-solving techniques, and exam strategies to help students excel in JEE Main and Advanced.",
      features: [
        "Topic-wise concept building sessions",
        "Daily practice problems and assignments",
        "Weekly tests and chapter-wise tests",
        "Previous year question analysis",
        "One-on-one doubt solving"
      ],
      ideal: "Designed for serious JEE aspirants who want to build a strong foundation in Class 11.",
      image: img11Jee,
    },
    {
      id: 4,
      title: "Class 11 NEET Course",
      description: "Build Medical Dreams from Day One",
      shortDescription: "Complete NEET preparation with focus on Biology, Chemistry, and Physics.",
      fullDescription: "Our Class 11 NEET Course offers comprehensive preparation for medical entrance exams. With experienced faculty and proven teaching methodology, we ensure students grasp complex concepts in Biology, Physics, and Chemistry.",
      features: [
        "NCERT-based conceptual learning",
        "Biology practicals and diagrams",
        "Regular mock tests",
        "NEET pattern test series",
        "Performance tracking and analysis"
      ],
      ideal: "Perfect for students aspiring to pursue medical education and crack NEET on their first attempt.",
      image: img11Neet,
    },
    {
      id: 5,
      title: "Class 12 JEE Course",
      description: "Refine, Revise & Rank Higher",
      shortDescription: "Advanced JEE preparation with focus on exam strategies and rank improvement.",
      fullDescription: "Our Class 12 JEE Course is designed for final year students to maximize their JEE scores. We provide intensive revision, advanced problem solving, and full-length mock tests simulating actual exam conditions.",
      features: [
        "Complete syllabus revision",
        "Advanced problem solving sessions",
        "Full-length JEE mock tests",
        "Time management techniques",
        "Rank prediction analysis"
      ],
      ideal: "Ideal for Class 12 students serious about securing top ranks in JEE Main and Advanced.",
      image: img12Jee,
    },
    {
      id: 6,
      title: "Class 12 NEET Course",
      description: "Precision. Practice. Performance.",
      shortDescription: "Final year NEET preparation with extensive practice and exam strategies.",
      fullDescription: "Our Class 12 NEET Course provides comprehensive final-year preparation with focus on high-yield topics, extensive practice, and exam temperament. We ensure students are fully prepared for NEET with confidence.",
      features: [
        "Intensive revision program",
        "NEET-specific shortcuts and tricks",
        "Grand mock tests",
        "Biology diagram practice",
        "Strategy sessions for exam day"
      ],
      ideal: "Designed for Class 12 students determined to achieve top scores in NEET.",
      image: img12Neet,
    },
    {
      id: 7,
      title: "JEE Crash Course",
      description: "Last-Minute Power Boost for JEE",
      shortDescription: "Intensive last-minute revision covering all important topics and formulas.",
      fullDescription: "Our JEE Crash Course is a high-intensity program designed for students in the final months before JEE. We cover all important topics, formulas, shortcuts, and exam strategies to maximize your score in limited time.",
      features: [
        "Quick revision of all topics",
        "Important formulas and shortcuts",
        "Previous year questions",
        "Time-bound practice tests",
        "Last-minute tips and strategies"
      ],
      ideal: "Perfect for students who need a final push before JEE exams.",
      image: imgJeeCrash,
    },
    {
      id: 8,
      title: "NEET Crash Course",
      description: "Revise Smart. Score High.",
      shortDescription: "Strategic revision program focusing on high-weightage topics and quick learning.",
      fullDescription: "Our NEET Crash Course provides targeted preparation in the crucial final months. We focus on high-weightage topics, important diagrams, and exam strategies to help you maximize your NEET score.",
      features: [
        "High-weightage topic coverage",
        "Important diagrams and mnemonics",
        "Rapid revision sessions",
        "Mock tests in exam pattern",
        "Strategy for attempting NEET"
      ],
      ideal: "Ideal for students who want to make the most of their final preparation days.",
      image: imgNeetCrash,
    },
  ];

  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="course-not-found">
          <h2>Course Not Found</h2>
          <Link to="/courses" className="back-to-courses-btn">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <header className="course-detail-header">
        <div className="course-detail-header-container">
          <h1 className="course-detail-logo">Plus 4 Academy</h1>
          <div className="course-detail-nav">
            <Link to="/" className="course-detail-nav-link">
              Home
            </Link>
            <Link to="/courses" className="course-detail-nav-link">
              Courses
            </Link>
          </div>
        </div>
      </header>

      <main className="course-detail-main">
        <div className="course-detail-container">
          <div className="course-detail-image-section">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="course-detail-image"
            />
          </div>

          <div className="course-detail-content">
            <h1 className="course-detail-title">{course.title}</h1>
            <p className="course-detail-short-desc">
              {course.shortDescription}
            </p>

            <div className="course-detail-description">
              <h3>About This Course</h3>
              <p>{course.fullDescription}</p>
            </div>

            <div className="course-detail-features">
              <h3 className="features-title">Key Features:</h3>
              <ul className="features-list">
                {course.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="course-detail-ideal">
              <p className="ideal-text">👉 {course.ideal}</p>
            </div>

            <div className="course-info-banner">
              <p>📚 Explore our course offerings. Enrollment details coming soon!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
