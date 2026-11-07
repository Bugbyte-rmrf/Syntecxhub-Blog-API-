# Syntecxhub Project 2 – Blog API with Pagination & Filtering

## 1. Project Overview

**Project Name:** Blog API with Pagination & Filtering  
**Organization:** Syntecxhub  
**Project Number:** Project 2  
**Project Type:** Backend Development / RESTful API  
**Technology Stack:** Node.js, Express.js, MongoDB, Mongoose  
**Development Environment:** Linux, Visual Studio Code (VS Code)  
**API Testing Tool:** Postman

### Project Description

This project involves developing a RESTful Blog API that allows users to create, retrieve, update, and delete blog posts.

The API also provides additional functionality for managing and retrieving blog posts efficiently through pagination, filtering, and sorting.

Each blog post contains the following information:

- **Title:** The title of the blog post.
- **Body:** The main content of the blog post.
- **Author:** The name of the person who created the post.
- **Tags:** Categories or keywords associated with the post.
- **Created At:** The date and time the post was created.
- **Updated At:** The date and time the post was last modified.

The main objective is to demonstrate an understanding of backend development, RESTful API architecture, database integration, CRUD operations, query parameters, and API testing.

---

## 2. Project Objectives

The project was developed to meet the following requirements:

1. Build CRUD functionality for blog posts.
2. Create a blog post with a title, body, author, and tags.
3. Retrieve all available blog posts.
4. Retrieve a single blog post using its unique ID.
5. Update an existing blog post.
6. Delete an existing blog post.
7. Implement pagination using `limit` and `skip`.
8. Filter blog posts by tag.
9. Filter blog posts by author.
10. Filter blog posts by date.
11. Implement sorting by newest and oldest.
12. Allow pagination, filtering, and sorting to work together.
13. Integrate the application with MongoDB.
14. Test the API endpoints using Postman.
15. Organize and prepare the entire source code for GitHub submission.

---

## 3. Technologies and Tools Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for backend development |
| Express.js | Backend framework for creating API routes |
| MongoDB | NoSQL database for storing blog posts |
| MongoDB Atlas | Cloud-hosted MongoDB database |
| Mongoose | Object Data Modeling (ODM) library for MongoDB |
| dotenv | Loads environment variables from the `.env` file |
| Nodemon | Automatically restarts the server during development |
| Postman | Testing API endpoints and HTTP requests |
| Visual Studio Code | Code editor and development environment |
| Linux | Operating system used during development |
| Git | Version control and source code management |
| GitHub | Remote repository for hosting the project |

---

## 4. Project Folder Structure

The project follows a simple and organized backend architecture.

```text
Syntecxhub_Project_Name.Project-2-Blog-API/
│
├── models/
│   └── Post.js
│
├── routes/
│   └── postRoutes.js
│
├── node_modules/
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### Explanation of Files and Directories

**models/**

Contains the database models.

- `Post.js`: Defines the structure of blog posts, including title, body, author, tags, and automatic timestamps.

**routes/**

Contains the API endpoint definitions.

- `postRoutes.js`: Implements all blog post routes, including CRUD operations, pagination, filtering, and sorting.

**node_modules/**

Contains the installed Node.js dependencies. This directory is generated automatically when dependencies are installed using npm.

It is excluded from GitHub through `.gitignore`.

**.env**

Stores environment variables, including the application port and MongoDB connection string.

This file contains private configuration information and must not be uploaded to GitHub.

**.env.example**

Provides an example of the required environment variables without exposing actual credentials.

**.gitignore**

Specifies files and directories that Git should exclude from version control.

**package.json**

Contains project metadata, dependencies, and application scripts.

**package-lock.json**

Records the exact dependency versions installed for the project.

**server.js**

The main entry point of the application. It loads environment variables, configures Express middleware, connects to MongoDB, registers routes, and starts the server.

**README.md**

Contains the project documentation, setup instructions, API endpoint descriptions, and testing examples.

---

## 5. System Requirements

Before installing and running the project, ensure the following tools are available:

- Linux operating system.
- Visual Studio Code.
- Node.js (LTS version recommended).
- npm (Node Package Manager).
- Git.
- MongoDB Atlas account.
- Postman.

### Verify Node.js and npm

Open the integrated terminal in VS Code.

Run:

```bash
node -v
```

Then:

```bash
npm -v
```

To verify Git:

```bash
git --version
```

These commands should display the installed versions.

---

## 6. Project Installation and Setup

### Step 1: Create the project directory

Create a project folder and open it in VS Code.

```bash
mkdir Syntecxhub_Project_Name.Project-2-Blog-API
```

Navigate into the directory:

```bash
cd Syntecxhub_Project_Name.Project-2-Blog-API
```

Open the directory in VS Code:

```bash
code .
```

### Step 2: Initialize the Node.js project

Run:

```bash
npm init -y
```

This generates the `package.json` file, which stores project information and dependency details.

### Step 3: Install dependencies

Install the main packages:

```bash
npm install express mongoose dotenv
```

Install Nodemon as a development dependency:

```bash
npm install --save-dev nodemon
```

### Step 4: Configure package scripts

Update the scripts section in `package.json`:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

The commands have the following purposes:

- `npm start`: Starts the application normally.
- `npm run dev`: Starts the application using Nodemon for automatic restarting during development.

### Step 5: Create the project files

Create the following folders:

```text
models
routes
```

Create the following files in the root directory:

```text
server.js
.env
.env.example
.gitignore
README.md
```

Create:

```text
models/Post.js
routes/postRoutes.js
```

---

## 7. MongoDB Database Configuration

MongoDB Atlas is used to provide cloud database storage for the blog posts.

### Database setup

1. Create an account on MongoDB Atlas.
2. Create a new project.
3. Create a database deployment.
4. Create a database user with a username and password.
5. Configure Network Access to allow your development machine to connect.
6. Obtain the MongoDB connection string from the Connect section.
7. Add the connection string to the application's environment variables.

### Environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your actual MongoDB Atlas connection string.

Example format:

```text
mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/blog_database
```

**Security note:** Never upload the real `.env` file or expose your database credentials publicly.

### Example environment configuration

Create `.env.example`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

This example file can safely be committed to GitHub because it does not contain actual credentials.

---

## 8. Database Model

The application uses a Mongoose schema to define the structure of blog posts.

**File:** `models/Post.js`

The model contains:

| Field | Data Type | Required | Description |
|---|---|---|---|
| title | String | Yes | Blog post title |
| body | String | Yes | Blog post content |
| author | String | Yes | Author's name |
| tags | Array of Strings | No | Categories associated with the post |
| createdAt | Date | Automatic | Creation timestamp |
| updatedAt | Date | Automatic | Last modification timestamp |

The schema uses Mongoose's `timestamps` option to automatically maintain creation and modification dates.

---

## 9. API Architecture and Routes

All blog post endpoints are registered under the following base URL:

```text
http://localhost:5000/api/posts
```

The application uses standard HTTP methods to perform CRUD operations.

### API Endpoint Summary

| HTTP Method | Endpoint | Function |
|---|---|---|
| POST | `/api/posts` | Create a blog post |
| GET | `/api/posts` | Retrieve all blog posts |
| GET | `/api/posts/:id` | Retrieve one post by ID |
| PUT | `/api/posts/:id` | Update an existing post |
| DELETE | `/api/posts/:id` | Delete a blog post |

---

## 10. Detailed API Requests and Testing

The following requests can be tested using Postman.

### A. Create a Blog Post

**Method:** POST

**Endpoint:**

```text
http://localhost:5000/api/posts
```

**Headers:**

```text
Content-Type: application/json
```

**Request Body:**

```json
{
  "title": "Introduction to Backend Development",
  "body": "Backend development involves building the server-side logic of applications.",
  "author": "John",
  "tags": [
    "Technology",
    "Programming"
  ]
}
```

**Expected Result:**

HTTP Status: `201 Created`

The API returns a success message and the newly created blog post, including its generated ID and timestamps.

### B. Retrieve All Blog Posts

**Method:** GET

**Endpoint:**

```text
http://localhost:5000/api/posts
```

**Expected Result:**

HTTP Status: `200 OK`

Returns the available blog posts, together with pagination metadata.

By default, the API returns a maximum of 10 posts, starting from the first available result.

### C. Retrieve a Single Blog Post by ID

**Method:** GET

**Endpoint:**

```text
http://localhost:5000/api/posts/POST_ID
```

Replace `POST_ID` with the actual MongoDB ID.

**Expected Result:**

HTTP Status: `200 OK`

Returns the requested blog post.

If the ID is invalid, the API returns `400 Bad Request`.

If the post does not exist, the API returns `404 Not Found`.

### D. Update a Blog Post

**Method:** PUT

**Endpoint:**

```text
http://localhost:5000/api/posts/POST_ID
```

**Request Body:**

```json
{
  "title": "Updated Backend Development Guide",
  "body": "This article contains updated information about backend development.",
  "author": "John",
  "tags": [
    "Technology",
    "Backend"
  ]
}
```

**Expected Result:**

HTTP Status: `200 OK`

Returns the updated blog post.

The API uses Mongoose's `runValidators` option to validate updated fields against the schema.

### E. Delete a Blog Post

**Method:** DELETE

**Endpoint:**

```text
http://localhost:5000/api/posts/POST_ID
```

**Expected Result:**

HTTP Status: `200 OK`

```json
{
  "message": "Blog post deleted successfully"
}
```

---

## 11. Pagination Implementation

Pagination allows the API to return a limited number of blog posts instead of retrieving every post in one request.

Two query parameters are used:

- `limit`: Specifies the maximum number of posts to return.
- `skip`: Specifies the number of posts to skip.

### Example 1: First page

```text
GET /api/posts?limit=10&skip=0
```

Returns the first 10 posts.

### Example 2: Second page

```text
GET /api/posts?limit=10&skip=10
```

Skips the first 10 posts and returns the next 10.

### Example 3: Third page

```text
GET /api/posts?limit=10&skip=20
```

Skips the first 20 posts and returns the next 10.

### Pagination Response

The API returns pagination metadata:

```json
{
  "totalPosts": 50,
  "limit": 10,
  "skip": 0,
  "currentPage": 1,
  "totalPages": 5,
  "posts": []
}
```

The `posts` array contains the actual matching blog posts.

Pagination helps improve efficiency and makes it easier for applications to display large collections of blog posts.

---

## 12. Filtering Implementation

The API supports filtering blog posts using the following query parameters:

### A. Filter by Author

**Request:**

```text
GET /api/posts?author=John
```

Retrieves posts written by authors whose names match the supplied search term.

The implementation uses MongoDB's regular-expression matching with case-insensitive search.

### B. Filter by Tag

**Request:**

```text
GET /api/posts?tag=Technology
```

Retrieves blog posts containing the specified tag.

The tag search is case-insensitive.

### C. Filter by Date

The API supports filtering by a starting date, ending date, or both.

**Request:**

```text
GET /api/posts?startDate=2026-11-01&endDate=2026-11-06
```

This retrieves blog posts created between November 1 and November 6, 2026, inclusive.

Supported parameters:

- `startDate`: Specifies the earliest creation date.
- `endDate`: Specifies the latest creation date.

The date filters use MongoDB's `$gte` and `$lte` comparison operators.

Dates should be supplied using the `YYYY-MM-DD` format.

---

## 13. Sorting Implementation

The API supports two sorting options.

### A. Newest First

**Request:**

```text
GET /api/posts?sort=newest
```

Displays the most recently created posts first.

### B. Oldest First

**Request:**

```text
GET /api/posts?sort=oldest
```

Displays the earliest created posts first.

Sorting is performed using the `createdAt` field.

If no sorting option is specified, the API defaults to newest first.

---

## 14. Combining Pagination, Filtering and Sorting

One of the important requirements of this project is the ability to combine query parameters in a single request.

For example:

```text
GET /api/posts?author=John&tag=Technology&sort=newest&limit=5&skip=0
```

This request performs the following operations:

1. Filters posts by author.
2. Filters posts by tag.
3. Sorts the matching posts from newest to oldest.
4. Limits the results to five posts.
5. Skips zero posts.

Another example:

```text
GET /api/posts?author=Mary&tag=Education&startDate=2026-11-01&endDate=2026-11-06&sort=oldest&limit=5&skip=5
```

This combines author filtering, tag filtering, date filtering, sorting, and pagination.

All applicable filters are combined in the database query before pagination is applied.

This ensures that the API returns the correct subset of matching blog posts.

---

## 15. Error Handling

The application includes basic error handling to manage common API errors.

| HTTP Status | Meaning | Example |
|---|---|---|
| 200 | OK | Successful retrieval, update or deletion |
| 201 | Created | Blog post successfully created |
| 400 | Bad Request | Invalid ID or invalid input |
| 404 | Not Found | Requested blog post does not exist |
| 500 | Internal Server Error | Unexpected server-side error |

The API also checks whether a supplied MongoDB ObjectId is valid before attempting to retrieve, update, or delete a post.

---

## 16. Running the Application

Ensure that your `.env` file contains a valid MongoDB connection string.

### Start in development mode

```bash
npm run dev
```

Nodemon automatically restarts the server whenever changes are made to the source code.

### Start in normal mode

```bash
npm start
```

### Expected terminal output

```text
Connected to MongoDB successfully!
Server running on port 5000
```

### Test the home route

Open a browser and visit:

```text
http://localhost:5000/
```

Expected response:

```text
Welcome to the Blog API!
```

The main API base URL is:

```text
http://localhost:5000/api/posts
```

---

## 17. Postman Testing Procedure

Postman is used to verify that the API endpoints work correctly.

The following tests should be performed:

| Test | Request | Expected Result |
|---|---|---|
| Create post | POST `/api/posts` | 201 Created |
| Retrieve all posts | GET `/api/posts` | 200 OK |
| Retrieve one post | GET `/api/posts/:id` | 200 OK |
| Update post | PUT `/api/posts/:id` | 200 OK |
| Delete post | DELETE `/api/posts/:id` | 200 OK |
| Pagination | GET `/api/posts?limit=5&skip=0` | Limited results |
| Filter by author | GET `/api/posts?author=John` | Matching posts |
| Filter by tag | GET `/api/posts?tag=Technology` | Matching posts |
| Filter by date | GET `/api/posts?startDate=2026-11-01&endDate=2026-11-06` | Matching posts |
| Sort newest | GET `/api/posts?sort=newest` | Newest first |
| Sort oldest | GET `/api/posts?sort=oldest` | Oldest first |
| Combined query | GET `/api/posts?author=John&tag=Technology&sort=newest&limit=5&skip=0` | Correct combined results |

For reliable pagination and sorting tests, create multiple blog posts with different authors, tags, and creation dates.

---

## 18. Troubleshooting

### MongoDB URI is undefined

If the terminal displays:

```text
MongoDB connection failed:
The `uri` parameter to `openUri()` must be a string,
got "undefined".
```

Check the following:

1. Ensure the `.env` file exists in the project root.
2. Confirm that the variable is named `MONGO_URI`.
3. Ensure that the MongoDB connection string is correctly entered.
4. Check that `require("dotenv").config()` appears before accessing environment variables.
5. Ensure that the application is started from the correct project directory.

Correct environment configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### MongoDB authentication failed

Check:

- Database username.
- Database password.
- Connection string.
- Whether special characters in the password have been URL-encoded.

### MongoDB network connection failed

Check that your current IP address is allowed in MongoDB Atlas Network Access.

### Port already in use

If port 5000 is occupied, change the `PORT` value in `.env` to another available port.

### Nodemon application crashes

Check the terminal for the exact error message.

Common causes include missing dependencies, incorrect file paths, syntax errors, and invalid environment variables.

---

## 19. Git and GitHub Version Control

Git is used to track changes to the project, while GitHub hosts the remote repository.

### Initialize Git

From the root project directory:

```bash
git init
```

### Stage project files

```bash
git add .
```

### Create the first commit

```bash
git commit -m "Initial commit - Blog API Project 2"
```

### Set the main branch

```bash
git branch -M main
```

### Connect the GitHub repository

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
```

### Push the source code

```bash
git push -u origin main
```

### Upload future changes

```bash
git add .
git commit -m "Update Blog API"
git push
```

### GitHub Repository Name

The intended repository name is:

```text
Syntecxhub_Project_Name.Project-2-Blog-API-with-Pagination-and-Filtering
```

The repository should contain the complete source code, configuration examples, and documentation.

The following items should not be uploaded:

- `.env`
- `node_modules/`

These are excluded through `.gitignore`.

---

## 20. Project Security Considerations

The project follows basic security practices:

- Database credentials are stored in environment variables.
- The `.env` file is excluded from Git version control.
- `.env.example` provides a safe configuration template.
- Mongoose schema validation is enabled for updates.
- Invalid MongoDB ObjectIds are checked before database operations.
- Pagination limits are capped at 100 posts per request.

For production use, additional improvements would include authentication, authorization, request validation, rate limiting, more comprehensive error handling, and stricter query sanitization.

---

## 21. Project Completion Checklist

The following checklist summarizes the requirements of the Syntecxhub Project 2 assignment.

### Backend Development

- [ ] Node.js environment configured.
- [ ] Express.js application created.
- [ ] MongoDB Atlas database connected.
- [ ] Mongoose model implemented.
- [ ] Blog post creation implemented.
- [ ] Blog post retrieval implemented.
- [ ] Blog post updating implemented.
- [ ] Blog post deletion implemented.

### Pagination and Filtering

- [ ] Pagination using `limit` implemented.
- [ ] Pagination using `skip` implemented.
- [ ] Author filtering implemented.
- [ ] Tag filtering implemented.
- [ ] Date filtering implemented.
- [ ] Newest-first sorting implemented.
- [ ] Oldest-first sorting implemented.
- [ ] Combined filtering, pagination, and sorting implemented.
- [ ] Single-post retrieval by ID implemented.

### Testing and Documentation

- [ ] Server starts successfully.
- [ ] MongoDB connection verified.
- [ ] CRUD operations tested in Postman.
- [ ] Pagination tested.
- [ ] All filtering options tested.
- [ ] Sorting tested.
- [ ] Combined queries tested.
- [ ] README documentation completed.
- [ ] `.env.example` created.
- [ ] `.gitignore` configured.

### GitHub Submission

- [ ] Git repository initialized.
- [ ] GitHub repository created.
- [ ] Source code staged and committed.
- [ ] Repository connected to GitHub.
- [ ] Entire source code pushed.
- [ ] Repository visibility checked.
- [ ] GitHub repository URL verified.

---

## 22. Conclusion

The Syntecxhub Project 2 – Blog API with Pagination & Filtering demonstrates the development of a backend RESTful API using Node.js, Express.js, MongoDB, and Mongoose.

The application provides complete basic CRUD functionality and supports pagination, filtering by author, tag and date, and sorting by creation date.

It also demonstrates how multiple query parameters can be combined to retrieve specific sets of data efficiently.

The project was developed using Visual Studio Code on Linux, with Postman used for API testing and Git/GitHub for version control and source code hosting.

**Final Submission Repository:** To be added after the project has been fully tested and pushed to GitHub.

**Project Status:** Development and verification in progress.

---

**Developed as part of the Syntecxhub Project 2 assignment.**

