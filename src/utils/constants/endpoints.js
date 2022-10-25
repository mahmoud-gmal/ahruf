import { server } from "../../../environment.config";


const lang = 'en';
export const ACF_ENDPOINT = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/${lang}/wp-json/acf/v3/options/options`;
export const GET_PRODUCTS_ENDPOINT = `${server}/api/get-products`;
export const GET_PRODUCT_CATS_ENDPOINT = `${server}/api/get-product-categories`;

/**
 * Cart
 * @type {string}
 */
export const CART_ENDPOINT = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/letto/v1/cart/items/`;
