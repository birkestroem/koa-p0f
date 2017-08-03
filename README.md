# koa-p0f
Koa p0f middleware

## Installation

```
$ npm install koa-p0f
```

## Example

```js
const p0f = require('koa-p0f')
const Koa = require('koa')
const app = new Koa()

app.use(p0f())

app.use((ctx) => {
    // ctx.response.header now contains p0f headers
})
```


# License

  MIT - See LICENSE file.
