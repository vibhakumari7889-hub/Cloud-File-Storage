const {
    S3Client,
    PutObjectCommand,
    ListObjectsV2Command,
    DeleteObjectCommand,
    GetObjectCommand
} = require("@aws-sdk/client-s3");

const s3 = new S3Client({
    region: process.env.AWS_REGION
});

async function uploadFile(file) {
    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype
    });

    return await s3.send(command);
}

async function listFiles() {
    const command = new ListObjectsV2Command({
        Bucket: process.env.S3_BUCKET_NAME
    });

    return await s3.send(command);
}

async function deleteFile(fileName) {
    const command = new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName
    });

    return await s3.send(command);
}

// Download file from S3
async function downloadFile(fileName) {
    const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName
    });

    return await s3.send(command);
}

module.exports = {
    uploadFile,
    listFiles,
    deleteFile,
    downloadFile
};