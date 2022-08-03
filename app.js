const heder = document.getElementById("quotes");
const btn = document.getElementById("btn");
const box = document.getElementById("box");
const contaner = document.getElementById("contaner");
let content = Math.floor(Math.random() * 102);

btn.addEventListener("click", () => {
  let color = Math.random() * 255;
  fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      content = Math.floor(Math.random() * data.quotes.length);

      heder.innerHTML = `〃${data.quotes[content].quote}〃 </br> <p><i>-${data.quotes[content].author}</i></p> `;
    });

  contaner.style.backgroundColor =
    btn.style.backgroundColor = `hsl(${color},65%,50%)`;
  box.style.color = `hsl(${color},80%,25%)`;
});
