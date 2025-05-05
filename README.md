![Logo](https://res.cloudinary.com/dqhv83qhg/image/upload/v1746463297/Logo-Full-Light_czdzfz.png)

StudyNotion is a comprehensive full-stack learning management system built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides a platform for instructors to create and sell courses while allowing students to purchase and access educational content.


## Features

- **User Authentication** - Secure signup/login with email verification
- **Role-Based Access** - Different interfaces for students and instructors
- **Course Management** - Create, edit, delete, and organize courses into categories
- **Content Delivery** - Video lectures with progress tracking
- **Payment Integration** - Secure transactions via Razorpay
- **User Dashboard** - Track enrolled courses, purchase history, and learning progress
- **Instructor Tools** - Course analytics, student management, and content creation
- **Responsive Design** - Works seamlessly across devices


## Technology Stack

- **Frontend** - React.js, Redux Toolkit, Tailwind CSS
- **Backend** - Node.js, Express.js
- **Database** - MongoDB (with Mongoose)
- **Storage** - Cloudinary (for media files)
- **Authentication** - JWT
- **Payments** - Razorpay
- **Deployment** - Vercel


## Database Model

The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.

![App Screenshot](https://res.cloudinary.com/dqhv83qhg/image/upload/v1746463133/273154818-3e061630-da02-4d36-a3b4-c85c51ea306e_ovolkp.jpg)


## Architecture Diagram

Below is a high-level diagram that illustrates the architecture of the StudyNotion EdTech platform

![App Screenshot](https://res.cloudinary.com/dqhv83qhg/image/upload/v1746465580/architecture_ygocwb.png)


## Installation

- Clone the repository
```bash
  git clone https://github.com/Deepaksingh73229/StudyNotion.git
```

- Navigate to the project directory
```bash
  cd StudyNotion
```

- Install dependencies
```bash
  npm install
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### server .env (Backend)

- **Port No** - `PORT`

- **Fronted API** - `URI`

- **Mongodb** - `MONGODB_URL`

- **Email Credentials** - `MAIL_HOST` `MAIL_USER` `MAIL_PASS`

- **JWT Token** - `JWT_SECRET`

- **Razorpay Credentials** - `RAZORPAY_KEY` `RAZORPAY_SECRET` `CURRENCY` `WEBHOOK_SECRET`

- **Cloudinary** - `CLOUD_NAME` `API_KEY` `API_SECRET` `FOLDER_NAME`

### .env (Fronted)

- **Backend API** - `REACT_APP_BASE_URL`

- **Razorpay Key** - `REACT_APP_RAZORPAY_KEY`



## Run Locally

Start the ***server***

```bash
  cd server
  npm run dev
```

Start the ***src***

```bash
  cd src
  npm start
```

Start ***src*** and ***server*** concurrently

```bash
  cd studynotion
  npm run dev
```


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deepakkumar73229)


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)