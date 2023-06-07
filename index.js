import express from 'express'
import ejs from 'ejs'
const PORT = 3000

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('main', {user: 'Admin'})
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
