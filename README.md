# args-md

[![npm](https://img.shields.io/npm/v/args-md.svg?style=flat-square)](https://www.npmjs.com/package/args-md)
[![license](https://img.shields.io/npm/v/args-md.svg?style=flat-square)](https://github.com/yinyanfr/args-md/blob/main/LICENSE)
![size](https://img.shields.io/github/repo-size/yinyanfr/args-md?style=flat-square)
[![GitHub release](https://img.shields.io/github/release/yinyanfr/args-md.svg?style=flat-square)](https://github.com/yinyanfr/args-md/releases/latest)

The CLI tool that output the help message of [args](https://www.npmjs.com/package/args) as markdown.

## :green_book: Quick Start

### :wrench: CLI

```bash
your_cli help | npx args-md
```

### :book: Library

```typescript
import { parseHelp, formatHelp } from "args-md";

// the array of string of the help text grouped by line
const contents: string[] = [];

const help = parseHelp(contents);

// TODO
```
