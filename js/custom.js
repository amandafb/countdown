import countdown from "./modules/countdown.js";

const btnEnviar = document.getElementById("btnEnviar");
const btnReset = document.getElementById("btnReset");
const closeError = document.querySelector('.closeError');

function newCountdown() {
  let titleImput = document.getElementById("titleImput").value;
  let dayInput = document.getElementById("dayInput").value;
  let monthInput = document.getElementById("monthInput").value;
  let yearInput = document.getElementById("yearInput").value;
  const dateString = `${dayInput} ${monthInput} ${yearInput} 15:49:00`;

  const futureDate = new Date(dateString);
  const todayDate = new Date();
  const timeStampDiff = futureDate.getTime() - todayDate.getTime();

  if (timeStampDiff > 0) {
      let title = document.querySelector(".title");
      title.innerText = titleImput;
      title.style.display = "block";
      const countdownDiv = document.querySelector(".countdown");
      countdownDiv.style.display = "flex";

      btnEnviar.disabled = true;

      setInterval(() => {
        countdown(dateString);
      }, 1000);

  } else {
    const divError = document.querySelector('.error')
    divError.style.display = "flex"
    reset();
  }

}

function reset() {
  let title = document.querySelector(".title");
  title.innerText = "";
  let titleImput = document.getElementById("titleImput");
  titleImput.value = "";
  let dayInput = document.getElementById("dayInput");
  dayInput.value = "";
  let monthInput = document.getElementById("monthInput");
  monthInput.value = "0";
  let yearInput = document.getElementById("yearInput");
  yearInput.value = "";

  const countdownDiv = document.querySelector(".countdown");
  countdownDiv.style.display = "none";

  btnEnviar.disabled = false;
}

function error(){
  const divError = document.querySelector('.error')
  divError.style.display ="none"
}

btnEnviar.addEventListener("click", newCountdown);
btnReset.addEventListener("click", reset);
closeError.addEventListener("click", error)

