async function ipc(method) {
  try {
    const msg = await window.Ele[method]();
    console.log(msg);
  } catch (e) {
    console.log(e);
  }
}

window.addEventListener("load", () => {
  document.querySelector("#resolve").addEventListener("click", async (ev) => {
    ev.preventDefault();
    await ipc("resolve");
  });
  document.querySelector("#reject").addEventListener("click", async (ev) => {
    ev.preventDefault();
    await ipc("reject");
  });
});
