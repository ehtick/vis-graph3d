PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      ["pln", /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
      [
        "str",
        /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/,
        null,
        "\"'",
      ],
    ],
    [
      ["com", /^--(?:\[(=*)\[[\s\S]*?(?:\]\1\]|$)|[^\r\n]*)/],
      ["str", /^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],
      [
        "kwd",
        /^(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
        null,
      ],
      [
        "lit",
        /^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i,
      ],
      ["pln", /^[a-z_]\w*/i],
      ["pun", /^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/],
    ],
  ),
  ["lua"],
);
