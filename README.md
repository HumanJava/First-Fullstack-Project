# Product Management App

A full-stack web application for managing products, built with React, Node.js, Express, and MongoDB.

## About The Project

This project is a simple product management application that allows users to create, read, update, and delete products. The frontend is built with React and styled with Chakra UI and Bootstrap, and the backend is a Node.js/Express REST API with a MongoDB database.

## Built With

*   [React](https://reactjs.org/)
*   [Node.js](https://nodejs.org/)
*   [Express](https://expressjs.com/)
*   [MongoDB](https://www.mongodb.com/)
*   [Vite](https://vitejs.dev/)
*   [Chakra UI](https://chakra-ui.com/)
*   [Bootstrap](https://getbootstrap.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```
*   MongoDB - Make sure you have a MongoDB server running and have the connection string.

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your_username/your_project_name.git
    ```
2.  **Install backend dependencies**
    ```sh
    cd backend
    npm install
    ```
3.  **Install frontend dependencies**
    ```sh
    cd ../frontend
    npm install
    ```
4.  **Create a `.env` file in the `backend` directory and add your MongoDB connection string:**
    ```
    MONGO_URI=your_mongodb_connection_string
    ```

### Running the Application

1.  **Start the backend server**
    ```sh
    cd backend
    npm start
    ```
2.  **Start the frontend development server**
    ```sh
    cd ../frontend
    npm run dev
    ```

## API Endpoints

The following API endpoints are available:

*   `GET /api/products`: Get all products.
*   `POST /api/products`: Create a new product.
*   `PUT /api/products/:id`: Update a product.
*   `DELETE /api/products/:id`: Delete a product.