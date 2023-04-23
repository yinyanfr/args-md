import readline from "node:readline";
import process from "node:process";

/**
 * Prompts the user for input from standard input and resolves with an array of strings representing the user's input.
 * @returns {Promise<string[]|undefined>} A promise that resolves with an array of strings representing the user's input, or undefined if no input was provided.
 */
export function getHelpFromPipeline(): Promise<string[] | undefined> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      terminal: false,
    });
    const contents: string[] = [];
    rl.on("line", (content) => {
      contents.push(content);
    });
    rl.on("close", () => {
      resolve(contents);
    });
  });
}
