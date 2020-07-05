'use strict'

class Product{
    constructor(n, p, c){
        this.name = n;
        this.price = p;
        this.category = c;
    }
}


class ProductList{
    constructor (){
        this.prod_list = []
        this.shoping_card = []
    }
    
    addToProdList(obj){
       this.prod_list.push(obj)
    }
     addToShopingCard(obj){
       this.shoping_card.push(obj)
    }
}

let list = new ProductList()

