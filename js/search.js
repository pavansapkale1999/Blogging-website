document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  const query = document.getElementById('searchQuery').value.trim().toLowerCase();
  if (query) {
    highlightSearchTerms(query);
  }
});

function highlightSearchTerms(query) {
  const articles = document.querySelectorAll('.home-article .article-title');
  articles.forEach(article => {
    const articleTitle = article.textContent.toLowerCase();
    if (articleTitle.includes(query)) {
      const regex = new RegExp(`(${query})`, 'gi');
      article.innerHTML = article.textContent.replace(regex, '<span class="highlight">$1</span>');
    } else {
      article.innerHTML = article.textContent; // Remove highlights if any
    }
  });
}
