interface NoAccents {
  normalize: (part: string) => string;
  has: (part: string) => boolean;
}

declare const dm: NoAccents;
export = dm;
