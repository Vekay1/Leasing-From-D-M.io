
    document.addEventListener('DOMContentLoaded', function () {
    const favoriteImages = document.querySelectorAll('.card__img__favorite');

    favoriteImages.forEach(img => {
    img.addEventListener('click', function () {
    const card = img.closest('.card');
    const cardTitle = card.querySelector('.card__title').textContent;

    if (img.src.includes('heart.png')) {
    img.src = 'images/like/passion.png';
    saveToFavorites(cardTitle, true);
} else {
    img.src = 'images/like/heart.png';
    saveToFavorites(cardTitle, false);
}
});

    const card = img.closest('.card');
    const cardTitle = card.querySelector('.card__title').textContent;
    if (isFavorite(cardTitle)) {
    img.src = 'images/like/passion.png';
} else {
    img.src = 'images/like/heart.png';
}
});

    function saveToFavorites(title, isFavorite) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
    favorites.push(title);
} else {
    favorites = favorites.filter(fav => fav !== title);
}
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

    function isFavorite(title) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(title);
}
});
