document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  const length = document.getElementById("length").value;
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumber = document.getElementById("numbers").checked;
  const useSymbol = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let allChars = "";
  if (useUpper) allChars += upper;
  if (useLower) allChars += lower;
  if (useNumber) allChars += numbers;
  if (useSymbol) allChars += symbols;

  if (allChars === "") {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passField = document.getElementById("password");
  passField.select();
  passField.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(passField.value);
  alert("Password copied to clipboard!");
}
