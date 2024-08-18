document.addEventListener('DOMContentLoaded', function () {
    const favoriteContainer = document.querySelector('.tabs__content-item');

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.length === 0) {
        favoriteContainer.innerHTML = '<p>No favorite cars yet.</p>';
        return;
    }

    const allCards = [
        {
            title: 'Toyota Crown 2023',
            img: 'images/card-1.jpg',
            price: 'starting from $39900',
            mileage: 'Mileage 860K',
            damage: 'Clean Title',
            monthly: '$650/mo'
        },
        {
            title: 'Prius Prime 2023',
            img: 'images/card-2.jpg',
            price: 'starting from $39900',
            mileage: 'Mileage 652k',
            damage: 'Clean Title',
            monthly: '$450/mo'
        },
        {
            title: 'Toyota Prius 2023',
            img: 'images/card-3.jpg',
            price: 'starting from $39900',
            mileage: 'Mileage 210k',
            damage: 'Damage',
            monthly: '$400/mo'
        },
        {
            title: 'Hyundai Kona 2023',
            img: 'images/card-4.jpg',
            price: 'starting from $39900',
            mileage: 'Mileage 510K',
            damage: 'Clean Title',
            monthly: '$510/mo'
        },
        {
            title: 'Santa Fe 2023',
            img: 'images/card-1.jpg',
            price: 'starting from $39900',
            mileage: 'Mileage 860K',
            damage: 'Clean Title',
            monthly: '$739/mo'
        },
        {
            title: 'Ford Explorer 2023',
            img: 'images/card-2.jpg',
            price: 'starting from $39900',
            mileage: 'Mileage 860K',
            damage: 'Clean Title',
            monthly: '$1013/mo'
        },
        {
            title: 'KIA Niro 2023',
            img: 'images/card-3.jpg',
            price: 'starting from $39900',
            mileage: 'Mileage 860K',
            damage: 'Clean Title',
            monthly: '$554/mo'
        },
        {
            title: 'Chevrolet Silverado',
            img: 'images/card-4.jpg',
            price: 'starting from $39900',
            mileage: 'Mileage 860K',
            damage: 'Clean Title',
            monthly: '$1032/mo'
        },
        {
            title: 'Honda Accord 2023',
            img: 'images/card-2.jpg',
            price: 'starting from $27000',
            mileage: 'Mileage 135K',
            damage: 'Damage',
            monthly: '$450/mo'
        },
        {
            title: 'Hyundai Elantra 2023',
            img: 'images/card-3.jpg',
            price: 'starting from $20000',
            mileage: 'Mileage 342K',
            damage: 'Clean Title',
            monthly: '$400/mo'
        },
        {
            title: 'Ford Mustang 2023',
            img: 'images/card-4.jpg',
            price: 'starting from $27000',
            mileage: 'Mileage 763K',
            damage: 'Damage',
            monthly: '$510/mo'
        },
        {
            title: 'Chevrolet Malibu',
            img: 'images/card-1.jpg',
            price: 'starting from $24000',
            mileage: 'Mileage 510K',
            damage: 'Clean Title',
            monthly: '$739/mo'
        },
        {
            title: 'KIA Seltos 2023',
            img: 'images/card-2.jpg',
            price: 'starting from $22000',
            mileage: 'Mileage 402K',
            damage: 'Damage',
            monthly: '$554/mo'
        },
        {
            title: 'Nissan Altima 2023',
            img: 'images/card-3.jpg',
            price: 'starting from $25000',
            mileage: 'Mileage 120K',
            damage: 'Clean Title',
            monthly: '$600/mo'
        },
        {
            title: 'Mazda CX-5 2023',
            img: 'images/card-4.jpg',
            price: 'starting from $26000',
            mileage: 'Mileage 780K',
            damage: 'Damage',
            monthly: '$620/mo'
        },
        {
            title: 'Subaru Forester 2023',
            img: 'images/card-1.jpg',
            price: 'starting from $28000',
            mileage: 'Mileage 675K',
            damage: 'Clean Title',
            monthly: '$650/mo'
        },
        {
            title: 'Toyota Camry 2023',
            img: 'images/card-2.jpg',
            price: 'starting from $25000',
            mileage: 'Mileage 240K',
            damage: 'Damage',
            monthly: '$600/mo'
        },
        {
            title: 'Toyota Camry 2023',
            img: 'images/card-2.jpg',
            price: 'starting from $25000',
            mileage: 'Mileage 357K',
            damage: 'Clean Title',
            monthly: '$600/mo'
        },
        {
            title: 'Hyundai Tucson 2023',
            img: 'images/card-4.jpg',
            price: 'starting from $23000',
            mileage: 'Mileage 588K',
            damage: 'Clean Title',
            monthly: '$500/mo'
        },
        {
            title: 'Ford Escape 2023',
            img: 'images/card-1.jpg',
            price: 'starting from $26000',
            mileage: 'Mileage 345K',
            damage: 'Damage',
            monthly: '$520/mo'
        },
        {
            title: 'Chevrolet Equinox',
            img: 'images/card-2.jpg',
            price: 'starting from $25000',
            mileage: 'Mileage 678K',
            damage: 'Clean Title',
            monthly: '$510/mo'
        },
        {
            title: 'Chevrolet Equinox',
            img: 'images/card-2.jpg',
            price: 'starting from $25000',
            mileage: 'Mileage 512K',
            damage: 'Damage',
            monthly: '$510/mo'
        },
        {
            title: 'KIA Sportage 2023',
            img: 'images/card-3.jpg',
            price: 'starting from $24000',
            mileage: 'Mileage 415K',
            damage: 'Clean Title',
            monthly: '$500/mo'
        },
        {
            title: 'Nissan Rogue 2023',
            img: 'images/card-4.jpg',
            price: 'starting from $26000',
            mileage: 'Mileage 765K',
            damage: 'Damage',
            monthly: '$520/mo'
        },
        {
            title: 'Mazda3 2023',
            img: 'images/card-1.jpg',
            price: 'starting from $20000',
            mileage: 'Mileage 590K',
            damage: 'Clean Title',
            monthly: '$420/mo'
        },
        {
            title: 'Mazda3 2023',
            img: 'images/card-1.jpg',
            price: 'starting from $20000',
            mileage: 'Mileage 830K',
            damage: 'Damage',
            monthly: '$420/mo'
        },
        {
            title: 'Subaru Outback 2023',
            img: 'images/card-2.jpg',
            price: 'starting from $27000',
            mileage: 'Mileage 320K',
            damage: 'Clean Title',
            monthly: '$550/mo'
        },
        {
            title: 'Toyota RAV4 2023',
            img: 'images/card-3.jpg',
            price: 'starting from $27000',
            mileage: 'Mileage 422K',
            damage: 'Damage',
            monthly: '$560/mo'
        },
        {
            title: 'Honda Pilot 2023',
            img: 'images/card-4.jpg',
            price: 'starting from $32000',
            mileage: 'Mileage 510K',
            damage: 'Clean Title',
            monthly: '$650/mo'
        },
        {
            title: 'Hyundai Santa Fe',
            img: 'images/card-1.jpg',
            price: 'starting from $28000',
            mileage: 'Mileage 200K',
            damage: 'Damage',
            monthly: '$570/mo'
        },
        {
            title: 'Ford Edge 2023',
            img: 'images/card-2.jpg',
            price: 'starting from $32000',
            mileage: 'Mileage 410K',
            damage: 'Clean Title',
            monthly: '$620/mo'
        },
        {
            title: 'Chevrolet Trailblazer',
            img: 'images/card-3.jpg',
            price: 'starting from $22000',
            mileage: 'Mileage 380K',
            damage: 'Damage',
            monthly: '$460/mo'
        },
        {
            title: 'KIA Sorento 2023',
            img: 'images/card-4.jpg',
            price: 'starting from $30000',
            mileage: 'Mileage 450K',
            damage: 'Clean Title',
            monthly: '$620/mo'
        },
        {
            title: 'Nissan Murano 2023',
            img: 'images/card-1.jpg',
            price: 'starting from $32000',
            mileage: 'Mileage 320K',
            damage: 'Damage',
            monthly: '$650/mo'
        },
        {
            title: 'Mazda6 2023',
            img: 'images/card-2.jpg',
            price: 'starting from $24000',
            mileage: 'Mileage 670K',
            damage: 'Clean Title',
            monthly: '$500/mo'
        },
        // Додані нові картки
        {
            title: 'Hyundai Sonata 2023',
            img: 'images/card-3.jpg',
            price: 'starting from $28000',
            mileage: 'Mileage 520K',
            damage: 'Clean Title',
            monthly: '$600/mo'
        },
        {
            title: 'Ford F-150 2023',
            img: 'images/card-4.jpg',
            price: 'starting from $35000',
            mileage: 'Mileage 650K',
            damage: 'Damage',
            monthly: '$750/mo'
        },
    ];

    allCards.forEach(card => {
        if (favorites.includes(card.title)) {
            const cardHTML = `
                    <div class="card">
                        <img class="card__img" src="${card.img}" alt="">
                        <div class="card__content">
                            <h4 class="card__title">${card.title}</h4>
                            <p class="card__text price">${card.price}</p>
                            <p class="card__text mileage">${card.mileage}</p>
                            <p class="card__text damage">${card.damage}</p>
                            <p class="card__price">${card.monthly}</p>
                            <img class="card__img__favorite" src="images/like/passion.png" alt="">
                        </div>
                        <a href="#" class="card__link">see details</a>
                    </div>
                `;
            favoriteContainer.innerHTML += cardHTML;
        }
    });
});

//////////
