function editProfile() {
    const name = prompt("Enter your name:", document.getElementById('name').textContent);
    const age = prompt("Enter your age:", document.getElementById('age').textContent);
    
    if (name) {
        document.getElementById('name').textContent = name;
    }
    
    if (age) {
        document.getElementById('age').textContent = age;
    }
}

function changePicture() {
    const newPic = prompt("Enter the URL of your new profile picture:");
    if (newPic) {
        document.getElementById('profilePic').src = newPic;
    }
}

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const message = document.querySelector('textarea').value;
    if (message) {
        alert("Message sent: " + message); // Replace this with actual sending logic
        document.querySelector('textarea').value = ''; // Clear the textarea
    }
}
