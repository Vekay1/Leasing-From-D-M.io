document.addEventListener('DOMContentLoaded', function() {
    const carList = document.querySelector('.tabs__content-item');

    function getCarsFromLocalStorage() {
        const cars = localStorage.getItem('cars');
        return cars ? JSON.parse(cars) : [];
    }

    function renderCars(cars) {
        cars.forEach(car => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img class="card__img" src="${car.imageUrl}" alt="${car.title}">
                <div class="card__content">
                    <h4 class="card__title">${car.title}</h4>
                    <p class="card__text price">starting from ${car.price}</p>
                    <p class="card__text mileage">Mileage ${car.mileage}</p>
                    <p class="card__text damage">${car.damage}</p>
                    <p class="card__price">${car.monthly}</p>
                    <img class="card__img__favorite" src="images/like/heart.png" alt="Favorite">
                    <img class="edit-btn" src="images/like/pencil.png" alt="Edit" style="cursor: pointer;">
                </div>
                <a href="#" class="card__link">see details</a>
            `;
            carList.appendChild(card);
        });
    }

    renderCars(getCarsFromLocalStorage());
});
