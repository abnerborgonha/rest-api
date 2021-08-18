/* eslint-disable no-undef */

import { v4 } from 'uuid'
import { Router, Request, Response } from 'express'

const routes = Router()

interface Products {
  id?: string,
  name: string,
  code: number
}

const data: Products[] = [
  {
    id: '1',
    name: 'Notebook',
    code: 10
  }
]

// POST   -> CREATE -> http://localhost:3333/products
// GET    -> READ   -> http://localhost:3333/products
// UPDATE -> UPDATE -> http://localhost:3333/products/:id
// DELETE -> DELETE -> http://localhost:3333/products/:id

routes.post('/products', (request: Request, response: Response) => {
  const responseData: Products = request.body

  if (responseData.id) delete responseData.id

  const product = {
    ...responseData,
    id: v4()
  }

  data.push(product)

  return response.json(product)
})

routes.get('/products', (request: Request, response: Response) => {
  return response.json(data)
})

export default routes
