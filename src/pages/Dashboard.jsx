import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const user = {
    name: "Learner",
    email: "learner@gmail.com",
    enrolledCourses: [
      {
        id: 1,
        title: "Web Development",
        link: "https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
        image: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg"
      },
      {
        id: 2,
        title: "Data Science",
        link: "https://www.youtube.com/watch?v=ua-CiDNNj30",
        image: 'https://static.vecteezy.com/system/resources/previews/005/442/693/non_2x/data-science-analytics-internet-and-technology-concept-concept-photo.jpg'
      },
      {
        id: 3,
        title: "Machine Learning",
        link: "https://www.youtube.com/watch?v=i_LwzRVP7bg",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDD6unlKJtldLzaUXsGfvDCltcSmw6ne4tw&s'
      }
    ]
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>LMS Dashboard</h2>
        <nav>
          <Link to="/courses">Courses</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/feedback">Feedback</Link> 
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome, {user.name}</h1>
          <p>{user.email}</p>
        </header>

        <section className="enrolled-courses">
          <h2>Your Enrolled Courses</h2>
          <div className="courses-list">
            {user.enrolledCourses.map((course) => (
              <a
                key={course.id}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="course-card"
              >
                {course.image && (
                  <img src={course.image} alt={course.title} className="course-image" />
                )}
                <h3>{course.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="dashboard-actions">
          <Link to="/courses">
            <button className="explore-btn">Explore More Courses</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
