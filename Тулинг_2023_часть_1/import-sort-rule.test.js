const rule = require('./import-sort-rule');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
});
ruleTester.run('import-sort-rule', rule, {
    valid: [
        {
            code:
                "import {connect} from 'react-redux';\n" +
                "import {compose} from 'recompose';\n" +
                "import {createSelector} from 'reselect';\n\n" +
                "import {selectDeliveryDate} from '../../selectors';\n\n" +
                "import type {ExperimentFlag} from '.';",
        },
        {
            code:
                'import { ClientBus, subscribe } from "@yandex-nirvana/bus";\n\n' +
                'import { call } from "typed-redux-saga";\n\n' +
                "import {selectDeliveryDate} from '../../selectors';\n\n" +
                "import {calcDeliveryDate} from './helpers';",
        },
    ],
    invalid: [
        // {
        //     code: `import {createSelector} from 'reselect';
        //     import type {ExperimentFlag} from '.';
        //     import {compose} from 'recompose';
        //     import {connect} from 'react-redux';
        //     import {selectDeliveryDate} from '../../selectors';`,
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         "import {connect} from 'react-redux';\n" +
        //                         "import {compose} from 'recompose';\n" +
        //                         "import {createSelector} from 'reselect';\n\n" +
        //                         "import {selectDeliveryDate} from '../../selectors';\n\n" +
        //                         "import type {ExperimentFlag} from '.';",
        //                 },
        //             ],
        //         },
        //     ],
        // },
        {
            code:
                "import fs from 'fs';\n" +
                "import path from 'path';\n\n" +
                "import _ from 'lodash';",
            errors: [
                {
                    type: 'Program',
                    message: 'Not sorted!',
                    suggestions: [
                        {
                            output:
                                "import fs from 'fs';\n" +
                                "import _ from 'lodash';\n" +
                                "import path from 'path';",
                        },
                    ],
                },
            ],
        },
        // {
        //     code:
        //         "import type {ExperimentFlag} from '.';\n" +
        //         "import {selectDeliveryDate} from '../../selectors';",
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         "import {selectDeliveryDate} from '../../selectors';\n\n" +
        //                         "import type {ExperimentFlag} from '.';",
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     code:
        //         "import {selectDeliveryDate} from '../../selectors';\n" +
        //         "import {calcDeliveryDate} from './helpers';\n" +
        //         "import type {ExperimentFlag} from '.';",
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         "import {selectDeliveryDate} from '../../selectors';\n\n" +
        //                         "import type {ExperimentFlag} from '.';\n" +
        //                         "import {calcDeliveryDate} from './helpers';",
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     code:
        //         'import { call } from "typed-redux-saga";\n' +
        //         'import { ClientBus, subscribe } from "@yandex-nirvana/bus";',
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         'import { ClientBus, subscribe } from "@yandex-nirvana/bus";\n\n' +
        //                         'import { call } from "typed-redux-saga";',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     code:
        //         'import { pluralize } from "../../../../lib/utils";\n\n' +
        //         'import { call } from "typed-redux-saga";',
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         'import { call } from "typed-redux-saga";\n\n' +
        //                         'import { pluralize } from "../../../../lib/utils";',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     code:
        //         "import fs from 'fs';\n" +
        //         'const dynamic = import("my-dynamic-import");\n' +
        //         "import _ from 'lodash';\n" +
        //         "import path from 'path';\n",
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         "import fs from 'fs';\n" +
        //                         "import _ from 'lodash';\n" +
        //                         "import path from 'path';\n\n" +
        //                         'const dynamic = import("my-dynamic-import");\n',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     code:
        //         'import {relative} from "../../relative-package";\n\n' +
        //         '// This module is imported for commons good\n' +
        //         'import * as lodash from "lodash";',
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         '// This module is imported for commons good\n' +
        //                         'import * as lodash from "lodash";\n\n' +
        //                         'import {relative} from "../../relative-package";',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     code:
        //         'import {relative} from "../../relative-package";\n\n' +
        //         '/**\n' +
        //         ' * This module is imported\n' +
        //         ' * for commons good\n' +
        //         ' */\n' +
        //         'import * as lodash from "lodash";',
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         '/**\n' +
        //                         ' * This module is imported\n' +
        //                         ' * for commons good\n' +
        //                         ' */\n' +
        //                         'import * as lodash from "lodash";\n\n' +
        //                         'import {relative} from "../../relative-package";',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     code:
        //         '// This module is imported for commons good\n' +
        //         '// This module is imported for commons good\n' +
        //         '// This module is imported for commons good\n' +
        //         'import {relative} from "../../relative-package";\n' +
        //         'import * as lodash from "lodash";',
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         'import * as lodash from "lodash";\n\n' +
        //                         '// This module is imported for commons good\n' +
        //                         '// This module is imported for commons good\n' +
        //                         '// This module is imported for commons good\n' +
        //                         'import {relative} from "../../relative-package";',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     code:
        //         "import _ from 'lodash';\n\n" +
        //         "import fs from 'fs';\n\n" +
        //         "import path from 'path';\n\n" +
        //         'if(true) {\n' +
        //         '  const dynamic = import("my-dynamic-import");\n' +
        //         '  const dynamic2 = import("my-dynamic-import2");\n' +
        //         '}',
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         "import fs from 'fs';\n" +
        //                         "import _ from 'lodash';\n" +
        //                         "import path from 'path';\n\n" +
        //                         'if(true) {\n' +
        //                         '  const dynamic = import("my-dynamic-import");\n' +
        //                         '  const dynamic2 = import("my-dynamic-import2");\n' +
        //                         '}',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     code:
        //         "import _ from 'lodash';\n\n" +
        //         "import fs from 'fs';\n\n" +
        //         "import path from 'path';\n\n" +
        //         'async function test() {\n' +
        //         '  if(true) {\n' +
        //         '    const dynamic = await import("b");\n' +
        //         '  }\n' +
        //         '}\n\n' +
        //         'async function main() {\n' +
        //         '  await test();\n' +
        //         '  for (let i = 0; i < 10; i++) {\n' +
        //         '    console.log("some code here");\n' +
        //         '  }\n' +
        //         '}',
        //     errors: [
        //         {
        //             type: 'Program',
        //             message: 'Not sorted!',
        //             suggestions: [
        //                 {
        //                     output:
        //                         "import fs from 'fs';\n" +
        //                         "import _ from 'lodash';\n" +
        //                         "import path from 'path';\n\n" +
        //                         'if(true) {\n' +
        //                         '  const dynamic = import("my-dynamic-import");\n' +
        //                         '  const dynamic2 = import("my-dynamic-import2");\n' +
        //                         '}',
        //                 },
        //             ],
        //         },
        //     ],
        // },
    ],
});
