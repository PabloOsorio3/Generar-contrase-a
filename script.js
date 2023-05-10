const generatePassword = () => {
  const passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters.charAt(randomIndex);
  }

  document.getElementById("my-password").value = password;
}

