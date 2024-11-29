import express, {  NextFunction, Request, Response } from 'express'
import cors from 'cors'
// import { animalRoute } from './app/module/animal/animal.routes'
// import { categoryRoute } from './app/module/category/category.routes'
const app = express()
// const port = 3000

// middleware 
app.use(cors())
app.use(express.json())



// application route 
// app.use('/api/v1/animal', animalRoute )
// app.use('/api/v1/category', categoryRoute )





app.get('/', (req, res) => {
  res.send('Animal server root route..!')
})



app.use((err:any, req:Request, res:Response, next:NextFunction) => {

   const statusCode = err.statusCode || 500
  const message = err.message || "something wrong"


  res.status(statusCode).json({
    success: true,
    message: message,
    error: err
  })

})



// handle not found route 

app.use((req:Request, res:Response, next:NextFunction) => {


  res.status(400).json({
    success: false,
    message: 'Not Found route',
    error: ""
  })
})



export default app