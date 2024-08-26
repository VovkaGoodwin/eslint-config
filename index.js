module.exports = {
    extends: [
        './rules/react.cjs',
        './rules/general.cjs'
    ].map(require.resolve),
}
