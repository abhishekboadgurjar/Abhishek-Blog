

# Abhishek Blog

Welcome to **Abhishek Blog** – a full-stack MERN (MongoDB, Express, React, Node.js) application where an admin can post blogs, and users can like and comment on each blog post. This project is designed to create a seamless and interactive blogging experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Admin Panel**: Allows the admin to create, edit, and delete blog posts.
- **User Interactions**:
  - **Likes**: Users can like blog posts to show appreciation.
  - **Comments**: Users can leave comments on each blog post to share their thoughts.
- **Authentication**:
  - Sign up and log in for users.
  - Password encryption for secure user data management.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **RESTful API**: Well-structured API routes for efficient data handling.

## Technologies Used

- **Frontend**: React, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing
- **Others**: Axios for API calls, Mongoose for MongoDB object modeling

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** (Node Package Manager)
- MongoDB database (either locally installed or using MongoDB Atlas)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/abhishekgurjar-in/abhishek-blog.git
   cd abhishek-blog
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `server` directory and add the following:
     ```plaintext
     MONGODB_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     PORT=5000
     ```

5. Start the application:
   - In the server folder, start the backend server:
     ```bash
     npm start
     ```
   - In the client folder, start the frontend server:
     ```bash
     npm start
     ```

6. Open your browser and visit `http://localhost:3000`.



## Usage

- **Admin Actions**: Log in as an admin to create, edit, or delete blog posts.
- **User Interactions**: Sign up or log in as a user to like or comment on posts.
- **Explore Posts**: Browse through blog posts and engage with the community.


## Author
**Abhishek Gurjar** is a dedicated web developer passionate about creating practical and functional web applications. Check out more of his projects on [GitHub](https://github.com/abhishekgurjar-in).

## Contributing

Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request for any improvements or bug fixes.

