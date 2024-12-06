import React from 'react';
import './Dashboard.css';
import chatgptLogo from '../assets/chatgpt.png';
import dalleLogo from '../assets/dalle.png';
import midjourneyLogo from '../assets/midjourney.png';
import runwayLogo from '../assets/runwayml.png';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to M78</h1>
      <p>
        Generative AI has transformed the way we interact with technology, providing innovative solutions in natural 
        language processing, image creation, and content generation. OpenAI's ChatGPT has revolutionized customer 
        service and content generation with its advanced conversational AI capabilities. Similarly, DALL-E, a system 
        that generates images from textual descriptions, has opened new creative possibilities in design and marketing. 
        Other tools like MidJourney and Runway ML have expanded the boundaries of AI-powered art and video editing. 
        These tools are being adopted across industries, enhancing productivity and creativity.
      </p>
      <p>
        Read more about the innovations in AI on the{' '}
        <a href="https://www.technologyreview.com/" target="_blank" rel="noopener noreferrer">
          MIT Technology Review
        </a>.
      </p>
      <h2>Technical Aspects of the Project</h2>
      <p>
        This application is built as a full-stack project using a modern tech stack. The frontend is developed with 
        ReactJS for building a dynamic Single Page Application (SPA) and styled with CSS for a clean and responsive design. 
        The backend is built using Node.js and Express.js, providing RESTful APIs for data handling and user authentication. 
        MongoDB serves as the database, storing user credentials and chart data. Authentication is implemented using 
        JSON Web Tokens (JWT) for secure session management. The app is hosted on a single server, with the frontend 
        served through NGINX and the backend running on port 3000. Axios is used for asynchronous API calls, and Chart.js 
        powers the interactive data visualizations on the Summary and Reports pages. Accessibility is enhanced by 
        following ADA/WCAG principles, ensuring a user-friendly experience.
      </p>
      <div className="card-container">
        <div className="card">
          <img src={chatgptLogo} alt="ChatGPT" />
          <h2>ChatGPT</h2>
          <p>OpenAI's ChatGPT is a conversational AI tool for natural language generation.</p>
        </div>
        <div className="card">
          <img src={dalleLogo} alt="DALL-E" />
          <h2>DALL-E</h2>
          <p>DALL-E is an AI system that can create realistic images from textual descriptions.</p>
        </div>
        <div className="card">
          <img src={midjourneyLogo} alt="MidJourney" />
          <h2>MidJourney</h2>
          <p>MidJourney is an independent research lab focused on AI-powered image creation.</p>
        </div>
        <div className="card">
          <img src={runwayLogo} alt="Runway ML" />
          <h2>Runway ML</h2>
          <p>Runway ML is a platform for AI-powered creative projects, including video editing and art creation.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
