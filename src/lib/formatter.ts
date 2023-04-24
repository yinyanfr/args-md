import prettier from 'prettier';

const mdOptions = {
  h: 2,
};

function generateTitle(h: number, title: string) {
  return `${new Array(h).fill('#').join('')} ${title}`;
}

function formatCommands(commands: ArgsHelp.Command[]) {
  const lines: string[] = [generateTitle(mdOptions.h + 1, 'Commands')];
  commands.forEach(command => {
    const { name, aliases, description } = command;
    lines.push(generateTitle(mdOptions.h + 2, name));
    if (aliases?.length) {
      lines.push(`\`${aliases.join(', ')}\``);
    }
    lines.push('');
    lines.push(description);
  });
  return lines;
}

function formatOptions(options: ArgsHelp.Option[]) {
  const lines: string[] = [generateTitle(mdOptions.h + 1, 'Options')];
  options.forEach(option => {
    const { name, description } = option;
    lines.push(`- \`${name}\``);
    lines.push('');
    lines.push(description);
  });
  return lines;
}

function formatExamples(examples: ArgsHelp.Example[]) {
  const lines: string[] = [generateTitle(mdOptions.h + 1, 'Examples')];
  examples.forEach(example => {
    const { usage, description } = example;
    lines.push(`- ${usage}`);
    lines.push(`\`\`\`bash\n${description}\n\`\`\``);
  });
  return lines;
}

const FORMATTERS: Record<keyof ArgsHelp.Root, (section: any) => string[]> = {
  commands: formatCommands,
  options: formatOptions,
  examples: formatExamples,
};

/**
 * Format the help object as a markdown string.
 * @param {ArgsHelp.Root} help - The help object.
 * @returns {string} The formatted markdown string.
 */
export function formatHelp(help: ArgsHelp.Root): string {
  const sections: string[][] = [[generateTitle(mdOptions.h, ':wrench: CLI')]];
  Object.keys(help).forEach(key => {
    sections.push(
      FORMATTERS[key as keyof ArgsHelp.Root](help[key as keyof ArgsHelp.Root]),
    );
  });
  const md = sections.flat().join('\n');
  return prettier.format(md, { parser: 'markdown' });
}
