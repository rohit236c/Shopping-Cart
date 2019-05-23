
    
$(()=>{
        let productlist = $('#product-list')
        let button = $('#addproduct')
         getproducts((products) => {
            productlist.empty();
            for(product of products){
            productlist.append(createcard(product))
        }
    })       
    // button.click()
})