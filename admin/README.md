### 安装react相关
```text
npm install react react-dom redux react-redux redux-actions --save
```

### 安装react typings文件
```text
npm install @types/react @types/react-dom @types/redux @types/react-redux @types/redux-actions --save-dev
```

### 安装webpack
```text
npm install webpack webpack-dev-server webpack-merge webpack-bundle-analyzer --save-dev
```

### 安装typescript
```text
npm install typescript ts-loader --save-dev
```

### 安装scss
```text
npm install node-sass sass-loader postcss-loader css-loader style-loader --save-dev
```

### 安装babel
```text
npm install babel-core babel-loader babel-plugin-import babel-plugin-syntax-dynamic-import babel-preset-env babel-preset-es2015 babel-preset-react babel-preset-stage-0 --save-dev
```

* babel-plugin-import:按需加载插件，只需要引入模板即可，无需单独引入样式。如果webpack配置文件添加了vendor库，babel-plugin-import将不会工作
* babel-plugin-syntax-dynamic-import:与babel-plugin-import作用类似

### 安装第三方库
```text
npm install jquery antd --save
```

### 安装其他loader
```text
npm install url-loader file-loader react-hot-loader --save-dev
```