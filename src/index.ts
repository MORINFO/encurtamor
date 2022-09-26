import express from "express";
import 'dotenv/config'
import prisma from "./Prisma";
import Routes from "./Routes";

const app = express()

app.use(express.json())

app.get("/home", async (req, res) => {

    return res.json({ "message": "helloupdate" })
})

app.get("/home2", async (req, res) => {

    return res.json({ "message2": "hello2" })
})

app.get("/prisma", async (req, res) => {

    try {

        let busca_arquivos = await prisma.arquivos.findMany()
        return res.json(busca_arquivos)

    } catch (error) {

        console.log(error)
        return res.json(error)

    }

})

app.use(Routes)

app.listen(process.env.PORT, () => { console.log('servidor aberto!') })