## 自制vue的ui组件


### 版本

<br/>

- 1.0.4 - 『自制按钮』

<br/>


### 安装

<br/>

使用npm工具进行安装：```npm install xuanzai-ui --save```

<br/>

### 使用

<br/>

在```main.js```中引入

<br/>

```
// 全局引入
import XuanZaiUi from 'xuanzai-ui
Vue.use(XuanZaiUi)
```

```
// 局部引用
import XuanZaiUi from 'xuanzai-ui
const {button} = XuanZaiUi
Vue.use(button)
```

<br/>

```
/**
  *  title: 命名按钮(String)
  *  click: 点击回调(Funtion)
  *  defaultColor: 默认字体颜色(String)
  *  hoverColor: 悬浮后的字体颜色(String)
  *  defaultBackgroundColor: 默认背景颜色(String)
  *  hoverBackgroundColor: 悬浮后的背景颜色(String)
  *  isIcon: 是否使用Icon(String)
  *  iconType: Icon的类型，使用font-awesome图标库(String)
  *  size: 按钮大小(String (small、normal、large))
  */
  
<XZ-button title="upload" isIcon="true" :click="handleClick"></XZ-button>

```

<br/>

### 兼容性

<br/>

> IE10及以上


