const API_URL = "http://localhost:5000/api/files";

const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const refreshBtn = document.getElementById("refreshBtn");
const fileList = document.getElementById("fileList");
const message = document.getElementById("message");

// Upload file
uploadBtn.addEventListener("click", async () => {
    const file = fileInput.files[0];

    if (!file) {
        message.textContent = "Please select a file first.";
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        message.textContent = "Uploading...";

        const response = await fetch(`${API_URL}/upload`, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Upload failed");
        }

        message.textContent = "File uploaded successfully!";
        fileInput.value = "";

        loadFiles();

    } catch (error) {
        console.error(error);
        message.textContent = "File upload failed.";
    }
});

// Load files
async function loadFiles() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        fileList.innerHTML = "";

        if (!data.files || data.files.length === 0) {
            fileList.innerHTML = "<p>No files uploaded yet.</p>";
            return;
        }

        data.files.forEach(file => {
            const fileItem = document.createElement("div");
            fileItem.className = "file-item";

            fileItem.innerHTML = `
                <span class="file-name">${file.name}</span>

                <div class="file-actions">
                    <button class="download-btn" onclick="downloadFile('${file.name}')">
                        Download
                    </button>

                    <button class="delete-btn" onclick="deleteFile('${file.name}')">
                        Delete
                    </button>
                </div>
            `;

            fileList.appendChild(fileItem);
        });

    } catch (error) {
        console.error(error);
        fileList.innerHTML = "<p>Unable to load files.</p>";
    }
}

// Refresh files
refreshBtn.addEventListener("click", loadFiles);

// Delete file
async function deleteFile(fileName) {
    try {
        const response = await fetch(
            `${API_URL}/${encodeURIComponent(fileName)}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Delete failed");
        }

        message.textContent = "File deleted successfully!";

        loadFiles();

    } catch (error) {
        console.error(error);
        message.textContent = "File deletion failed.";
    }
}

// Download file
function downloadFile(fileName) {
    window.location.href =
        `${API_URL}/download/${encodeURIComponent(fileName)}`;
}

// Load files when page opens
loadFiles();