import ProductData from './productData';
import ProductList from './productList';


const dataSource = new ProductData('tents');

const listElement = document.querySelector('.product-list');

const myList = new ProductList('tents', dataSource, listElement);

myList.init();
