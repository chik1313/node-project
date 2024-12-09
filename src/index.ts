import express, {Request, Response} from "express";


const app = express()
const port = 3000

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

const db = {
    courses: [
        {id: 1, title: 'front-end'},
        {id: 2, title: 'back-end'},
        {id: 3, title: 'automation - qa'},
        {id: 4, title: 'dev-ops'},
    ]
}

app.get('/courses', (req: Request, res: Response) => {
    let findedCourses = db.courses;
    if (req.query.title) {
        findedCourses = db.courses.filter(c => c.title.indexOf(req.query.title as string) > -1)
    }

    res.json(findedCourses)
})


app.get('/courses/:id', (req: Request, res: Response) => {
    const findedCourse = db.courses.find(c => c.id === +req.params.id)

    if (!findedCourse) {
        res.sendStatus(404);
        return;
    }

    res.json(findedCourse)

})

app.post('/courses', (req: Request, res: Response) => {
    if (!req.body.title) {
        res.sendStatus(400);
        return
    }
    const createdCourse = {
        id: +(new Date()),
        title: req.body.title
    }
    db.courses.push(createdCourse)
    res.json(createdCourse)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

