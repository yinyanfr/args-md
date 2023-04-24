# args-md

[![npm](https://img.shields.io/npm/v/args-md.svg?style=flat-square)](https://www.npmjs.com/package/args-md)
[![license](https://img.shields.io/npm/l/args-md.svg?style=flat-square)](https://github.com/yinyanfr/args-md/blob/main/LICENSE)
![size](https://img.shields.io/github/repo-size/yinyanfr/args-md?style=flat-square)
[![GitHub release](https://img.shields.io/github/release/yinyanfr/args-md.svg?style=flat-square)](https://github.com/yinyanfr/args-md/releases/latest)

[English](https://github.com/yinyanfr/args-md/blob/main/README.md) | 简体中文

这个 CLI 工具可以将 [args](https://www.npmjs.com/package/args) 的帮助信息输出为 markdown。

## :green_book: 快速开始

### :wrench: CLI

```bash
your_cli help | npx args-md > cli.md
```

[演示](https://github.com/yinyanfr/args-md/blob/main/src/tests/seeds/help.md)

### :book: 库

```typescript
import { parseHelp, formatHelp } from 'args-md';

// 将帮助文本按行分组，形成字符串数组
const contents: string[] = [];

const help = parseHelp(contents);

const md = formatHelp(contents);
```

`help` 的类型定义详见 [`src/global.d.ts`](https://github.com/yinyanfr/args-md/blob/main/src/global.d.ts).
