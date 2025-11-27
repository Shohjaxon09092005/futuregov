const form = document.getElementById('signupForm');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;


    if (!name || !email || !password) {
        alert('Iltimos barcha maydonlarni toldiring!');
        return;
    }





   


    
});