# Cloud File Storage

A cloud-based file storage web application built using Node.js, Express.js, JavaScript, and Amazon S3.

The application allows users to upload, view, download, and delete files stored in a private Amazon S3 bucket.

## Live Application

http://3.110.45.236

## Project Overview

Cloud File Storage is a web-based application that provides basic cloud file management functionality.

The application uses:

- Node.js and Express.js for the backend
- HTML, CSS, and JavaScript for the frontend
- Amazon S3 for cloud file storage
- AWS IAM for secure access control
- Amazon EC2 for deployment
- Nginx as a reverse proxy

## Features

- Upload files to Amazon S3
- View uploaded files
- Download files
- Delete files
- Refresh file list
- Private S3 bucket
- IAM least-privilege access
- EC2 deployment
- Nginx reverse proxy
- Automatic Node.js service startup using systemd
- Simple and responsive web interface

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Amazon S3
- AWS IAM
- Amazon EC2
- Nginx
- Git
- GitHub

## Architecture

User → Nginx → Node.js/Express Backend → Amazon S3

## Project Structure

Cloud-File-Storage/
│
├── backend/
│   ├── controllers/
│   │   └── fileController.js
│   ├── routes/
│   │   └── fileRoutes.js
│   ├── services/
│   │   └── s3Service.js
│   ├── .env
│   ├── .gitignore
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── screenshots/
│
├── .gitignore
└── README.md

## AWS Configuration

Amazon S3 is used as the cloud storage service.

The S3 bucket is configured with:

- Private bucket access
- Block Public Access enabled
- Bucket owner enforced
- Server-side encryption using SSE-S3
- IAM-based access control

## IAM Security

The application follows the principle of least privilege.

The application requires the following S3 permissions:

- s3:ListBucket
- s3:PutObject
- s3:GetObject
- s3:DeleteObject

For EC2 deployment, an IAM Role is attached to the EC2 instance so that AWS access keys are not stored on the server.

## Local Setup

### 1. Clone the repository

git clone https://github.com/vibhakumari7889-hub/Cloud-File-Storage.git

cd Cloud-File-Storage

### 2. Install backend dependencies

cd backend

npm install

### 3. Configure environment variables

Create a `.env` file inside the backend folder.

Example:

AWS_REGION=ap-south-1
S3_BUCKET_NAME=YOUR_S3_BUCKET_NAME
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
PORT=5000

Never upload the `.env` file or AWS secret keys to GitHub.

### 4. Start the backend

npm start

The application will run at:

http://localhost:5000

## EC2 Deployment

The application is deployed on an Amazon EC2 instance.

Deployment components:

- Amazon EC2 running Amazon Linux 2023
- Node.js backend
- Nginx reverse proxy
- systemd service for Node.js
- IAM Role for AWS S3 access
- Security Group allowing HTTP traffic on port 80

Nginx forwards application requests to the Node.js backend running on port 5000.

Port 5000 is not exposed publicly.

## Systemd Service

The Node.js backend runs as a systemd service:

cloud-file-storage.service

The service is configured to:

- Start automatically when the EC2 instance boots
- Restart automatically if the Node.js process stops
- Run the backend in the background

## API Endpoints

### Upload File

POST /api/files/upload

Uploads a file to Amazon S3.

### List Files

GET /api/files

Returns the list of uploaded files.

### Download File

GET /api/files/download/:fileName

Downloads a file from Amazon S3.

### Delete File

DELETE /api/files/:fileName

Deletes a file from Amazon S3.

## Testing

The following features have been successfully tested on the deployed application:

- File Upload
- File Listing
- Refresh
- File Download
- File Delete
- EC2 deployment
- Nginx reverse proxy
- Node.js automatic startup after EC2 reboot

## Security

- S3 bucket is private.
- S3 Block Public Access is enabled.
- IAM permissions follow the principle of least privilege.
- EC2 uses an IAM Role for S3 access.
- AWS credentials are not committed to GitHub.
- `.env` files are excluded using `.gitignore`.
- Port 5000 is not publicly exposed.

## Future Improvements

- User authentication
- File size validation
- File type validation
- Unique file naming
- Improved error handling
- User-specific file storage
- HTTPS with a custom domain

## Author

Vibha Kumari

GitHub:
https://github.com/vibhakumari7889-hub/Cloud-File-Storage