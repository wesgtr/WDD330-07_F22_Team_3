import{loadHeaderFooter as o}from"./utils.js";import c from"./CheckoutProcess.js";o();const e=new c("so-cart",".checkout-summary");e.init(),document.querySelector("#zip").addEventListener("blur",e.calculateOrdertotal.bind(e)),document.querySelector("#checkoutSubmit").addEventListener("click",t=>{t.preventDefault(),e.checkout()});