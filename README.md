# AI Image Generation from Text Descriptions (Word2Canva)

Word2Canva is a web-based application that generates AI-powered images from text descriptions. By leveraging OpenAI's API for text interpretation and image creation, this application provides users with a seamless experience in transforming their ideas into visual content. The application is built using React and Node.js, ensuring a responsive and interactive web experience. Additionally, it integrates the Unsplash API to provide high-quality supplementary images.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- 
## Prerequisites

Before you begin, ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (version 14.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- An Unsplash API key (sign up at [Unsplash](https://unsplash.com/developers))

## Installation

Follow these steps to set up the project on your local machine:
1. **Clone the repository:**
   git clone https://github.com/username/word2canva.git
   cd word2canva

2. **Install server dependencies:** Navigate to the server directory and install the required packages:
   cd server
   npm install

3. **Install client dependencies:** Navigate to the client directory and install the required packages:
   cd ../client
   npm install

4. **Set up environment variables:** Create a .env file in the server directory and add the following variables:
    UNSPLASH_ACCESS_KEY=your_unsplash_access_key
    PORT=8200

##  Usage

1. Running the Development Server

Start the backend server:-
cd backend
node index.js

2. Start the frontend:-

cd ../frontend
npm start

3. Open http://localhost:3000 in your browser to access the application.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, contact:

Your Name: Prerna Gupta

Email: prernag420@gmail.com

GitHub: https://github.com/Prernagupta07/

