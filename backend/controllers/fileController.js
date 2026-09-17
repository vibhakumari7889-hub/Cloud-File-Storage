const {
    uploadFile,
    listFiles,
    deleteFile,
    downloadFile
} = require("../services/s3Service");

const upload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please select a file to upload."
            });
        }

        await uploadFile(req.file);

        res.status(201).json({
            message: "File uploaded successfully!",
            fileName: req.file.originalname
        });

    } catch (error) {
        console.error("Upload Error:", error);

        res.status(500).json({
            message: "File upload failed."
        });
    }
};

const getFiles = async (req, res) => {
    try {
        const data = await listFiles();

        const files = data.Contents || [];

        res.status(200).json({
            files: files.map(file => ({
                name: file.Key,
                size: file.Size,
                lastModified: file.LastModified
            }))
        });

    } catch (error) {
        console.error("List Files Error:", error);

        res.status(500).json({
            message: "Unable to get files."
        });
    }
};

const removeFile = async (req, res) => {
    try {
        const fileName = req.params.fileName;

        await deleteFile(fileName);

        res.status(200).json({
            message: "File deleted successfully!"
        });

    } catch (error) {
        console.error("Delete Error:", error);

        res.status(500).json({
            message: "File deletion failed."
        });
    }
};

const download = async (req, res) => {
    try {
        const fileName = req.params.fileName;

        const data = await downloadFile(fileName);

        res.setHeader(
            "Content-Type",
            data.ContentType || "application/octet-stream"
        );

        res.setHeader(
            "Content-Disposition",
            `attachment; filename="${fileName}"`
        );

        data.Body.pipe(res);

    } catch (error) {
        console.error("Download Error:", error);

        res.status(500).json({
            message: "File download failed."
        });
    }
};

module.exports = {
    upload,
    getFiles,
    removeFile,
    download
};