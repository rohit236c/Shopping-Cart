function getlist1(done){
    $.get('/carts',
    (data)=>{
        done(data)
    })
}

function createrow(item) {
    return $(`  
    <tr>
    <td scope="row">${item.user.id}</td>
    <td scope="row">${item.product.name}</td>
    <td scope="row">${item.product.price}</td>
    <td scope="row">${item.quantity}</td>
    <td ><button id="del" class="delete btn"><i class="fas fa-trash"></i></button></td>
    </tr>
    `)
}
$(()=>{
    getlist1((cartitems)=>{
        $('#list').empty()
        for(item of cartitems){
            $('#list').append(createrow(item))
        }
    })
   
})
