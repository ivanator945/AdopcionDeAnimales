// Para validar el formulario
const form = document.getElementById('surveyForm');
const submitButton = document.getElementById('submitButton');
const radios = form.querySelectorAll('input[type="radio"]');

// Recargar la página al enviar el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    alert('¡Gracias por votar!'); 
    location.reload(); 
});
