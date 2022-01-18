# theme-switch
## 一个基于 CSS var 的在线实时换肤方案
## demo 传送门：[https://hounaoshao.github.io/theme-switch/](https://hounaoshao.github.io/theme-switch/)

方案的原理是基于 CSS var 实现色值的切换，在具体实现时需要分层，如图：

<div align="center"><img src="./img/分层图.png"></div>

### CSS var 分为原子层和应用层
原子层类似于调色板，用于提供 UI 设计时所可能用到的所有色值，故名为原子层。变量命名时只与相应的色值有关，如：
``` css
:root {
	/* 红色 */
	--red-1: #d03050;
	--red-2: #de576d;
	--red-3: #ab1f3f;
	--red-4: #e88080;
	--red-5: #e98b8b;
	--red-6: #e57272;

	/* 黄色 */
	--yellow-1: #f0a020;
	--yellow-2: #fcb040;
	--yellow-3: #c97c10;
	--yellow-4: #f2c97d;
	--yellow-5: #f5d599;
	--yellow-6: #e6c260;

	/* 绿色 */
	--green-1: #18a058;
	--green-2: #36ad6a;
	--green-3: #0c7a43;
	--green-4: #63e2b7;
	--green-5: #7fe7c4;
	--green-6: #5acea7;
}
```
应用层变量供应用层 class 使用，值引用自原子层，但在命名时有了具体的应用含义，故名为应用层。如：
``` css
:root {
	/* common */
	--primary-color: var(--green-1); /* 主题色 */
	--primary-hover-color: var(--green-2); /* 主题色 hover */
	--primary-active-color: var(--green-3); /* 主题色 active */
	--success-color: var(--green-1); /* 成功色 */
	--error-color: var(--red-1); /* 错误色 */
	--warn-color: var(--yellow-1); /* 警告色 */

	/* text */
	--title-color: var(--black-2); /* 标题色 */
	--text-color: var(--black-3); /* 文本色 */
	--text-success-color: var(--success-color); /* 文本成功色 */
	--text-error-color: var(--error-color); /* 文本错误色 */
	--text-warn-color: var(--warn-color); /* 文本警告色 */

	/* btn */
	--btn-primary-bg-color: var(--primary-color); /* 主要按钮背景色 */
	--btn-primary-hover-bg-color: var(--primary-hover-color); /* 主要按钮背景色 hover */
	--btn-primary-active-bg-color: var(--primary-active-color); /* 主要按钮背景色 active */
}
```

### class 只有应用层
应用层 class 是原子化的，直接供页面开始使用，每条 class 对应一个或一组 CSS 属性，其命名规则大致与应用层 CSS var 一致，如：
```css
/* text */
.title-color {
	color: var(--title-color);
}
.text-color {
	color: var(--text-color);
}
.text-success-color {
	color: var(--text-success-color);
}
.text-error-color {
	color: var(--text-error-color);
}
.text-warn-color {
	color: var(--text-warn-color);
}

/* btn */
.btn-primary {
	color: var(--btn-color);
	background-color: var(--btn-primary-bg-color);
}
.btn-primary:hover {
	background-color: var(--btn-primary-hover-bg-color);
}
.btn-primary:active {
	background-color: var(--btn-primary-active-bg-color);
}
```

有了上述的使用方式，当我们想要换肤时只需要新增一个应用层 css var 文件，在里面覆盖掉需要换肤的变量，然后让 HTML 激活该文件即可。拿白天黑夜的切换举例：
```css
/* 黑夜模式 */
:root[data-theme="dark"] {
	/* common */
	--primary-color: var(--green-4);
	--primary-hover-color: var(--green-5);
	--primary-active-color: var(--green-6);
	--success-color: var(--green-4);
	--error-color: var(--red-4);
	--warn-color: var(--yellow-4);

	/* text */
	--title-color: var(--white-3);
	--text-color: var(--white-4);

	/* btn */
	--btn-danger-bg-color: var(--red-4);
	--btn-danger-hover-bg-color: var(--red-5);
	--btn-danger-active-bg-color: var(--red-6);
}

/* 白天模式时使用默认的样式，无需更改 */
```

此方案我认为是非常便捷和高效的，虽然在项目刚起步时可能会有点繁琐，需要生成这么一堆样式。但是一旦完成之后，换肤的成本会非常低，不仅可以实现白天黑夜版的切换，甚至想要支持多少种主题都没有问题。
<br />
<br />
而且，这一切使用的都是浏览器原生的东西，所以，在切换主题时的性能方面我觉得比现在市面上通过更改 Less、Sass 变量的方式要强得多。因为它们都是需要编译的，而 CSS var 直接交给浏览器即可，无需手动编译。
<br />
<br />
希望我这一方案能够给需要换肤功能的小伙伴提供到帮助或参考😁。