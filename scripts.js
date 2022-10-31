// тут обычный js fetch исправленный 
const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  const searchValue = searchInput.value.trim().toLowerCase();
  console.log(searchValue);
 

  fetch(`https://api.github.com/users/`+searchValue)
 .then((response) => {
  return response.json()
 })
 .then((data) => {
    console.log(data); 
    (resultsContainer.innerHTML = `<div class="response-container">
    <img src="${data.avatar_url}">
    <p> Имя: <span>${data.name}</span><p>
    <p> О себе: <span>${data.bio}</span><p>
    <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
    </div>`)
 });
});
