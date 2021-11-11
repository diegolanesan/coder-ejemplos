import { promesa } from '../data'
import { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = () => {
  console.log('rendering')
  const [products, setProducts] = useState(null)
  useEffect(() => {
    promesa.then((response) => {
      setProducts(response)
    })
  }, [])

  return (
    <div>
      {products &&
        products.map((product) => {
          return <Item product={product} />
        })}
    </div>
  )
}

export default ItemList
