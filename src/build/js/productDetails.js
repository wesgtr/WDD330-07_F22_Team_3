var s=(o,d,t)=>new Promise((e,a)=>{var u=r=>{try{i(t.next(r))}catch(c){a(c)}},l=r=>{try{i(t.throw(r))}catch(c){a(c)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(u,l);i((t=t.apply(o,d)).next())});import{setLocalStorage as p,getLocalStorage as n}from"./utils.js";export default class h{constructor(d,t){this.productId=d,this.product={},this.dataSource=t}init(){return s(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){let d=[],t=n("so-cart");t&&(d=t),d.push(this.product),p("so-cart",d),window.location.reload()}renderProductDetails(){return`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
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
    </div></section>`}}
