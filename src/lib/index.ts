import { formatHelp } from "./formatter";
import { parseHelpText } from "./parser";
import { getHelpFromPipeline } from "./reader";

export { parseHelpText } from "./parser";
export { formatHelp } from "./formatter";

export async function main() {
  const contents = await getHelpFromPipeline();
  if (contents) {
    const help = parseHelpText(contents);
    console.log(formatHelp(help));
  }
}
