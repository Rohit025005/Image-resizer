const os = require('os');
const fs = require('fs');
const path = require('path');
const { contextBridge, ipcRenderer ,webUtils } = require('electron');
const Toastify = require('toastify-js');

contextBridge.exposeInMainWorld('os', {
  homedir: () => os.homedir(),
});

contextBridge.exposeInMainWorld('path', {
  join: (...args) => path.join(...args),
});

contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
});

contextBridge.exposeInMainWorld('Toastify', {
  toast: (options) => Toastify(options).showToast(),
});

contextBridge.exposeInMainWorld('fs',{
  readFileSync : (filePath) => fs.readFileSync(filePath),
});

contextBridge. exposeInMainWorld("webUtils", {
getFilePath: (file) => webUtils. getPathForFile(file),
});