
function logout() {
    $.ajax({
        url: 'api/logout',
        method: 'POST'
    }).done(function( data ) {
        // cannot fail
        location.reload();
    });
}
