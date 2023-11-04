'use strict';

module.exports = {
    meta: {
        fixable: 'code',
        hasSuggestions: true,
    },

    create(context) {
        const sourceCode = context.sourceCode;
        let originText = sourceCode.text;
        const scopedImports = [];
        const npmImports = [];
        const globalImports = [];
        const localImports = [];
        let orderNum = 0;
        let flag = false;

        return {
            ImportDeclaration: (node) => {
                const importSourceStr = node.source.value;
                const importSourceArr = importSourceStr.split('/');
                const importText = sourceCode.getText(node);
                const comments = sourceCode.getCommentsBefore(node);
                const isComments = comments.length !== 0;
                const range = [isComments ? comments[0].range[0] : node.range[0], node.range[1]];
                const commentsText = !isComments
                    ? ''
                    : comments.reduce((prev, curr) => {
                          const isLine = curr.type === 'Line';
                          return (
                              prev + (isLine ? '//' : '/*') + curr.value + (isLine ? '\n' : '*/\n')
                          );
                      }, '');

                const importObj = {
                    text: commentsText + importText,
                    source: importSourceStr,
                    range: range,
                    order: orderNum++,
                };

                if (importSourceStr.startsWith('@')) scopedImports.push(importObj);
                else if (importSourceArr.includes('.')) localImports.push(importObj);
                else if (importSourceArr.includes('..')) globalImports.push(importObj);
                else npmImports.push(importObj);
            },

            onCodePathEnd: function (codePath, node) {
                if (flag) return;
                flag = true;
                // ReturnStatement: function (node) {
                let isSorted = true;

                const allImports = [
                    ...scopedImports,
                    ...npmImports,
                    ...globalImports,
                    ...localImports,
                ].sort((a, b) => a.order - b.order);

                originText = allImports.reverse().reduce((prev, curr) => {
                    const breakLines = JSON.stringify(prev.slice(curr.range[1], curr.range[1] + 2));

                    return (
                        prev.slice(0, curr.range[0]) +
                        prev.slice(curr.range[1] + (breakLines === JSON.stringify('\n\n') ? 2 : 1))
                    );
                }, originText);

                const sortedCode = [
                    scopedImports
                        .sort((a, b) => a.source.localeCompare(b.source))
                        .map((imp) => imp.text)
                        .join('\n'),
                    npmImports
                        .sort((a, b) => a.source.localeCompare(b.source))
                        .map((imp) => imp.text)
                        .join('\n'),
                    globalImports
                        .sort((a, b) => a.source.localeCompare(b.source))
                        .map((imp) => imp.text)
                        .join('\n'),
                    localImports
                        .sort((a, b) => a.source.localeCompare(b.source))
                        .map((imp) => imp.text)
                        .join('\n'),
                ]
                    .filter((v) => v !== '')
                    .join('\n\n');

                const finalCode = sortedCode + (originText === '' ? '' : '\n\n') + originText;

                if (finalCode !== sourceCode.text) isSorted = false;
                console.log('!!!', originText);

                if (!isSorted) {
                    context.report({
                        node: node,
                        message: 'Not sorted!',
                        suggest: [
                            {
                                desc: 'Sort',
                                fix: function (fixer) {
                                    return fixer.replaceTextRange([0, 10000], finalCode);
                                },
                            },
                        ],
                        // fix(fixer) {
                        //     return fixer.replaceTextRange([0, 1000], finalCode);
                        // },
                    });
                    return false;
                }

                return true;
            },
        };
    },
};
