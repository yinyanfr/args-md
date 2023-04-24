function splitArray<T>(array: T[], predicate: (element: T) => any): T[][] {
  const splitted: T[][] = [];
  let segment = 0;
  array.forEach((e, i) => {
    if (predicate(e)) {
      splitted.push(array.slice(segment, i));
      segment = i + 1;
    }
  });
  return splitted;
}

function parseCommands(raw: string[]): ArgsHelp.Command[] {
  const commands: ArgsHelp.Command[] = [];
  raw
    .slice(1)
    .map(e => e.replace(/^ +/, ''))
    .forEach(e => {
      // chapter, c, ch    Download images from one chapter.
      const match = e.match(/^(([\w]+,\s)*[\w]+)\s+(.+)$/);
      if (match) {
        const [, names, , description] = match;
        const aliases = names.split(/, /g);
        const name = aliases.shift() as string;
        commands.push({ name, description, aliases });
      }
    });
  return commands;
}

function parseOptions(raw: string[]): ArgsHelp.Option[] {
  const options: ArgsHelp.Option[] = [];
  raw
    .slice(1)
    .map(e => e.replace(/^ +/, ''))
    .forEach(e => {
      // -a, --archive           Optional: Output zip or cbz archive grouped by chapters.
      const match = e.match(/^(-[\w](, --[\w-]+)?)\s*\s*(.*)$/);
      if (match) {
        const [, name, , description] = match;
        options.push({ name, description });
      }
    });
  return options;
}

function parseExamples(raw: string[]): ArgsHelp.Example[] {
  const examples: ArgsHelp.Example[] = [];
  splitArray(raw.slice(1), e => !e.length).forEach(e => {
    const usage = e[0].replace(/^ +- /, '');
    const description = e[1].replace(/^ +/, '');
    examples.push({ usage, description });
  });
  return examples;
}

function detectSection(raw: string[]): keyof ArgsHelp.Root | undefined {
  const match = raw[0].match(/\w+/);
  if (match) {
    return match[0].toLocaleLowerCase() as keyof ArgsHelp.Root;
  }
}

const PARSERS: Record<
  keyof ArgsHelp.Root,
  (raw: string[]) => ValueOf<ArgsHelp.Root>
> = {
  commands: parseCommands,
  options: parseOptions,
  examples: parseExamples,
};

/**
 * Parses the help text and returns an object containing the commands, options, and examples.
 * @param {string[]} contents - The contents of the help text, split into an array of strings.
 * @returns {{commands: Command[], options: Option[], examples: Example[]}} - An object containing the parsed commands, options, and examples.
 */
export function parseHelpText(contents: string[]): ArgsHelp.Root {
  const splitted = splitArray<string>(contents, e => e.match(/^ +$/)).slice(1);

  const help: ArgsHelp.Root = {};
  splitted.forEach(e => {
    const key = detectSection(e);
    if (key) {
      help[key] = PARSERS[key](e) as any;
    }
  });
  return help;
}
