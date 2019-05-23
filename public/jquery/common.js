function getproducts(done){
    $.get('/products',
        (data) => {
            done(data);
})}


function additem(name,price,quantity,vendorId,done){
    $.post('/products',
   { name: name,
     price: price,
     quantity:quantity,
     vendorId:vendorId,
   },
   (data)=>{
       done(data)
   }
   )
}
    
function createcard(product){
        return $(` 
        <div class="col-3 card p-2 m-2">
        <div class="single-blog card-body">
              <h5 class="card-title" id="vendorid">${product.vendor.name}</h5>
          <div class="row">
              <div class="col-12"> 
              <h5 class="card-title col-12" id="Product-name">Product :<B>${product.name}</B></h5>
              </div>                
          </div> 
          <div class="row">
              <div class="col-12"> 
              <h5 class="text-center" id="Product-quantity">Quantity :<B>${product.quantity}</B></h5> 
              </div>                
          </div> 
          <div class="row">
              <div class="col-12"> 
              <h5 class="text-center" id="productprice">Price :<B>Rs${product.price}</B></h5> 
              </div>                
          </div>      
           <button id="addproduct"class="button btn-primary text-center col-12">ADD</button>
        </div>
        `)
}