//直接无脑替换“twemoji”为“msmeoji”，没什么。
import msemoji from 'msemoji';

//在 msemoji 中，base 链接不再包含版本号，因此在下一个版本中我将内置一个 msemoji.version 用于访问。
export const version = msemoji.version;

//然后就是链接了，到时候随便怎么改都行
export default `https://cdn.jsdelivr.net/gh/twitter/twemoji@${version}/assets/`;
