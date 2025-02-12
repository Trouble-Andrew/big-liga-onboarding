module.exports = {
  extends: ['htmlacademy/es6',
    "prettier"],
  rules: {
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }],
    'quotes': ['error', 'single'],
  },
};
