/*  ======== User login =================  */
function signUp(){

    const username = $("#usernameText").val();
    const password = $("#passwordText").val();
    const usertype = $("#usertype").val();

    const data = {
        "username": username,
        "password": password,
        "usertype":usertype
    };

    $.ajax({
        url: '/api/register',
        method: "POST",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(data),
    }).done(function (response) {
        if(response.success) {
            window.location.href = '/';
        }
    }).fail(function(xhr, status, error) {
        console.log(xhr);
        showModalAlert('SignUp Error', xhr.responseJSON.msg);
    });
}
