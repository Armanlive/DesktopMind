import { exec } from "child_process";

export async function automateTask(command: string): Promise<string> {
  // Example: open VSCode, launch app, etc.
  if (command.match(/open vscode/i)) {
    exec("code", (err) => {});
    return "Opening Visual Studio Code...";
  }
  // Expand for other automation as needed.
  return "Task not recognized. Try: 'Open VSCode'.";
}