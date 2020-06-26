# fed-e-task-02-02

### 一、简答题
#### 1、Webpack 构建运行在 node.js 环境下，它的配置文件遵循 CommonJS 规范， webpack.config.js 导出一个 Object 对象（或者导出一个 Function，或者导出一个 Promise 函数，还可以导出一个数组包含多份配置）。 Webpack 从入口文件开始，识别出源码中的模块化导入语句，递归地找出所有依赖，然后把入口文件和所有依赖打包到一个单独的文件中（即一个 chunk)，这就是所谓的模块打包。 Webpack 在启动后，会从 Entry 开始，递归解析 Entry 依赖的所有 Module，每找到一个 Module，就会根据 Module.rules 里配置的 Loader 规则进行相应的转换处理，对 Module 进行转换后，再解析出当前 Module 依赖的 Module，这些 Module 会以 Entry 为单位进行分组，即为一个 Chunk。因此一个 Chunk，就是一个 Entry 及其所有依赖的 Module 合并的结果。最后 Webpack 会将所有的 Chunk 转换成文件输出 Output。在整个构建流程中， Webpack 会在恰当的时机执行 Plugin 里定义的逻辑，从而完成 Plugin 插件的优化任务。
#### 2、Loader用于对模块文件进行编译转换和加载处理，在 module.rules 数组中进行配置，它用于告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。 Loader 还可以通过 querystring 或 object 指定选项参数。Plugin 用于扩展 Webpack 功能，实现原理是在构建流程里注入钩子函数，在 plugins 数组中进行配置
        