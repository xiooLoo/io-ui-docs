// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'eqeqeq': [ 0, 'allow-null' ], /**要求使用 === 和 !== */
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', /**禁用 debugger */
    'quotes': [ 'error', 'single' ], /**要求使用单引号 */
    'linebreak-style': [ 0, 'error', 'windows' ], /**强制使用一致的换行风格 */
    'no-use-before-define': [ 'error', {
      'functions': true,
      'classes': true
    } ], /**禁止在变量定义之前使用它们 */
    'no-param-reassign': [ 'error', { 'props': false } ], /**禁止对 function 的参数进行重新赋值 */
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', /**禁用 console */
    //TODO:
    'comma-dangle': [ 'error', 'never' ], /**禁止使用拖尾逗号 */
    'indent': [ 'error', 2 ], /**2个空格缩进 */
    'max-len': [ 'error', { 'code': 1000 } ], /**强制一行的最大长度1000 */
    'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ], /**使用 空格 和 tab 混合缩进 */
    'no-ternary': 'off', /**允许使用三元表达式 */
    'no-nested-ternary': 'off', /**允许使用嵌套的三元表达式 */
    'prefer-template': 'error', /**建议使用模板字面量而非字符串‘+’拼接 */
    'arrow-parens': [ 'error', 'as-needed' ], /**必要时，要求箭头函数的参数使用圆括号 */
    'arrow-spacing': 'error', /**箭头函数的箭头之前或之后要有空格 */
    'require-await': 'off', /**禁止使用不带 await 表达式的 async 函数 */
    // TODO:
    'array-bracket-spacing': [ 'error', 'never' ], /**方括号内部两侧无空格 */
    'no-trailing-spaces': 'error', /**禁止使用行尾空白 */
    'no-const-assign': 'error', /**不允许改变用const声明的变量 */
    'no-this-before-super': 'error', /**在构造函数中禁止在调用super()之前使用this或super 【大多用于React中类的继承】*/
    'no-useless-rename': 'error', /**禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字 */
    'template-curly-spacing': [ 'error', 'always' ], /**模板字符串中,花括号内要有一个或多个空格 */
    'newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 3 } ], /**要求方法链中每3个调用必须有一个换行符 */
    'no-lonely-if': 'error', /**禁止 if 语句作为唯一语句出现在 else 语句块中 */
    'no-mixed-operators': 'error', /**禁止混合使用不同的操作符，如错误用法:let foo = a && b || c || d; */
    'no-whitespace-before-property': 'error', /**禁止属性前有空白 */
    'wrap-regex': 'error', /**要求正则表达式要被小括号()包裹起来 */
    'eol-last': [ 'error', 'always' ], /**要求文件末尾须保留一行空行 */
    'require-await': 'error', /**禁止使用不带 await 表达式的 async 函数 */
    'no-redeclare': 'error', /**不要重复声明变量和函数 */
    'no-multi-spaces': 'error', /**禁止出现多个空格 */
    'no-unreachable': 'error', /**禁止在 return、throw、continue 和 break 语句后出现不可达代码 */
    'vue/max-attributes-per-line': [ 'error', {
      'singleline': 4,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    } ], /**dom标签同行最多写4个属性，超过后须换行；换行后的属性，同行最多写1个属性 */
    'vue/singleline-html-element-content-newline': 'off', /**空标签换行||不换行都可以 */
    'vue/name-property-casing': [0, 'PascalCase' | 'kebab-case'], /**属性首字母大小写不限 */
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-tabs': 'error', /**不允许Tab缩进标签 */
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }], /**统一使用分号结束语句 */
    'no-unexpected-multiline': 'error', /**避免意外的多行表达式 */
    'no-extra-semi': 'error', /**禁用不必要的分号 */
    'semi-style': ['error', 'last'], /**分号必须写在行尾 */
    'comma-style': ['error', 'last'], /**用逗号分隔的多行结构，将逗号放到行尾 */
    'brace-style': ['error'], /**大括号换行采用 1TBS 风格,具体如：
                              左大括号 { 前面不换行，后面换行；
                              右大括号 } 前面换行；
                              右大括号 } 后面是否换行有两种情况：
                                如果 } 终结了整个语句，如条件语句、函数或类的主体，则需要换行
                                如果 } 后面存在 else、catch、while 等语句，或存在逗号、分号、右小括号（)），则不需要换行、
                            */
    'nonblock-statement-body-position': ['error', 'beside'], /**省略大括号的单行语句前不要换行 */
    'dot-location': ['error', 'property'], /**在点号之前换行 */
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 4 }], /**在长方法链式调用时进行换行，最多一行存在4个 */
    // TODO:
    'function-paren-newline': ['error', 'multiline'], /**函数的小括号需遵循一致的换行风格 */
    'implicit-arrow-linebreak': ['error', 'beside'], /**隐式返回的箭头函数体前不要换行 */
    'space-before-blocks': 'error', /**空格风格... */
    'keyword-spacing': ['error', { 'before': true }], /**控制语句的关键字，如 if、else、else if 等，前后各一个空格 */
    'func-call-spacing': ['error', 'never'], /**函数名与调用它的括号间无空格 */
    'space-before-function-paren': ['error', {
      'anonymous': 'ignore',
      'named': 'never',
      'asyncArrow': 'never'
    }], /**声明函数时，对于命名函数，参数的小括号前无空格；对于匿名函数和 async 箭头函数，参数的小括号前有空格 */
    'space-in-parens': ['error', 'never'], /**小括号内部两侧无空格 */
    'computed-property-spacing': ['error', 'never'], /**不允许括号和括号内的值之间有空格 */
    'block-spacing': 'error', /**在同一行上的开放块标记和下一个标记内保持一致的间距 */
    // TODO:
    'template-curly-spacing': 'error', /**模板字符串中的大括号，内部两侧无空格 */
    'template-tag-spacing': 'error', /**模板字符串的 tag 语法，tag 后面无空格 */
    'space-infix-ops': 'error', /**操作符两侧有空格 */
    'space-unary-ops': 'error', /**一元运算符之后/之前的空格保持一致 */
    'rest-spread-spacing': ['error', 'never'], /**强制rest和spread运算符及其表达式之间保持一致的间距 */
    'semi-spacing': 'error', /**分号的前面无空格，后面有空格（语句末尾的分号后面无空格） */
    'comma-spacing': ['error', { 'before': false, 'after': true }], /**逗号的前面无空格，后面有空格 */
    'key-spacing': ['error', { 'beforeColon': false }], /**key, value 之间有且只有一个空格，不允许所谓的「水平对齐」 */
    'padded-blocks': ['error', 'never'], /**块的开始和结束不能是空行 */
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }], /**禁止出现多个（大于 2 个）连续空行, 在文件末尾强制执行最大数量为2行的连续空行 */
    'curly': ['error'], /**多行语句必须用大括号包裹，单行语句推荐用大括号包裹 */
    'no-floating-decimal': 'error', /**不要省略小数点前或小数点后的 0 */
    'no-undef': ['off', { 'typeof': true }], /**不要使用未声明的变量... */
    'no-var': 'error', /**使用 const 或 let 声明变量，不要使用 var */
    'prefer-const': 'off', /**正确地使用 const 和 let，(声明变量时，应优先使用 const，只有当变量会被重新赋值时才使用 let) */
    'no-unused-vars': 'error', /**声明的变量必须被使用 */
    'no-shadow': ['error', { 'hoist': 'never' }], /**禁止变量与外层作用域已存在的变量同名 */
    'no-multi-assign': 'error', /**禁止连续赋值 */
    'no-shadow-restricted-names': 'error', /**禁止使用保留字命名变量 */
    'no-undef-init': 'error', /**不要将变量初始化成 undefined */
    'no-class-assign': 'error', /**禁止对类声明变量重新赋值 */
    'no-const-assign': 'error', /**禁止修改 const 声明的变量 */
    'use-isnan': 'error', /**不允许与“NaN”进行比较 */
    'valid-typeof': ['error', { 'requireStringLiterals': true }], /**同 typeof 表达式结果进行比较的值必须是有效的字符串 */
    'no-multi-str': 'error', /**禁止使用多行字符串 */
    'no-octal': 'error', /**禁用八进制字面量 */
    'no-octal-escape': 'error', /**禁止在字符串字面量中使用八进制转义序列 */
    'no-useless-concat': 'error', /**禁止不必要的字符串拼接 */
    'no-array-constructor': 'error', /**使用字面量创建数组 */
    'no-sparse-arrays': 'error', /**禁用稀疏数组 */
    'no-new-object': 'error', /**使用字面量创建对象 */
    'object-shorthand': [0, 'consistent'], /**[待定...]使用对象属性和方法的简写语法 */
    'quote-props': ['error', 'as-needed'], /**对象字面量的属性名不要用引号包裹，除非包含特殊字符 */
    'no-prototype-builtins': 'error', /**不要直接在对象上调用 Object.prototypes 上的方法 */
    'no-dupe-keys': 'error', /**对象中禁止出现重复命名的 key */
    'no-obj-calls': 'error', /**禁止将全局对象 Math、JSON、Reflect 当作函数进行调用 */
    'no-empty-pattern': 'error', /**不要在解构中出现空模式 */
    'no-useless-computed-key': 'error', /**对象的属性名不要使用无必要的计算属性 */
    'no-useless-rename': 'error', /**禁止在解构 / import / export时进行无用的重命名 */
    'wrap-iife': ['error', 'outside'], /**立即执行函数表达式（IIFE）需要用小括号包裹 */
    'no-func-assign': 'error', /**不要对函数声明重新赋值 */
    'no-useless-return': 'error', /**禁止多余的 return; 语句 */
    'no-confusing-arrow': 'error', /**避免箭头函数可能与比较操作符产生混淆的情况 */
    'no-duplicate-imports': ['error', { 'includeExports': true }], /**不要用多个 import 引入同一模块 */
    'no-unneeded-ternary': 'error', /**避免不必要的三元表达式 */
    'no-fallthrough': 'error', /**不要让 case 语句落空 */
    'no-empty': 'error', /**不要出现空代码块 */
    'no-duplicate-case': 'error', /**switch 语句中禁止出现重复的 case */
    'no-eval': 'error', /**禁止使用 eval,eval 语句存在安全风险，可能导致注入攻击 */
    'spaced-comment': ['error', 'always'], /**注释内容和注释符之间需留有一个空格 */
    'no-global-assign': 'error', /**禁止对原生对象或只读的全局对象进行赋值 */
    'no-invalid-regexp': 'error', /**禁止在 RegExp 构造函数中使用无效的正则表达式 */
    'no-regex-spaces': 'error', /**禁止在正则表达式中出现多个连续空格 */
    'no-proto': 'error', /**禁止使用 proto 属性 */
    'no-script-url': 'error', /**禁止使用 javascript:url，避免脚本恶意注入 */
    'no-delete-var': 'error', /**禁止 delete 变量 */
  }
}
