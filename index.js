module.exports = {
    extends: [
        './rules/react',
        './rules/general'
    ].map(require.resolve)
}
