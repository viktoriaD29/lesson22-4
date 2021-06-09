const buttomElem = document.querySelector('.search__btn');
function getText () {
  const inputElem = document.querySelector('.search__input');
  console.log(inputElem.value)
}
buttomElem.addEventListener('click', getText);