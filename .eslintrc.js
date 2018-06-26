module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "max-len": [1, 120, 2, { "ignoreComments": true }],
        "prefer-destructuring": ["error", {
            "array": false,
        }]
    },
};