const unsplashAccessKey = "S1k7G_eTot71wYDS-xnbrdF9TcMs6Y9Ew4lguThpUAI";

const keywordInput = document.getElementById("keyword");
const searchButton = document.getElementById("search-button");
const imagesContainer = document.getElementById("images");

searchButton.addEventListener("click", () => {
    const keyword = keywordInput.value;

    // Отправка запроса к API Unsplash
    fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${unsplashAccessKey}`)
        .then(response => response.json())
        .then(data => {
            imagesContainer.innerHTML = "";

            // Обработка ответа и отображение изображений
            data.results.forEach(image => {
                const imageElement = document.createElement("img");
                imageElement.src = image.urls.regular;
                imageElement.alt = image.description;

                imagesContainer.appendChild(imageElement);
            });
        });
});
