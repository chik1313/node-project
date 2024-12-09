import express , {Request , Response} from "express";


const app = express()
const port = 3000

app.get('/courses', (req:Request, res:Response) => {
  res.json([
      { id: 1 , title: 'front-end' },
      { id: 2 , title: 'back-end' },
      { id: 3 , title: 'automation - qa' },
      { id: 4 , title: 'dev-ops' },
  ])
})
app.get('/courses/:id', (req:Request, res:Response) => {
  res.json([
      { id: 1 , title: 'front-end' },
      { id: 2 , title: 'back-end' },
      { id: 3 , title: 'automation - qa' },
      { id: 4 , title: 'dev-ops' },
  ].find(c => c.id === +req.params.id))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
