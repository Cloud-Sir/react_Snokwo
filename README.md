# 技术栈
> - react
  - react-router-dom   路由
  - prop-types         定义外部数据类型
  - redux              公共管理状态
  - react-redux        redux辅助工具，解决：频繁的引入store和dispatcher
                                            UI组件和容器组件的拆分
                                            每个组件都需要进行事件的订阅
  - redux-thunk        处理action异步
  - styled-components  react css私有化
  - whatwg-fetch       前后端数据交互
  - react-loadable     路由懒加载
  - 高阶组件         
  - redux-actions      
  - qs                 处理fetch Post请求参数不能转为字面量问题
  - antd-mobile        react的一个UI框架
  - js-cookie          直接处理cookie

`yarn add react-router-dom prop-types redux react-redux redux-thunk styled-components whatwg-fetch react-loadable redux-actions qs antd-mobile js-cookie`

# 环境搭建所需要的配置
> 环境搭建 `create-react-app`

**所需要的配置**
    - http-proxy-middleware
    - react-app-rewired
    - customize-cra
    - babel-plugin-import
    - @babel/plugin-proposal-decorators 
    - react-scripts 
    - @babel/plugin-syntax-jsx

`yarn add http-proxy-middleware react-app-rewired customize-cra babel-plugin-import @babel/plugin-proposal-decorators react-scripts @babel/plugin-syntax-jsx --dev`

# 调试工具

> redux-devtools-extension

`yarn add redux-devtools-extension`