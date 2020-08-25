// Servidor
//require('express')()
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Configurar nunjucks (templete engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', { // Pastas que esta os arquivos html
    express: server,
    noCache: true, 
})

// Inicio e configuracao do servidor
server
// Receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// Configurar arquivos staticos (css, scripts, imagens)
.use(express.static("public")) /* chamar a pastar public*/
// Rotas da aplicaçao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5500)

