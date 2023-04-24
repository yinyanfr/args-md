type ValueOf<T> = T[keyof T];

declare namespace ArgsHelp {
  interface Command {
    name: string;
    description: string;
    aliases?: string[];
  }

  interface Option {
    name: string;
    description: string;
  }

  interface Example {
    usage: string;
    description: string;
  }

  interface Root {
    commands?: Command[];
    options?: Option[];
    examples?: Example[];
  }
}
