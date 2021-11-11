const products = [1, 2, 3, 4, 5]

export const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products)
  }, 2000)
})
