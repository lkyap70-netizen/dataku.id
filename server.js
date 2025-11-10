const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors()); // Untuk akses cross-origin
const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Tidak ada file diunggah' });
    res.json({ message: 'File berhasil diunggah', name: req.file.originalname });
});

app.get('/files', (req, res) => {
    fs.readdir('uploads/', (err, files) => {
        if (err) return res.status(500).json({ error: 'Gagal memuat file' });
        res.json({ files });
    });
});

app.listen(3000, () => console.log('Server berjalan di ftp://192.168.1.1'));