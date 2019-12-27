const writeChat = text => {
  // <ul> element
  const parent = document.querySelector("#events");

  // <li> element
  const el = document.createElement("li");
  el.innerHTML = text;

  parent.appendChild(el);
};

const writeGame = text => {
  // <ul> element
  const parent = document.querySelector("#events");

  // <li> element
  const el = document.createElement("li");
  el.className = "color";
  el.innerHTML = text;

  parent.appendChild(el);
};

const onFormSubmitted = e => {
  e.preventDefault();

  const input = document.querySelector("#chat");
  const text = input.value;
  input.value = "";

  sock.emit("message", text);
};

const addButtonListeners = () => {
  ["rock", "paper", "scissors"].forEach(id => {
    const button = document.getElementById(id);
    button.addEventListener("click", () => {
      sock.emit("turn", id);
    });
  });
};

writeChat("Welcome to Rock Paper Scissors");
const sock = io();
sock.on("message", writeChat);

document
  .querySelector("#chat-form")
  .addEventListener("submit", onFormSubmitted);

addButtonListeners();
