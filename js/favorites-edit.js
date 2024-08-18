document.addEventListener('DOMContentLoaded', function () {
    const editButtons = document.querySelectorAll('.edit-btn');
    const modal = document.getElementById("editModal");
    const span = document.getElementsByClassName("close")[0];
    let currentCard;
    let allCards = [];

    // Завантажити дані з localStorage
    loadCardsFromLocalStorage();

    // Відкрити модальне вікно
    editButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            currentCard = e.target.closest('.card');
            const title = currentCard.querySelector('.card__title').textContent;
            const price = currentCard.querySelector('.price').textContent;
            const mileage = currentCard.querySelector('.mileage').textContent;
            const damage = currentCard.querySelector('.damage').textContent;
            const monthly = currentCard.querySelector('.card__price').textContent;

            document.getElementById('editTitle').value = title;
            document.getElementById('editPrice').value = price;
            document.getElementById('editMileage').value = mileage;
            document.getElementById('editDamage').value = damage;
            document.getElementById('editMonthly').value = monthly;

            modal.style.display = "block";
        });
    });

    // Закрити модальне вікно
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Зберегти зміни
    document.getElementById('editForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const editedTitle = document.getElementById('editTitle').value;
        const editedPrice = document.getElementById('editPrice').value;
        const editedMileage = document.getElementById('editMileage').value;
        const editedDamage = document.getElementById('editDamage').value;
        const editedMonthly = document.getElementById('editMonthly').value;

        currentCard.querySelector('.card__title').textContent = editedTitle;
        currentCard.querySelector('.price').textContent = editedPrice;
        currentCard.querySelector('.mileage').textContent = editedMileage;
        currentCard.querySelector('.damage').textContent = editedDamage;
        currentCard.querySelector('.card__price').textContent = editedMonthly;

        // Зберегти в localStorage
        saveCardToLocalStorage(currentCard);

        modal.style.display = "none";
    });

    function saveCardToLocalStorage(card) {
        const id = card.querySelector('.card__title').textContent + card.querySelector('.price').textContent;
        const title = card.querySelector('.card__title').textContent;
        const price = card.querySelector('.price').textContent;
        const mileage = card.querySelector('.mileage').textContent;
        const damage = card.querySelector('.damage').textContent;
        const monthly = card.querySelector('.card__price').textContent;

        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        const cardIndex = cards.findIndex(c => c.id === id);
        if (cardIndex > -1) {
            cards[cardIndex] = { id, title, price, mileage, damage, monthly };
        } else {
            cards.push({ id, title, price, mileage, damage, monthly });
        }
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    function loadCardsFromLocalStorage() {
        allCards = JSON.parse(localStorage.getItem('cards')) || [];
        allCards.forEach(cardData => {
            const card = Array.from(document.querySelectorAll('.card')).find(c => {
                const id = c.querySelector('.card__title').textContent + c.querySelector('.price').textContent;
                return id === cardData.id;
            });
            if (card) {
                card.querySelector('.card__title').textContent = cardData.title;
                card.querySelector('.price').textContent = cardData.price;
                card.querySelector('.mileage').textContent = cardData.mileage;
                card.querySelector('.damage').textContent = cardData.damage;
                card.querySelector('.card__price').textContent = cardData.monthly;
            }
        });
    }
});