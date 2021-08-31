var koa = require("koa")
var Router = require('koa-router');

var app = new koa();
var router = new Router();

app.use(async (ctx) => {
    ctx.body = {
        code: 200,
        data: [1, 2, 3]
    }
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3005)