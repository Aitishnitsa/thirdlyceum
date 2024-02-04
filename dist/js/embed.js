const articlesContainer = document.getElementById('articles-container');
const readMoreButton = document.getElementById('read-more-btn');
const showLessButton = document.getElementById('show-less-btn');
const shadow = document.getElementById('white-shadow');
const loader = document.getElementById('loader');

let newsArray = [];

// Function to create an article element
function createArticle(data) {
    const article = document.createElement('article');
    article.className = 'bg-white border-solid border-2 border-orange hover:border-darkBlue transition-colors ease-in-out delay-75 p-4 rounded-2xl flex max-w-xl flex-col items-start justify-between';

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
    avatarElement.alt = 'fb-avatar';
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

// Function to render all articles on the page
function renderAllArticles(dataArray) {
    dataArray.forEach(data => {
        const article = createArticle(data);
        articlesContainer.appendChild(article);
    });
}

// Function to handle "Read More" button click
function handleReadMoreClick() {
    // Show the remaining articles
    articlesContainer.querySelectorAll('article').forEach(article => {
        article.classList.remove('hidden');
    });

    // Hide the "Read More" button
    readMoreButton.classList.add('hidden');
    shadow.classList.add('hidden')

    // Show the "Show Less" button
    showLessButton.classList.remove('hidden');
}

// Function to handle "Show Less" button click
function handleShowLessClick() {
    // Hide the remaining articles
    articlesContainer.querySelectorAll('article').forEach((article, index) => {
        if (index >= 6) {
            article.classList.add('hidden');
        }
    });

    // Show the "Read More" button
    readMoreButton.classList.remove('hidden');
    shadow.classList.remove('hidden')

    // Hide the "Show Less" button
    showLessButton.classList.add('hidden');
}

// Initial articles rendering
fetch('./posts.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(json => {
        // Render all articles
        renderAllArticles(json);

        // Show only 6 fully visible articles and hide the rest
        articlesContainer.querySelectorAll('article').forEach((article, index) => {
            if (index >= 6) {
                article.classList.add('hidden');
            }
        });

        // Show the "Read More" button if there are more articles
        if (json.length > 9) {
            readMoreButton.classList.remove('hidden');
        }

        loader.classList.add('hidden');
    });

// Event listener for the "Read More" button
readMoreButton.addEventListener('click', handleReadMoreClick);

// Event listener for the "Show Less" button
showLessButton.addEventListener('click', handleShowLessClick);
