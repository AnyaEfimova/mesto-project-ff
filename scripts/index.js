// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const content = document.querySelector(".content");
const placesList = content.querySelector(".places__list"); //куда добавляем

// @todo: Функция создания карточки
function addCard(dataCard, deleteCard) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  // клонируем
  cardElement.querySelector(".card__image").src = dataCard.link;
  cardElement.querySelector(".card__image").alt = dataCard.name;
  cardElement.querySelector(".card__title").textContent = dataCard.name;
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", function () {
      deleteCard(cardElement); // что происходит при клике по кнопке
    });

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(element) {
  element.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const Element = addCard(item, deleteCard);
  placesList.append(Element);
});
