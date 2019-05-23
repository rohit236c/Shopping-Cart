$(()=>{
    let name = $('#vendor-name')
    $('#add').click(()=>{
        addvendor(name.val() , (addvendor)=>{
            window.alert(addvendor.name)
        })

    })
})