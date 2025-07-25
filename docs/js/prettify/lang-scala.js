PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      ["pln", /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
      [
        "str",
        /^(?:"(?:(?:""(?:""?(?!")|[^\\"]|\\.)*"{0,3})|(?:[^"\r\n\\]|\\.)*"?))/,
        null,
        '"',
      ],
      ["lit", /^`(?:[^\r\n\\`]|\\.)*`?/, null, "`"],
      [
        "pun",
        /^[!#%&()*+,\-:;<=>?@\[\\\]^{|}~]+/,
        null,
        "!#%&()*+,-:;<=>?@[\\]^{|}~",
      ],
    ],
    [
      ["str", /^'(?:[^\r\n\\']|\\(?:'|[^\r\n']+))'/],
      ["lit", /^'[a-zA-Z_$][\w$]*(?!['$\w])/],
      [
        "kwd",
        /^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/,
      ],
      ["lit", /^(?:true|false|null|this)\b/],
      [
        "lit",
        /^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i,
      ],
      ["typ", /^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],
      ["pln", /^[$a-zA-Z_][\w$]*/],
      ["com", /^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],
      ["pun", /^(?:\.+|\/)/],
    ],
  ),
  ["scala"],
);
