
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const photoInput = document.getElementById('photo') as HTMLInputElement;
const workInput = document.getElementById('work') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

const finalName = document.getElementById('finalName') as HTMLSpanElement;
const finalEmail = document.getElementById('finalEmail') as HTMLSpanElement;
const finalEducation = document.getElementById('finalEducation') as HTMLSpanElement;
const finalDegree = document.getElementById('finalDegree') as HTMLSpanElement;
const finalWork = document.getElementById('finalWork') as HTMLSpanElement;
const finalSkills = document.getElementById('finalSkills') as HTMLSpanElement;
const finalPhoto = document.getElementById('finalPhoto') as HTMLImageElement;

const formContainer = document.getElementById('formContainer') as HTMLDivElement;
const generatedResume = document.getElementById('generatedResume') as HTMLDivElement;

const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
const editButton = document.getElementById('editButton') as HTMLButtonElement;


let photoDataUrl: string | undefined;


photoInput.addEventListener('change', () => {
  const file =photoInput.files?.[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = () => {
      photoDataUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
);

// Event listener for Generate Resume button
generateButton.addEventListener('click', () => {
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
editButton.addEventListener('click', () => {
  formContainer.style.display = "block";
  generatedResume.style.display = 'none';

});


document.getElementById("pdfButton")?.addEventListener("click", ()=> {
  const resumeElement = document.getElementById("generatedResume");

  if(resumeElement){
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
  else{
    alert("Oops! No resume content found!");
  }
})