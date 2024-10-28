const apiUrl = 'http://localhost:5000/api'; // Update with your API URL

document.getElementById('registerBtn').addEventListener('click', () => showForm('register'));
document.getElementById('loginBtn').addEventListener('click', () => showForm('login'));
document.getElementById('viewBooksBtn').addEventListener('click', viewBooks);

document.getElementById('userForm').addEventListener('submit', handleUserForm);
document.getElementById('reviewForm').addEventListener('submit', submitReview);

async function showForm(action) {
    document.getElementById('formTitle').innerText = action.charAt(0).toUpperCase() + action.slice(1);
    document.getElementById('email').classList.toggle('hidden', action === 'login');
    document.getElementById('formSection').classList.remove('hidden');
    document.getElementById('booksSection').classList.add('hidden');
    document.getElementById('reviewsSection').classList.add('hidden');
}

async function handleUserForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const action = document.getElementById('formTitle').innerText.toLowerCase();
    const endpoint = action === 'register' ? '/users/register' : '/users/login';
    const userData = action === 'register' ? { username, password, email } : { username, password };

    const response = await fetch(apiUrl + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });

    if (response.ok) {
        alert(action.charAt(0).toUpperCase() + action.slice(1) + ' successful!');
        document.getElementById('userForm').reset();
        document.getElementById('formSection').classList.add('hidden');
    } else {
        alert('Error: ' + (await response.json()).message);
    }
}

async function viewBooks() {
    const response = await fetch(apiUrl + '/books');
    const books = await response.json();
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    books.forEach(book => {
        const li = document.createElement('li');
        li.innerText = `${book.title} by ${book.author} (${book.publishedYear})`;
        booksList.appendChild(li);
    });

    document.getElementById('booksSection').classList.remove('hidden');
    document.getElementById('formSection').classList.add('hidden');
    document.getElementById('reviewsSection').classList.add('hidden');
}

async function submitReview(event) {
    event.preventDefault();

    const bookId = document.getElementById('bookSelect').value;
    const content = document.getElementById('reviewContent').value;
    const rating = document.getElementById('reviewRating').value;

    const response = await fetch(apiUrl + '/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookId, content, rating })
    });

    if (response.ok) {
        alert('Review submitted successfully!');
        document.getElementById('reviewForm').reset();
        document.getElementById('reviewsSection').classList.add('hidden');
    } else {
        alert('Error: ' + (await response.json()).message);
    }
}

// Load books for review submission
async function loadBooksForReview() {
    const response = await fetch(apiUrl + '/books');
    const books = await response.json();
    const bookSelect = document.getElementById('bookSelect');

    books.forEach(book => {
        const option = document.createElement('option');
        option.value = book._id;
        option.textContent = book.title;
        bookSelect.appendChild(option);
    });
}

// Call to load books on page load
window.onload = loadBooksForReview;