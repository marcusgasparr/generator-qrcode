const container = document.querySelector(".container");
const btnSubmit = document.querySelector(".btn-submit");
const textWarning = document.querySelector(".text-warning");
const inputQrCode = document.querySelector("#input-text");
const imgQrCode = document.querySelector(".qr-code-img");
const textQrCode = document.querySelector(".text-qr-code");
const btnRefreshPage = document.querySelector(".btn-refresh-page");

//Events

//Generator QR
function genQrCode() {
  const inputQrCodeValue = inputQrCode.value;

  console.log(inputQrCodeValue);

  if (!inputQrCodeValue) {
    textWarning.innerHTML = "O campo acima não pode estar vazio";
    return;
  } else {
    textWarning.innerHTML = "";
    inputQrCode.disabled = true;
  }

  btnSubmit.innerHTML = "Gerando QR Code...";

  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=+${inputQrCodeValue}`;
  imgQrCode.addEventListener("load", () => {
    imgQrCode.classList.add("active");
    btnSubmit.innerHTML = "QR Code Gerado!";

    textQrCode.innerHTML = `Escaneie o QR Code`;
    btnRefreshPage.classList.add("active");

    setTimeout(() => {
      btnSubmit.classList.remove("active");
    }, 5000);
  });
}

//Button Generator
btnSubmit.addEventListener("click", () => {
  genQrCode();
});

//Refresh Page
function refreshPage() {
  location.reload();
}

btnRefreshPage.addEventListener("click", () => {
  refreshPage();
});

//Keyboard
inputQrCode.addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") genQrCode();
});

inputQrCode.addEventListener("keydown", (e) => {
  if (e.code === "Escape") inputQrCode.value = "";
});
