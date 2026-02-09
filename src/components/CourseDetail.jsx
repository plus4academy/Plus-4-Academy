"use client";

// src/components/CourseDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseById } from "../data/coursesData";

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);

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
          </div>
        </div>
      </main>
    </div>
  );
}
