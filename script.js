const languages = [
  "Coming Soon",
  "Yakında",
  "Очаквайте скоро",
  "Brzy",
  "arrive bientôt",
  "demnächst",
  "近日公開",
  "जल्द आ रहा है",
  "قريبا",
  "Prossimamente",
  "drīzumā",
  "tulossa pian",
  "скоро",
];

const lang = document.getElementById("language");

function changeLanguage() {
  let random = Math.trunc(Math.random() * languages.length);
  lang.innerHTML = languages[random];
}

setInterval(() => {
  changeLanguage();
}, 2000);
