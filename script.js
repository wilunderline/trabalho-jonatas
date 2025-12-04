// Restaurar tema salvo
window.onload = () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
  }
};

// Alternar tema
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// Menu hamburguer
function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}
function logout() {
  // Apaga o tema salvo
  localStorage.removeItem("siteTheme");

  // Redireciona pra página inicial
  window.location.href = "home.html";
}
