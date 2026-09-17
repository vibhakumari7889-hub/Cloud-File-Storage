# Cloud File Storage

A simple and secure cloud-based file storage system built using Node.js, Express.js, JavaScript, and Amazon S3.

## Project Overview

Cloud File Storage is a web-based application that allows users to upload, view, download, and delete files.

The application uses a Node.js and Express.js backend to communicate with a private Amazon S3 bucket for secure cloud-based file storage.

## Features

- Upload files to Amazon S3
- View uploaded files
- Download files
- Delete files
- Refresh file list
- Private S3 bucket
- IAM least-privilege access
- Simple and responsive web interface

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Amazon S3
- AWS IAM
- Git
- GitHub

## Architecture

User → Frontend → Node.js/Express Backend → Amazon S3

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

The application uses Amazon S3 as the cloud storage service.

The S3 bucket is configured with:

- Private bucket access
- Block Public Access enabled
- Bucket owner enforced
- Server-side encryption using SSE-S3
- IAM-based access control

## IAM Security

The application follows the principle of least privilege.

The IAM policy allows only the S3 permissions required by the application:

- s3:ListBucket
- s3:PutObject
- s3:GetObject
- s3:DeleteObject

The application does not use AmazonS3FullAccess.

AWS credentials are stored in environment variables and are excluded from GitHub using .gitignore.

## Local Setup

### 1. Clone the repository

git clone https://github.com/vibhakumari7889-hub/Cloud-File-Storage.git

cd Cloud-File-Storage

### 2. Install backend dependencies

cd backend

npm install

### 3. Configure environment variables

Create a .env file inside the backend folder and add your AWS configuration.

AWS_REGION=ap-south-1
S3_BUCKET_NAME=YOUR_S3_BUCKET_NAME
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
PORT=5000

Never upload the .env file or AWS secret keys to GitHub.

### 4. Start the backend

npm start

The application will run at:

http://localhost:5000

## API Endpoints

POST /api/files/upload
Upload a file to Amazon S3.

GET /api/files
Get the list of uploaded files.

GET /api/files/download/:fileName
Download a file from Amazon S3.

DELETE /api/files/:fileName
Delete a file from Amazon S3.

## Testing

The following features have been successfully tested:

- File Upload
- File Listing
- Refresh
- File Download
- File Delete

## Security

The S3 bucket is private and public access is blocked.

AWS credentials are stored in environment variables and are not committed to GitHub.

IAM permissions are restricted to the S3 operations required by the application.

## Future Improvements

- User authentication
- File size validation
- File type validation
- Unique file naming
- Improved error handling
- Production deployment
- User-specific file storage

## Author

Vibha Kumari

GitHub:
https://github.com/vibhakumari7889-hub