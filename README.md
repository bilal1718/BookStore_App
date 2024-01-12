# MERN Stack Bookstore Project

This is a simple MERN (MongoDB, Express.js, React.js, Node.js) stack bookstore project where users can add, view, update, and delete books. The project also includes a search functionality.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Clone the Repository](#clone-the-repository)
- [Setting Up the Backend](#setting-up-the-backend)
- [Setting Up the Frontend](#setting-up-the-frontend)
- [Running the Application](#running-the-application- [Usage](#usage)

## Prerequisites
Make sure you have the following software installed on your machine:

- Node.js and npm: [Node.js Official Website](https://nodejs.org/)
- MongoDB: [MongoDB Official Website](https://www.mongodb.com/)

## Clone the Repository
Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/bilal1718/BookStore_App.git
```
## Setting Up the Backend
```bash
cd BookStore_App/backend





```
```bash
npm install
```
Create a .env file in the backend directory and add the following variables:

```bash
PORT=5000
MONGODB_URI=mongodb+srv://admin:OybCL4f5bRrsNy45@cluster0.osyjcj6.mongodb.net/Book-Store?retryWrites=true&w=majority

```
Run the backend server:
```bash
npm start


```
The backend server will start running on http://localhost:5000.

## Setting Up the Frontend


Navigate to the frontend directory:
```bash

cd BookStore_App/Frontend
```
```bash
npm install
```
```bash
npm run dev
```
## Usage











Open your web browser and go to http://localhost:3000 to access the bookstore application.
Use the provided form to add new books with details such as book name, author, description, and price.
View, update, and delete existing books.
Utilize the search functionality to find specific books.
