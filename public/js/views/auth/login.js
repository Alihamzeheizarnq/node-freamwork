jQuery(function ($) {
    // const $form = $('#form-login')

    // $form.on('submit', submitHandler)
    
    // function submitHandler(e) {
    //     e.preventDefault()
    //     $.ajax({
    //         url: '/login',
    //         type: 'POST',
    //         headers: {
    //             'accept':'application/json',
    //         },
    //         data: $form.serialize()
    //     }).done(response => {
    //         console.log(response)
    //     })
    // }


    $(document).ready(function() {
        $("#form-login").submit(function(e) {
            e.preventDefault()
            var data = new FormData($('#form-login')[0]);
            $.ajax({
                url:'/login',
                type: 'POST',
                contentType: false,
                processData: false,
                cache: false,
                data: data,
                success: function(res){
                    console.log(res);
                },
                error: function(){
                    console.log('Error: In sending the request!');
                }
            })
        });
    });

});