const result = function (name) {
  document.querySelector(
    ".rating-result"
  ).innerHTML = `You selected ${name} out of 5`;

  return name;
};

const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
  const resultDisplay = document.querySelector(".rating-result").innerHTML;

  if (resultDisplay) {
    document.getElementById("inner-container").style.display = "none";
    document.getElementById("inner-container-2").style.display = "block";
  } else {
    document.querySelector(".error-message").innerHTML =
      "Please select a number!";
  }
});
