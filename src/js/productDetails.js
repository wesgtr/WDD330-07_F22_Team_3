import { setLocalStorage, getLocalStorage } from './utils.js';

export default class ProductDetails {
  constructor(productId, dataSource){
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;

  }
  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector('main').innerHTML = this.renderProductDetails();
    document.getElementById('addToCart')
      .addEventListener('click', this.addToCart.bind(this));
  }
  addToCart() {
    let cart = [];
    let cartFromLocalStorage = getLocalStorage('so-cart');
    if (cartFromLocalStorage) {
      cart = cartFromLocalStorage;
    }
    cart.push(this.product);
    setLocalStorage('so-cart', cart);
    window.location.reload();
  }
  renderProductDetails() {
    return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Image}"
      alt="${this.product.NameWithoutBrand}"
    />
    <div class="price-block">
          <p class="product-card__price retail-price">$${this.product.SuggestedRetailPrice}</p>
          <p class="discount-card__price">$${this.product.FinalPrice}</p>
        </div>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div></section>`;
  }

}
