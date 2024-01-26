# Steps to run the project locally

<br/>

## Serving frontend
### Step 1 
Create a `.env` file in `/frontend` directory.

### Step 2
Open the `.env` file and add the following line in it:<br/><br/>
`REACT_APP_BACKEND_URL = "http://localhost:3001/v1"`

### Step 3
Open a terminal in `/frontend` directory.

### Step 3
Use command `npm install` to install the required node modules.

### Step 4
Use command `npm start` to run the frontend server.

<br/>

## Serving Backend
### Step 1
Create a `.env` file in `/backend/config` directory

### Step 2
Open the `.env` file and add the following line in it:<br/><br/>
`DATABASE_URL = "mongodb+srv://admin:admin123@mindfulgurukul.7mpurdy.mongodb.net/?retryWrites=true&w=majority"`

### Step 3
Open a new terminal in `/backend` directory.

### Step 2
Run `npm install` to install required packages.

### Step 3
Finally, use `npm start` to run the backend server.

Both the frontend and backend servers should start and be available on `http://localhost:3000/` and `http://localhost:3001/` respectively.<br/>
Congratulations! You have successfully served the project on your local machine. 🎉
