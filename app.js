var koa = require("koa")
var Router = require('koa-router');

var app = new koa();
var router = new Router();

router.get('/testGet', async (ctx) => {
    ctx.body = {
        code: 200,
        data: 'get is ok'
    }
})

router.post('/testPost', async (ctx) => {
    ctx.body = {
        code: 200,
        data: 'post is ok!'
    }
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(9005)