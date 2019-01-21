let showSecret = false;

updateSecretParagraph();

// add event listener to the secret button
secretBtn.addEventListener('click', function () {
    showSecret = !showSecret;
    updateSecretBtn();
    updateSecretParagraph();
})

// create a function to hide the secret paragraph
function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}

// create a function to update the button from "Show th secret" to "Hide the secret"
function updateSecretBtn() {
    if (showSecret) {
        secretBtn.innerText = 'Hide the secret';
    } else {
        secretBtn.innerText = 'Show the secret';
    }
}