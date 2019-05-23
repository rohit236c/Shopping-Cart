function getlist(done) {
    $.get('/vendors',
        (data) => {
            done(data)
        })
}

function addvendor(name, done) {
    $.post('/vendors',
        {
            name: name
        },
        (data) => {
            done(data)
        })
}

function createrow(vendor) {
    return $(`  
    <tr>
    <td scope="row">${vendor.id}</td>
    <td scope="row">${vendor.name}</td>
    </tr>
    `)
}

$(() => {
    let add = $('#add')

    getlist((vendors) => {

        $('#list').empty()

        for (vendor of vendors) {
            $('#list').append(createrow(vendor))
        }
    })
})