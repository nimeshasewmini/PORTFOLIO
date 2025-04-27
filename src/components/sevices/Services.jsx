import React from 'react';
import { FaLaptopCode, FaServer, FaPencilRuler, FaDatabase } from 'react-icons/fa'; // Add icons
import "./services.scss";

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and user-friendly interfaces using React, HTML, CSS, and JavaScript.',
    icon: <FaLaptopCode />, // Icon for frontend
  },
  {
    title: 'Backend Development',
    description: 'Developing scalable backend systems with .NET, MySQL, and XAMPP for efficient data management.',
    icon: <FaServer />, // Icon for backend
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user experiences using Figma, Adobe XD, and Adobe Illustrator.',
    icon: <FaPencilRuler />, // Icon for UI/UX
  },
  {
    title: 'Full-Stack Projects',
    description: 'Creating full-stack applications like Food Ordering Website and Movie Applications using React, Next.js, and API integration.',
    icon: <FaDatabase />, // Icon for full-stack
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">My Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
