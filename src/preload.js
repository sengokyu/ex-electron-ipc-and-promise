const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("Ele", {
  resolve: () => ipcRenderer.invoke("resolve"),
  reject: () => ipcRenderer.invoke("reject"),
});
