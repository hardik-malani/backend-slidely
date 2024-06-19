# Submission Backend

This repository contains a simple backend for managing submissions. The backend is built using Node.js and Express, Typescript, and it uses a JSON file as a database.

## Getting Started

Follow these instructions to set up and run the backend on your local machine.

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hardik-malani/backend-slidely.git
   cd backend-slidely

2. Install the dependencies:
   ```bash
   npm install

3. Compile TypeScript code
   ```bash
   tsc

4. Run the server
   ```bash
   npm run start


## API Endpoints

1. Ping the server
   `GET /ping`
   ```bash
   curl -X GET http://localhost:3000/ping


2. Submit a new submission
   `POST /submit`
   ```bash
   npm install

3. Read a submission by index
   `GET /read?index={index}`
   ```bash
   curl -X GET "http://localhost:3000/read?index=0"

4. Delete a submission by index
   `DELETE /delete?index={index}`
   ```bash
   curl -X DELETE "http://localhost:3000/delete?index=0"

5. Edit a submission by index
   `PUT /edit`
   ```bash
   curl -X PUT http://localhost:3000/edit -H "Content-Type: application/json" -d "{\"index\":0, \"name\":\"Jane          Doe\",\"email\":\"janedoe@gmail.com\",\"phone\":\"1234567890\",\"github_link\":\"https://github.com/jane_doe/my_slidely_task/\",\"stopwatch_time\":\"00:02:30\"}"
"


## File Structure

```plaintext
submission-backend/
├── src/
│   ├── controllers/
│   │   └── submissionController.ts
│   ├── models/
│   │   └── submission.ts
│   ├── services/
│   │   └── submissionService.ts
│   ├── db.json
│   └── index.ts
├── .gitignore
├── package.json
└── README.md


# Contributors

* Hardik Malani
