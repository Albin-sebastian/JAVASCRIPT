// const imgBox = document.getElementById("imgBox");
// const qrImage = document.getElementById("qrImage");
// const qrText = document.getElementById("qrText");
// const btn = document.getElementById("btn");

// const generateQr = () => {
//   qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
// }

// btn.addEventListener("click", () => {
//   generateQr();
// })

// Select elements using destructuring and querySelector
const [imgBox, qrImage, qrText, btn] = [
  "#imgBox",
  "#qrImage",
  "#qrText",
  "#btn",
].map((selector) => document.querySelector(selector));

// Define generateQr function using async/await and try-catch block
const generateQr = async () => {
  try {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    qrImage.src = url;
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
};

// Add event listener using arrow function and prevent default behavior
btn.addEventListener("click", (event) => {
  event.preventDefault();
  generateQr();
});

