module.exports = {
    rules: {
        'arrow-body-style': ["error", "as-needed"],
        indent: ['error', 2, {
            ArrayExpression: 1,
            CallExpression: {
                arguments: 1
            },
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            // MemberExpression: null,
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            ImportDeclaration: 1,
            MemberExpression: 1,
            ObjectExpression: 1,
            SwitchCase: 1,
            VariableDeclarator: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            outerIIFEBody: 1
        }],
        'object-curly-spacing': ['error', 'always'],
        'quote-props': ['error', 'as-needed', {keywords: false, unnecessary: true, numbers: false}],
        quotes: ['error', 'single', {avoidEscape: true}],
        semi: ["error", "always"],
    }
}