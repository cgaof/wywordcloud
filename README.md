## 说明
* 基于 js2wordcloud, wordcloud2 进行修改来满足 项目需求, 进一步使用可以 了解 js2wordcloud, wordcloud2
* 添加 图形背景 isShowBackShape 控制是否显示图形背景
* 解决 文字不清晰问题  div(包含canvas父类，设置zoom:0.5)
* 类似nuxtjs 工程中 引用图片 用 require 不然路径会用问题 例如：require('~/static/womanIcon.png')
  

## Installation


* npm安装：

```bash
npm install wywordcloud --save
```

## Usage
 ```html
  <div style="zoom:0.5" id="container"><div>
 ```

```javascript
import Wywordcloud from 'wywordcloud';
var wc = new Wywordcloud(document.getElementById('container'))
wc.setOption({
    tooltip: {
        show: true
    },
    list: [['谈笑风生', 80], ['谈笑风生', 80], ['谈笑风生', 70], ['谈笑风生', 70], ['谈笑风生', 60], ['谈笑风生', 60]],
    color: '#15a4fa'
})
```

## Features

* 支持tooltip。包括tooltip的开关和数据格式化formatter；
* 支持showLoading和hideLoading加载数据loading；
* 支持resize；
* 当词云数值相差过大时，对字体大小范围进行约束；
* 更好地支持图片形状。


## Document

### 常用参数：

（1）data：词云生成数据，包含具体词语以及频率；

（2）size：字体大小，默认为1，一般来说该值越小，生成的形状轮廓越明显；

（3）fontFamily：字体，如‘微软雅黑’；

（4）fontWeight：字体粗细，包含‘normal’，‘bold’以及‘600’；；

（5）color：字体颜色，可以选择‘random-dark’以及‘random-light’，其实就是颜色色系；

（6）backgroundColor：背景颜色，支持R语言中的常用颜色，如‘gray’，‘blcak’，但是还支持不了更加具体的颜色选择，如‘gray20’；

（7）minRontatin与maxRontatin：字体旋转角度范围的最小值以及最大值，选定后，字体会在该范围内随机旋转；

（8）rotationRation：字体旋转比例，如设定为1，则全部词语都会发生旋转；

（9）shape：词云形状选择，默认是‘circle’，即圆形。还可以选择‘cardioid’（苹果形或心形），‘star’（星形），‘diamond’（钻石），‘triangle-forward’（三角形），‘triangle’（三角形），‘pentagon’（五边形）

### API


* setOption(options)

    options必须通过此API进行设置，才能显示词云

    **在wordcloud2.js原options基础上增加：**

    ```javascript
    {
        // ...
        imageShape: 'https://example.com/images/shape.png',     // 提供一张图片，根据其形状进行词云渲染，默认为null
        fontSizeFactor: 0.1,                                    // 当词云值相差太大，可设置此值进字体行大小微调，默认0.1
        maxFontSize: 60,                                        // 最大fontSize，用来控制weightFactor，默认60
        minFontSize: 12,                                        // 最小fontSize，用来控制weightFactor，默认12
        isShowBackShape: false,                                 // 是否显示背景图形
        tooltip: {
            show: true,                                         // 默认：false
            backgroundColor: 'rgba(0, 0, 0, 0.701961)',         // 默认：'rgba(0, 0, 0, 0.701961)'
            formatter: function(item) {                         // 数据格式化函数，item为list的一项
            }
        },
        noDataLoadingOption: {                                  // 无数据提示。
            backgroundColor: '#eee',
            text: '暂无数据',
            textStyle: {
                color: '#888',
                fontSize: 14
            }
        }
        // ...
    }
    ```

* showLoading([loadingOption])

    过渡控制，显示loading（读取中）。可选。

    `loadingOption`:

    ```javascript
    {
        backgroundColor: '#eee',
        text: '正在加载...',
        effect: 'spin'                      // 默认：null, { String | Function } 可选：'spin|normal'；也可为回调函数，回调函数生成HTML
    }
    ```

* hideLoading()

    隐藏loading

* resize()

    当容器大小变化时，调用此方法进行重绘


## Licence

MIT

