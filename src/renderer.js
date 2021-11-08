function ipc(method) {
  window.Ele[method]()
    .then((msg) => {
      console.log(msg);
    })
    .catch((err) => {
      console.log(err);
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
