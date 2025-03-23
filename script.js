// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const backgroundOverlay = document.querySelector('.background-overlay'); 
    
    sidebar.classList.toggle('active'); 
    backgroundOverlay.classList.toggle('active'); 
}

// Function to close the sidebar if clicked outside
function closeSidebar(e) {
    const sidebar = document.querySelector('.sidebar');
    const backgroundOverlay = document.querySelector('.background-overlay'); 
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    // Check if the click target is outside the sidebar and hamburger menu
    if (!sidebar.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        sidebar.classList.remove('active'); 
        backgroundOverlay.classList.remove('active'); 
    }
}

document.addEventListener('click', closeSidebar);


// Seach Bar
// Function to handle search on "Enter" key press
function handleSearch(event) {
    const searchQuery = document.getElementById('search-input').value.trim();
    
    // Check if Enter key is pressed and search query is not empty
    if (event.key === "Enter" && searchQuery !== "") {
        // Redirect to the search results page with the search query
        window.location.href = `/search-results.html?query=${encodeURIComponent(searchQuery)}`;
    } else if (event.key === "Enter" && searchQuery === "") {
        alert("Please enter a search term.");
    }
}

// Function to handle mobile search on "Enter" key press
function handleMobileSearch(event) {
    const searchQuery = document.getElementById('mobile-search-input').value.trim();

    // Check if Enter key is pressed and search query is not empty
    if (event.key === "Enter" && searchQuery !== "") {
        // Redirect to the search results page with the search query
        window.location.href = `/search-results.html?query=${encodeURIComponent(searchQuery)}`;
    } else if (event.key === "Enter" && searchQuery === "") {
        alert("Please enter a search term.");
    }
}

// Add event listeners for search inputs
document.getElementById('search-input')?.addEventListener('keydown', handleSearch);
document.getElementById('mobile-search-input')?.addEventListener('keydown', handleMobileSearch);

// Function to retrieve query string from URL
function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const books = [
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        image: 'book-covers/atomic-habits-tiny-changes-remarkable-results.jpg',
        url: 'books-html/atomic-habits.html'
    },
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        image: 'book-covers/the power of habit.png',
        url: 'books-html/power-habit.html'
    },
    {
        title: 'Ego Is the Enemy',
        author: 'Ryan Holiday',
        image: 'book-covers/ego-is-the-enemy.jpg',
        url: 'books-html/ego-is-the-enemy.html'
    },
    {
        title: 'The 48 Laws of Power',
        author: 'Robert Greene',
        image: 'book-covers/48-laws.png',
        url: 'books-html/48-laws.html'
    },
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        image: 'book-covers/think-and-grow-rich-65.jpg',
        url: 'books-html/think-and-grow-rich.html'
    },
    {
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        image: 'book-covers/rich-dad-poor-dad-9.jpg',
        url: 'books-html/rich-dad-poor-dad.html'
    },
    {
        title: 'It Ends With Us',
        author: 'Colleen Hoover',
        image: 'book-covers/it ends with us.jpg',
        url: 'books-html/it-ends-with-us.html'
    },
    {
        title: 'Love Theoretically',
        author: 'Ali Hazelwood',
        image: 'book-covers/love theoretically.jpg',
        url: 'books-html/love-theoretically.html'
    },
    {
        title: 'Happy Place',
        author: 'Emily Henry',
        image: 'book-covers/happy place.jpg',
        url: 'books-html/happy-place.html'
    },
    {
        title: 'Beach Read',
        author: 'Emily Henry',
        image: 'book-covers/beach read.jpg',
        url: 'books-html/beach-read.html'
    },
    {
        title: 'Red, White & Royal Blue',
        author: 'Casey McQuiston',
        image: 'book-covers/red-white-royal-blue.jpg',
        url: 'books-html/red-white-royal-blue.html'
    },
    {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        image: 'book-covers/sapiens.jpg',
        url: 'books-html/sapiens.html'
    },
    {
        title: 'Outliers',
        author: 'Malcolm Gladwell',
        image: 'book-covers/outliers.jpg',
        url: 'books-html/outliers.html'
    },
    {
        title: 'Becoming',
        author: 'Michelle Obama',
        image: 'book-covers/becoming.jpg',
        url: 'books-html/becoming.html'
    },
    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        image: 'book-covers/the-art-of-war-74.jpg',
        url: 'books-html/the-art-of-war.html'
    },
    {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        image: 'book-covers/thinking-fast-and-slow.jpg',
        url: 'books-html/thinking-fast.html'
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        image: 'book-covers/alchemist.jpg',
        url: 'books-html/alchemist.html'
    },
    {
        title: 'The Last Olympian',
        author: 'Rick Riordan',
        image: 'book-covers/the last olympian.jpg',
        url: 'books-html/last-olympian.html'
    },
    {
        title: 'A Little Life',
        author: 'Hanya Yanagihara',
        image: 'book-covers/a-little-life-2.jpg',
        url: 'books-html/little-life.html'
    },
    {
        title: 'Normal People',
        author: 'Sally Rooney',
        image: 'book-covers/nromal-people.jpg',
        url: 'books-html/normal-people.html'
    },
    {
        title: 'It Starts With Us',
        author: 'Colleen Hoover',
        image: 'book-covers/it starts with us.jpg',
        url: 'books-html/it-starts-with-us.html'
    },
    {
        title: 'Dune',
        author: 'Frank Herbert',
        image: 'book-covers/dune.jpg',
        url: 'books-html/dune.html'
    },
    {
        title: 'Hyperion',
        author: 'Dan Simmons',
        image: 'book-covers/hyperion-8.jpg',
        url: 'books-html/hyperion.html'
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        image: 'book-covers/harry-potter.jpg',
        url: 'books-html/harry-potter.html'
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        image: 'book-covers/hunger-games.jpg',
        url: 'books-html/hunger-games.html'
    },
    {
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        image: 'book-covers/gone-girl.jpg',
        url: 'books-html/gone-girl.html'
    },
    {
        title: 'Julius Caesar',
        author: 'William Shakespeare',
        image: 'book-covers/julius-caesar.jpg',
        url: 'books-html/julius-caesar.html'
    },
    {
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        image: 'book-covers/romeo-and-juliet-320.jpg',
        url: 'books-html/romeo-juliet.html'
    }
];

// Display search results based on query
const searchQuery = getQueryParameter('query');
const searchResultsContainer = document.getElementById('search-results-container');
let resultsHtml = `
    <div class="search-results-title">
        Results for: <strong>${searchQuery}</strong>
    </div>
    <br>
`;

// Filter books based on search query for title and author
const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
);

// Check if books match the search query
if (filteredBooks.length > 0) {
    resultsHtml += `<div class="search-results-grid">`;
    filteredBooks.forEach(book => {
        resultsHtml += `
            <div class="book-result-card">
                <img src="${book.image}" alt="${book.title}" class="book-image">
                <h4 class="book-title">${book.title}</h4>
                <p class="book-author">by ${book.author}</p>
                <a href="${book.url}" class="view-book-link">VIEW BOOK</a>
            </div>
        `;
    });
    resultsHtml += `</div>`;
} else {
    resultsHtml += '<div class="no-results">No results found.</div>';
}

// Update the HTML content of the search results container
searchResultsContainer.innerHTML = resultsHtml;

