module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json"
  },
  plugins: [
    "react",
    "import",
    "unused-imports"
  ],
  rules: {
    quotes: [2, "double"],
    semi: [2, "always"],
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // 組み込みモジュール
          "external", // npmでインストールした外部ライブラリ
          "internal", // 自作モジュール
          [
            "parent",
            "sibling"
          ],
          "object",
          "type",
          "index"
        ],
        "newlines-between": "always", // グループ毎にで改行を入れる
        pathGroupsExcludedImportTypes: [
          "builtin"
        ],
        alphabetize: {
          order: "asc", // 昇順にソート
          caseInsensitive: true // 小文字大文字を区別する
        },
        pathGroups: [ // 指定した順番にソートされる
          {
            pattern: "@/components/common",
            group: "internal",
            position: "before"
          },
          {
            pattern: "@/components/hooks",
            group: "internal",
            position: "before"
          }
        ]
      }
    ]
  }
};
