# args-md

[![npm](https://img.shields.io/npm/v/args-md.svg?style=flat-square)](https://www.npmjs.com/package/args-md)
[![license](https://img.shields.io/npm/l/args-md.svg?style=flat-square)](https://github.com/yinyanfr/args-md/blob/main/LICENSE)
![size](https://img.shields.io/github/repo-size/yinyanfr/args-md?style=flat-square)
[![GitHub release](https://img.shields.io/github/release/yinyanfr/args-md.svg?style=flat-square)](https://github.com/yinyanfr/args-md/releases/latest)

English | [简体中文](https://github.com/yinyanfr/args-md/blob/main/README.zh-Hans.md)

The CLI tool that output the help message of [args](https://www.npmjs.com/package/args) as markdown.

## :green_book: Quick Start

### :wrench: CLI

```bash
your_cli help | npx args-md > cli.md
```

[Demo](https://github.com/yinyanfr/args-md/blob/main/src/tests/seeds/help.md)

### :book: Library

```typescript
import { parseHelp, formatHelp } from 'args-md';

// the array of string of the help text grouped by line
const contents: string[] = [];

const help = parseHelp(contents);

const md = formatHelp(contents);
```

You can find the type definitions of `help` in [`src/global.d.ts`](https://github.com/yinyanfr/args-md/blob/main/src/global.d.ts).
