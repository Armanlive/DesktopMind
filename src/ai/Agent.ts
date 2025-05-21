import { observeDesktop, getErrorsFromScreen } from "./screenObserver";
import { suggestDebugging } from "./debugger";
import { automateTask } from "./automation";
import { communicate } from "../interface/communicate";

export type AgentConfig = {
  llmApiKey: string;
  enableVoice?: boolean;
};

export class AiAgent {
  config: AgentConfig;

  constructor(config: AgentConfig) {
    this.config = config;
  }

  async detectErrors() {
    const screenData = await observeDesktop();
    const errors = await getErrorsFromScreen(screenData);
    return errors;
  }

  async getDebuggingSuggestions(error: string) {
    return await suggestDebugging(error, this.config.llmApiKey);
  }

  async runAutomation(command: string) {
    return await automateTask(command);
  }

  async interact(input: string) {
    if (input.match(/error|bug|exception/i)) {
      const errors = await this.detectErrors();
      if (errors.length) {
        const suggestions = await this.getDebuggingSuggestions(errors[0]);
        return communicate(
          `Detected error: ${errors[0]}\nSuggestion: ${suggestions}`
        );
      }
      return communicate("No coding errors detected on the screen.");
    }
    if (input.match(/open|launch|move|delete|copy/i)) {
      const result = await this.runAutomation(input);
      return communicate(result);
    }
    return communicate("How can I assist you? (e.g., 'Find errors', 'Open VSCode')");
  }
}
