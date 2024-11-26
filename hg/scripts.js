document.getElementById('upload-photo').addEventListener('change', function(event) {
    const photo = document.getElementById('teacher-photo');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        photo.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});