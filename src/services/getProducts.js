import { products } from "./products";

const task = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

export const getProducts = () => {
    return (task
        )
}