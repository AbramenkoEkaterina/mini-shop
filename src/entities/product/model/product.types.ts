export interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
}

export interface ProductApi {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

// // интерфес с фейкового сайта который выдает
// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack",
//   "price": 109.95,
//   "description": "...",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/...",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }
// }