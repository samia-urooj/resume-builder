var _a;
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var educationInput = document.getElementById('education');
var degreeInput = document.getElementById('degree');
var photoInput = document.getElementById('photo');
var workInput = document.getElementById('work');
var skillsInput = document.getElementById('skills');
var finalName = document.getElementById('finalName');
var finalEmail = document.getElementById('finalEmail');
var finalEducation = document.getElementById('finalEducation');
var finalDegree = document.getElementById('finalDegree');
var finalWork = document.getElementById('finalWork');
var finalSkills = document.getElementById('finalSkills');
var finalPhoto = document.getElementById('finalPhoto');
var formContainer = document.getElementById('formContainer');
var generatedResume = document.getElementById('generatedResume');
var generateButton = document.getElementById('generateButton');
var editButton = document.getElementById('editButton');
var photoDataUrl;
photoInput.addEventListener('change', function () {
    var _a;
    var file = (_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            photoDataUrl = reader_1.result;
        };
        reader_1.readAsDataURL(file);
    }
});
// Event listener for Generate Resume button
generateButton.addEventListener('click', function () {
    // Set final resume values
    finalName.textContent = nameInput.value;
    finalEmail.textContent = emailInput.value;
    finalEducation.textContent = educationInput.value;
    finalDegree.textContent = degreeInput.value;
    finalWork.textContent = workInput.value;
    finalSkills.textContent = skillsInput.value;
    // Display the uploaded photo in the final resume if available
    if (photoDataUrl) {
        finalPhoto.src = photoDataUrl;
        finalPhoto.style.display = 'block';
    }
    formContainer.style.display = 'none';
    generatedResume.style.display = 'block';
});
// Event listener for Edit Info button
editButton.addEventListener('click', function () {
    formContainer.style.display = "block";
    generatedResume.style.display = 'none';
});
(_a = document.getElementById("pdfButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var resumeElement = document.getElementById("generatedResume");
    if (resumeElement) {
        html2pdf()
            .set({
            margin: 0.5,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        })
            .from(resumeElement)
            .save();
    }
    else {
        alert("Oops! No resume content found!");
    }
});
