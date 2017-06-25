module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": [1, "only-multiline"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "linebreak-style": 0,
    "max-len": 0,
    "react/jsx-max-props-per-line": 0
   },
   "settings": {
     "import/resolver": {
       "webpack": {
         "config": "./config/webpack.config.dev.js"
       }
     }
   }
};
