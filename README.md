## 自制vue的ui组件


### 版本

<br/>

- 1.0.4 - 『自制按钮』

<br/>


### 安装

<br/>

```npm install xuanzai-ui --save```

```import XuanZaiUi from 'xuanzai-ui'```

全局引用 ``` Vue.use(XuanZaiUi)```

局部引用 ```let {button} = XuanZaiUi```

        ```Vue.use(button)```

<br/>

### 使用

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
  *  size: 按钮大小(small、normal、large)
  */
  
<XZ-button :title="upload" isIcon="true"></XZ-button>

```

<br/>

### 兼容性

<br/>

> IE10及以上


