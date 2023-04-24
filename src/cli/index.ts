#!/usr/bin/env node

import { getHelpFromPipeline, parseHelpText, formatHelp } from '../lib';

getHelpFromPipeline()
  .then(contents => {
    if (contents) {
      const help = parseHelpText(contents);
      const md = formatHelp(help);
      console.log(md);
    } else {
      throw new Error(
        'No contents, please pipe your cli: your_cli help | npx args-md',
      );
    }
  })
  .catch(error => {
    console.error(error);
  });
