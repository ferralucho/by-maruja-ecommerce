import { CartProduct } from '../model/cart-product';

export const addToCart = (product: CartProduct) => {
  let cartContent: CartProduct[] = JSON.parse(localStorage.getItem('cart'));
  let productIndex = findProductIndex(cartContent, product);

  if (productIndex !== null) {
    cartContent[productIndex].quantity += 1;
  } else {
    if (cartContent === null) cartContent = [];
    cartContent.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cartContent));
};

export const clearFromCart = (product: CartProduct) => {
  let cartContent: CartProduct[] = JSON.parse(localStorage.getItem('cart'));
  cartContent = cartContent
    ? cartContent.filter((cartProd) => {
        return cartProd._id !== product._id;
      })
    : [];

  localStorage.setItem('cart', JSON.stringify(cartContent));
};

export const emptyCart = () => {
  localStorage.removeItem('cart');
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart'));
};

export const removeOneFromCart = (product: CartProduct) => {
  let cartContent: CartProduct[] = JSON.parse(localStorage.getItem('cart'));

  let productIndex = findProductIndex(cartContent, product);

  if (productIndex !== null) {
    cartContent[productIndex].quantity > 1
      ? (cartContent[productIndex].quantity -= 1) && localStorage.setItem('cart', JSON.stringify(cartContent))
      : clearFromCart(product);
  }
};

const findProductIndex = (cart: CartProduct[], product: CartProduct) => {
  if (cart === null) return null;
  return cart.reduce<number>((cartProductIndex, cartProduct, index) => {
    return cartProduct._id === product._id ? index : cartProductIndex;
  }, null);
};
