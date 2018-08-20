# vue-scrollwatch

> scrollwatch
features：
- auto detect element enter viewport when scroll
- expose api: scrollTo , to scroll element to enter viewport 
- you can set scroll container ,not just window
- use vue directive
- no limitation of nav list
- navigation and content can be divided into two components, state transfer with vuex

特性：
- 滚动时判断出窗口中当前元素
- 暴露api scrollTo  自由指定要滚到的位置
- 滚动容器自由指定，不局限于window
- vue 指令的方式
- 导航列表没有任何限制
- 导航栏和滚动内容可分成两个组件，用vuex进行状态传递


[click to demo](https://Desdesdesgo.github.io/vue-scrollwatch/)
 
 learning usage from src/views/page1.vue 、 page2.vue and page3.vue 
 查看源码中的src/views/page1.vue 、 page2.vue 和 page3.vue 获得详细使用方式
## Installation

```bash
npm install --save vue-scrollwatch
```

in `main.js`
```js 
import vueScrollwatch from "vue-scrollwatch"
Vue.use(vueScrollwatch)
```

## Usage
 导航   
 nav
```html
<ul>
    <li @click="scrollTo('a')">section 1</li>
    <li @click="scrollTo('b')">section 2</li>
    <li @click="scrollTo('c')">section 3</li>
    <li @click="scrollTo('d')">section 4</li>
</ul>

```

element to watch

```html
 <div class="section" v-scrollWatch="{name:'a',offset:0,callback:spyDomChange}">scetcion 1</div>
<div class="section" v-scrollWatch="{name:'b',offset:0,callback:spyDomChange}">scetcion 2</div>
<div class="section" v-scrollWatch="{name:'c',offset:0,callback:spyDomChange}">scetcion 3</div>
<div class="section" v-scrollWatch="{name:'d',offset:0,callback:spyDomChange}">scetcion 4</div>

```

`callback` and `scrollTo` in methods
```js 
import scrollWatch from "vue-scrollwatch"
export default {
    ...
    methods:{
        spyDomChange(node) {
            if (this.activeMenu != node.name)
                this.activeMenu = node.name
        },
        scrollTo(name){
            scrollWatch.scrollTo(name)
        }
    }
    ...
}

```


 if you want to define a container to scroll (not window)  
 如果你想指定滚动容器，而不是window 

```html
<div id="scrollDom">
    <div class="section" v-scrollWatch="{name:'a',offset:0,callback:spyDomChange}">scetcion 1</div>
    <div class="section" v-scrollWatch="{name:'b',offset:0,callback:spyDomChange}">scetcion 2</div>
    <div class="section" v-scrollWatch="{name:'c',offset:0,callback:spyDomChange}">scetcion 3</div>
    <div class="section" v-scrollWatch="{name:'d',offset:0,callback:spyDomChange}">scetcion 4</div>
<div>
```


```js 
import scrollWatch from "vue-scrollwatch"
export default {
    ...
    created(){
        scrollWatch.setContainer("#scrollDom")
    }
    ...
}
```
 you also can use class as selector  
 你也可以使用 class 来作为css 选择器

 container and element to be watch hasn't to be father and sons,it also can be grandfather or grand-grandfather  
 滚动容器和监听元素之间不一定是父子关系,可以是爷孙关系，也可以是祖宗孙子关系


## Options
#### name
*required:* `true` 

#### offset
元素位置偏移
*default:* `0`
 
#### callback
*type:* `function`

## dev example
``` js
 npm run dev
```

## Thanks
[vue-scrollactive](https://github.com/eddiemf/vue-scrollactive.git)

