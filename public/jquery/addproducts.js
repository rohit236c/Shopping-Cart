function getvendordata(done) {
  $.get('/vendors',
    (data) => {
      done(data);
    })
}

function create(vendor) {
  return $(`   
  <option value="${vendor.id}">${vendor.name}</option>
  `)
}

$(() => {
  getvendordata((vendors)=>{
    $('#select').empty()
    for(let vendor of vendors){
      $('#select').append(create(vendor))
    }
  })

  let productname = $('#product-name');
  let productprice = $('#product-price');
  let productquantity = $('#product-quantity');
  let vendor = $('#select')
  let button = $('#add')

  $('#add').click(() => {
    additem(
      productname.val(),
      productprice.val(),
      productquantity.val(),
      vendor.val(),
      // vendor.val(),
     (additem)=> {
        window.alert(additem.name ) 
      }

    )
  })

})