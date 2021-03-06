module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    browser: true,
    es6: true,
    mocha: true,
    jest: true
  },
  plugins: ["react", "@typescript-eslint", "import", "prettier", "react-hooks"],
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  globals: {
    document: true,
    window: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "arrow-body-style": "warn",
    "import/extensions": "off",
    "no-nested-ternary": "off",
    "no-sparse-arrays": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-onchange": "off",
    "react/display-name": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": ["warn", { singleQuote: true, trailingComma: "all" }],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"]
      }
    ],
    "react/jsx-wrap-multilines": ["error", { prop: "ignore" }],
    "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }]
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: [
    "node_modules/",
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.min.js",
    "**/*.min.jsx",
    "src/serviceWorker.ts",
    "src/react-app-env.d.ts",
    "build/",
    "dist/",
    "public/"
  ]
};
