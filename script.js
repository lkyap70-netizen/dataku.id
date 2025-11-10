document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const files = document.getElementById('fileInput').files;
    const fileList = document.getElementById('files');
    
    for (let file of files) {
        // Simpan di localStorage (demo; ganti dengan server untuk produksi)
        const reader = new FileReader();
        reader.onload = function(event) {
            localStorage.setItem(file.name, event.target.result);
            const li = document.createElement('li');
            li.textContent = file.name;
            fileList.appendChild(li);
        };
        reader.readAsDataURL(file);
    }
    alert('File berhasil diunggah (disimpan di browser lokal).');
});

// Muat file yang ada saat halaman dimuat
window.onload = function() {
    const fileList = document.getElementById('files');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const li = document.createElement('li');
        li.textContent = key;
        fileList.appendChild(li);
    }
};