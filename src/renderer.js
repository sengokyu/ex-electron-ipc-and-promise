const { from } = require("rxjs");

function ipc(method) {
  from(window.Ele[method]()).subscribe({
    next: (msg) => {
      console.log(msg);
    },
    error: (err) => {
      console.log(err);
    },
  });
}

window.addEventListener("load", () => {
  document.querySelector("#resolve").addEventListener("click", (ev) => {
    ev.preventDefault();
    ipc("resolve");
  });
  document.querySelector("#reject").addEventListener("click", (ev) => {
    ev.preventDefault();
    ipc("reject");
  });
});
