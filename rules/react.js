module.exports = {
    plugins: [
      'react'
    ],
    rules: {
        'react/function-component-definition': [
            2, {"namedComponents": ["arrow-function"]}
        ],
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],

    },
}