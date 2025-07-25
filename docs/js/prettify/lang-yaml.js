PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      ["pun", /^[:|>?]+/, null, ":|>?"],
      ["dec", /^%(?:YAML|TAG)[^#\r\n]+/, null, "%"],
      ["typ", /^[&]\S+/, null, "&"],
      ["typ", /^!\S*/, null, "!"],
      ["str", /^"(?:[^\\"]|\\.)*(?:"|$)/, null, '"'],
      ["str", /^'(?:[^']|'')*(?:'|$)/, null, "'"],
      ["com", /^#[^\r\n]*/, null, "#"],
      ["pln", /^\s+/, null, " \t\r\n"],
    ],
    [
      ["dec", /^(?:---|\.\.\.)(?:[\r\n]|$)/],
      ["pun", /^-/],
      ["kwd", /^\w+:[ \r\n]/],
      ["pln", /^\w+/],
    ],
  ),
  ["yaml", "yml"],
);
