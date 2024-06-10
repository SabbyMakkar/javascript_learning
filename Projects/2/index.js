const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results'); // Get the results div

    if (height === "" || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height: ${height}`;
    } else if (weight === "" || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
