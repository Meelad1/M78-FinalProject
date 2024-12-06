5166 Final Project, name: Meelad Doroodchi, ID: 801180378

Overview
This project is a Single Page Application (SPA) built as part of ITCS 5166 to explore innovations in Generative AI. It demonstrates the use of cutting-edge AI tools such as ChatGPT, DALL-E, MidJourney, and Runway ML. The application includes interactive charts showcasing data trends and user engagement and is designed to be fully functional, accessible, and responsive.
Hosted Application: http://104.131.170.203/
Login Credentials:
Username: Meelad
Password: Meelad

Features

Login Page:
Secure login using JWT authentication.
Redirects to the dashboard on successful login.

Dashboard:
Summary of innovations in Generative AI (200 words).
Reference to the source: MIT Technology Review.
Technical aspects of the project (tech stack and infrastructure) explained.

Summary Page:
Dynamic bar chart showing AI adoption in various industries.
Data visualized using Chart.js.
Description of chart content with a source link.

Reports Page:
Dynamic line chart displaying monthly user engagement trends.
Data visualized using Chart.js.
Description of chart content with a source link.

Accessibility:
ADA/WCAG compliance for better user experience.
Clean and responsive UI.
Hosting:

Fully hosted on a single DigitalOcean server using NGINX to serve the frontend and backend.
Tech Stack
Frontend: ReactJS, Axios, Chart.js, CSS
Backend: Node.js, Express.js
Database: MongoDB Atlas
Hosting: NGINX, PM2, DigitalOcean
Authentication: JSON Web Tokens (JWT)


Challenges and Solutions
1. Hosting Frontend and Backend on the Same Server
Challenge: Configuring NGINX to serve both the React frontend and Node.js backend on a single DigitalOcean droplet.
Solution: Updated the NGINX configuration to serve the React build folder on port 80 and proxy backend requests to port 3000.
2. Cross-Origin Resource Sharing (CORS)
Challenge: CORS errors occurred while the frontend attempted to communicate with the backend.
Solution: Added a CORS policy to the backend allowing requests from the frontend's domain.
3. Chart Rendering Issues
Challenge: Charts were not rendering correctly due to mismatched data format and API URLs.
Solution: Debugged and ensured Chart.js was correctly configured, updated API URLs to the hosted backend, and verified data format.
4. MongoDB Database Configuration
Challenge: Connecting the application to MongoDB Atlas and ensuring proper schema and collection setup.
Solution: Verified MongoDB connection string, set up the users collection, and pre-inserted data for login credentials.
5. JWT Authentication
Challenge: Implementing secure authentication while maintaining simplicity for testing.
Solution: Used hardcoded credentials for testing and implemented JWT for session management.
