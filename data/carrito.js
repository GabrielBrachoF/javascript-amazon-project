export const cart = [];


export function agregarAlCarrito(productId){
  let matchingItem;

      cart.forEach((carritoItem) => {
        if (productId === carritoItem.productId){
          matchingItem = carritoItem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
        productId: productId,
        quantity: 1
      });
    }
}