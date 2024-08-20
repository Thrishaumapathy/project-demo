// Get the modal
var modal = document.getElementById("enquiryModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Show the modal when the page loads
window.onload = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission and redirect
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const studentAge = document.getElementById('studentAge').value;
    const parentsName = document.getElementById('parentsName').value;
    const parentsPhone = document.getElementById('parentsPhone').value;
    const address = document.getElementById('address').value;

    // Save the data to local storage
    localStorage.setItem('studentName', studentName);
    localStorage.setItem('studentAge', studentAge);
    localStorage.setItem('parentsName', parentsName);
    localStorage.setItem('parentsPhone', parentsPhone);
    localStorage.setItem('address', address);

    // Redirect to display.html
    window.location.href = 'display.html';
});
