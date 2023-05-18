const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {

    if("/"===ctx.path){
        ctx.body = '<h1>Index Sayfasina hoşgeldiniz</h1';
    }else if("/hakkimda"===ctx.path){
        ctx.body = '<h1>Hakkimda Sayfasina hoşgeldiniz</h1>';
    }else if("/iletisim"===ctx.path){
        ctx.body = '<h1>Iletisim Sayfasina hoşgeldiniz</h1>';
    }

});

const port = 3000;

app.listen(port);