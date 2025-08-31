# API Tasks

This is a simple Node.js REST API for managing tasks, built with Express and MongoDB (using Mongoose).

## Features

- Create, read, update, and delete tasks
- RESTful endpoints
- MongoDB integration via Mongoose

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd api-tasks
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure MongoDB:**
   By default, the app connects to MongoDB at `mongodb://localhost:27017/tasksdb` using the `.env` file. Make sure MongoDB is running locally, or update the `MONGODB_URI` variable in `.env` as needed.

   Example `.env` file:

   ```env
   MONGODB_URI=mongodb://localhost:27017/tasksdb
   ```

4. **Start the server:**
   ```bash
   node index.js
   ```
   The server will run on [http://localhost:5001](http://localhost:5001).

## Project Structure

- `index.js` - Main entry point, sets up Express and MongoDB connection
- `routes.js` - API route definitions
- `models/Task.js` - Mongoose Task model

## Example API Endpoints

- `GET /tasks` - List all tasks
- `POST /tasks` - Create a new task
- `GET /tasks/:id` - Get a task by id
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Example Requests (using curl)

### Create a Task

```bash
curl -X POST http://localhost:5001/api/tasks \
   -H "Content-Type: application/json" \
   -d '{"name":"Sample Task","description":"Description here","status":false}'
```

### Update a Task

```bash
curl -X PUT http://localhost:5001/api/tasks/<TASK_ID> \
   -H "Content-Type: application/json" \
   -d '{"name":"Updated Task","description":"Updated desc","status":true}'
```

### Delete a Task

```bash
curl -X DELETE http://localhost:5001/api/tasks/<TASK_ID>
```

### Get All Tasks

```bash
curl http://localhost:5001/api/tasks
```

### Get Task by ID

```bash
curl http://localhost:5001/api/tasks/<TASK_ID>
```

## License

MIT
