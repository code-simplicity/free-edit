module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json', "tsconfig.node.json"],
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    "no-unused-vars": "warn",
    "no-debugger": "warn",
    "semi": "warn",
    "use-isnan": "warn", // 使用isNaN检测NaN
    "eqeqeq": "error", // 强制类型比较 === || !==
    "comma-style": "warn", // 强制使用一致的逗号风格
    "jsx-quotes": "warn", // 强制在 JSX 属性中一致地使用双引号或单引号
    "quotes": "warn", // 强制使用一致的反勾号、双引号或单引号
    "no-console": "warn", // 出现console警告
  },
};
