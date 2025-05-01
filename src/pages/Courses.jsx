import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React and build your first interactive web application.',
    imageUrl: 'https://devsarticles.com/wp-content/uploads/2024/01/React-js-introduction.png',
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description: 'Understand the fundamentals of JavaScript and how to write clean, effective code.',
    imageUrl: 'https://jbstechinfo.com/wp-content/uploads/2023/08/JavaScript-Symbol.png',
  },
  {
    id: 3,
    title: 'CSS for Beginners',
    description: 'Master the art of styling web pages using CSS.',
    imageUrl: 'https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg.webp',
  },
  {
    id: 5,
    title: 'Data Science with Python',
    description: 'Dive into data science and machine learning using Python and its powerful libraries.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKGzgKHQA42GTo40DCQUnNVkUWd3FMzFJA&s',
  },
  {
    id: 6,
    title: 'AI and Machine Learning',
    description: 'Learn the basics of AI and build your first machine learning model.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaTcgooKpZKkY7PvRnGcPs-DstpfG9Xn9Xg&s',
  },
  {
    id: 7,
    title: 'UI/UX Design',
    description: 'Understand the principles of UI/UX design and create beautiful user interfaces.',
    imageUrl: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg',
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.imageUrl} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link
              to="/payment"
              state={{ title: course.title }}
              className="enroll-btn"
            >
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
