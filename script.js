console.log("Сайт подключён к JavaScript!");
const scrollTopBtn = document.querySelector("#scrollTopBtn");

// Показываем/скрываем кнопку при прокрутке
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }
});

// Плавная прокрутка наверх
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");
const filterCount = document.querySelector("#filterCount");

// Функция фильтрации
function filterCards(category) {
    let visibleCount = 0;
    
    cards.forEach((card) => {
        if (category === "all" || card.dataset.category === category) {
            card.classList.remove("hidden");
            visibleCount++;
        } else {
            card.classList.add("hidden");
        }
    });
    
    // Обновляем счётчик
    if (filterCount) {
        filterCount.textContent = visibleCount;
    }
}

// Инициализация при загрузке
filterCards("all");

// Слушаем клики по кнопкам
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Убираем active у всех
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        
        // Фильтруем
        const category = button.dataset.filter;
        filterCards(category);
    });
});
