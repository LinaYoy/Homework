const express = require("express")
const app = express()
const port = 3000

const employees = [
    {
        id: 1,
        fio: "Помидоркина Анжела Витальевна",
        birthday: "24.04.2004",
        gender: "Ж"
    },
    {
        id: 2,
        fio: "Тушканчиков Дмитрий Викторович",
        birthday: "23.09.1998",
        gender: "м"
    },
    {
        id: 3,
        fio: "Баклажанов Борис Эдуардович",
        birthday: "24.09.1987",
        gender: "м"
    },
    { 
        id: 4,
        fio: "Лимонов Леонид Львов",
        birthday: "11.11.1991",
        gender: "м"
    }
    ]

app.get('/', (req, res) => {
    res.set({
        "Content-Type": "application/json",
    })
    res.json(JSON.stringify(employees))
})

app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
})