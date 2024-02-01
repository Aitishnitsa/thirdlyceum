let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle mobile menu
    function toggleMobileMenu() {
        let mobileMenu = document.getElementById('mobile-menu');
        let closedPath = document.querySelector('.closed-path');
        let openPath = document.querySelector('.open-path');

        mobileMenu.classList.toggle('hidden');
        closedPath.style.display = mobileMenu.classList.contains('hidden') ? 'block' : 'none';
        openPath.style.display = mobileMenu.classList.contains('hidden') ? 'none' : 'block';
    }

    // Event listener for the mobile menu button
    let mobileMenuButton = document.getElementById('menu-button');
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
});

// Function to create an article element
function createArticle(data) {
    const article = document.createElement('article');
    article.className = 'bg-white border-solid border-2 border-orange hover:border-darkBlue transition-colors ease-in-out delay-300 p-4 rounded-2xl flex max-w-xl flex-col items-start justify-between';

    // Create elements for the article content
    const dateElement = document.createElement('time');
    dateElement.setAttribute('datetime', data.createdAt);
    dateElement.className = 'text-blue';
    dateElement.textContent = new Date(data.createdAt * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const titleElement = document.createElement('p');
    titleElement.className = 'mt-5 line-clamp-3 text-sm leading-6 text-gray-600 w-full';

    const titleLinkElement = document.createElement('a');
    titleLinkElement.href = data.url;
    titleLinkElement.innerHTML = `<p class=""></p>${data.content}`;

    const authorElement = document.createElement('div');
    authorElement.className = 'relative mt-8 flex items-center gap-x-4';

    const avatarElement = document.createElement('img');
    avatarElement.src = data.author.avatar;
    avatarElement.alt = '';
    avatarElement.className = 'h-10 w-10 rounded-full bg-gray-50';

    const authorDetailsElement = document.createElement('div');
    authorDetailsElement.className = 'text-sm leading-6';

    const authorNameElement = document.createElement('p');
    authorNameElement.className = 'font-semibold text-gray-900';

    const authorLinkElement = document.createElement('a');
    authorLinkElement.href = data.author.profile;
    authorLinkElement.innerHTML = `<span class="absolute inset-0"></span>${data.author.name}`;

    // Append created elements to the article
    authorNameElement.appendChild(authorLinkElement);
    authorDetailsElement.appendChild(authorNameElement);
    authorElement.appendChild(avatarElement);
    authorElement.appendChild(authorDetailsElement);

    titleElement.appendChild(titleLinkElement);

    article.appendChild(dateElement);
    article.appendChild(titleElement);
    article.appendChild(authorElement);

    return article;
}

// Function to render articles on the page
function renderArticles(dataArray) {
    const articlesContainer = document.getElementById('articles-container');

    dataArray.forEach(data => {
        const article = createArticle(data);
        articlesContainer.appendChild(article);
    });
}

fetch('./posts.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(json => {
        renderArticles(json);
    });
