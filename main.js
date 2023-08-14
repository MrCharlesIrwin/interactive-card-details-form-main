const cardHolderNameInput = document.querySelector(".formWrapper__inputForCardsNameAndNumber");
const cardHolderNameOutput = document.querySelector(".cardNameOutput");
const expMonthInput = document.querySelector(".expDateAndCVC-wrapper__inputMonth");
const expYearInput = document.querySelector(".expDateAndCVC-wrapper__inputYear");
const expDateOutput = document.querySelectorAll(".expDateOutput");
const CardNumberInput = document.querySelector("#cardNumber");
const CardNumberOutput = document.querySelectorAll(".CardNumberOutput");

const inputCVC = document.querySelector(".expDateAndCVC-wrapper__inputCVC");
const outputCVC = document.querySelector(".cardOutput__cardsBack__cvcOutput");
const form = document.querySelector(".form");

const CompletedState = document.querySelector(".CompletedState");
const formWrapper = document.querySelector(".formWrapper");
//inserValue

inputCVC.addEventListener("input", insertData);
expMonthInput.addEventListener("input", insertData);
expYearInput.addEventListener("input", insertData);

cardHolderNameInput.addEventListener("input", (e) => {
  e.target.classList.remove("redOutline");

  if (e.target.value == "") {
    e.target.classList.add("redOutline");
    return (cardHolderNameOutput.innerText = "Jane Appleseed");

  }
  cardHolderNameOutput.innerText = e.target.value;
});

function insertData() {
  if (this === expMonthInput) expDateOutput[0].innerText = this.value;
  if (this === expYearInput) expDateOutput[1].innerText = this.value;
  if (this === inputCVC) outputCVC.innerText = this.value;
  if (this === expMonthInput && this.value === "") expDateOutput[0].innerText = "00";
  if (this === expYearInput && this.value === "") expDateOutput[1].innerText = "00";
}

const dateAndcvcAndumberInput = document.querySelectorAll(".dateAndcvcAndumberInput");

// Change focus of inputs

dateAndcvcAndumberInput.forEach((inputItem, index, array) => {
  inputItem.addEventListener("input", (input) => {
    if (input.target.value.length > input.target.maxLength - 1) {
      if (array[array.length - 1] === input.target) return;
      array[index + 1].focus();
    }
    if (input.target.value.length === input.target.minLength) {
      if (array[0] === input.target) return;
      array[index - 1].focus();
    }
  });
});

// card number output

CardNumberInput.addEventListener("input", (e) => {
  const input = e.target.value;
  const array = [...input];
  const array2 = [...CardNumberOutput];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != array2[i]) {
      CardNumberOutput[i].innerText = array[i];
    }
  }
  for (y = CardNumberInput.value.length; y < 16; y++) {
    CardNumberOutput[y].innerText = "0";
  }
});

// making confirm button  responsive
const inputs = document.querySelectorAll("input")
form.addEventListener("submit", (e) => {
  e.preventDefault()

  for(const input of [...inputs]) {
    if(input.value.length < input.maxLength ) return
    if(input.classList.contains("redOutline")) return 
    if(input.value == "") return
  }
  formWrapper.style.display = "none";
  CompletedState.style.display = "block";

});


// Validate inputs

const frongFormatCase = document.querySelector(".frongFormatCase");
const dateAndcvcInput = document.querySelectorAll(".dateAndcvcInput");
const cantBeblankMessage = document.querySelectorAll(".cantBeblank-message");

CardNumberInput.addEventListener("input", (e) => {
  e.target.classList.remove("redOutline");
  frongFormatCase.classList.remove("displayBlock");
  if (isNaN(e.target.value)) {
    e.target.classList.add("redOutline");
    frongFormatCase.classList.add("displayBlock");
  }
});

dateAndcvcInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    cantBeblankMessage[0].classList.remove("show");
    cantBeblankMessage[1].classList.remove("show");

    e.target.classList.remove("redOutline");

    if (e.target.value == "") {
      e.target.classList.add("redOutline");
    }
    if (e.target.id == "cvc" && e.target.value == "") {
      cantBeblankMessage[1].classList.add("show");
    }
    if (e.target.id == "expDate" && e.target.value == "") {
      cantBeblankMessage[0].classList.add("show");
    }
  });
});

// console.log(formWrapper.contains(formWrapper))