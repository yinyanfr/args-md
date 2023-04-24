import fs from 'node:fs/promises';
import path from 'node:path';
import { formatHelp, parseHelpText } from '../lib';

const SEEDS = path.join(__dirname, 'seeds');

describe('Parser', () => {
  it('should parse help text', async () => {
    const rawReader = await fs.readFile(path.join(SEEDS, 'help.txt'));
    const contents = rawReader.toString().split('\n');
    const parsed = parseHelpText(contents);
    expect(parsed).toBeTruthy();

    const jsonReader = await fs.readFile(path.join(SEEDS, 'help.json'));
    const json = JSON.parse(jsonReader.toString());
    expect(parsed).toEqual(json);
  });
});

describe('Formatter', () => {
  it('should format help object', async () => {
    const rawReader = await fs.readFile(path.join(SEEDS, 'help.txt'));
    const contents = rawReader.toString().split('\n');
    const parsed = parseHelpText(contents);
    const formatted = formatHelp(parsed);
    expect(formatted).toBeTruthy();

    const mdReader = await fs.readFile(path.join(SEEDS, 'help.md'));
    const md = mdReader.toString();
    expect(formatted).toBe(md);
  });
});
