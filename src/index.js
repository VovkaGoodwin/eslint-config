module.exports = {
    extends: [
        './rules/general',
        './rules/react',
    ].map(require.resolve),
    plugins: [
      'react'
    ],
    rules: {}
}