import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#222222",
    webPreferences: {
      preload: path.join(__dirname, "dist/preload.js"),
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadFile("public/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});