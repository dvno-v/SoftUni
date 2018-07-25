function validate() {
    $("#submit").click((event) => {
        "use strict";
        event.preventDefault();
        let isValidUsername = usernamePatt.test($("#username").val());
        let isValidPassword = passwordPatt.test($("#password").val()) && $("#password").val() == $("#confirm-password").val() ;
        let isValidEmail = emailPatt.test($("#email").val());
        let isValidCompanyNumber = ($("#companyNumber").val()) >= 1000 && ($("#companyNumber").val()) <= 9999;
        if(wasCheked){
            if(isValidEmail && isValidPassword && isValidUsername && isValidCompanyNumber){
                $("div form fieldset#userInfo div input").css('border','none');
                $("div form fieldset#companyInfo div input").css('border','none');
                $("#valid").css("display", 'inline')
            }else{
                if(!isValidEmail){
                    $("#email").css('border-color', 'red')
                }
                if(!isValidPassword){
                    if($("#password").val() ===$("#confirm-password").val()){
                        $("#password").css('border-color', 'red')
                        $("#confirm-password").css('border-color', 'red')
                    }else{
                        $("#confirm-password").css('border-color', 'red')
                    }
                }
                if(!isValidUsername){
                    $("#username").css('border-color', 'red')
                }
                if(!isValidCompanyNumber){
                    $("#companyNumber").css('border-color', 'red')
                }
            }
        }else{
            if(isValidEmail && isValidPassword && isValidUsername){
                $("div form fieldset#userInfo div input").css('border','none');
                $("#valid").css("display", 'inline')
            }else{
                if(!isValidEmail){
                    $("#email").css('border-color', 'red')
                }
                if(!isValidPassword){
                    if($("#password").val() ===$("#confirm-password").val()){
                        $("#password").css('border-color', 'red')
                        $("#confirm-password").css('border-color', 'red')
                    }else{
                        $("#confirm-password").css('border-color', 'red')
                    }
                }
                if(!isValidUsername){
                    $("#username").css('border-color', 'red')
                }
            }
        }

    });

    let usernamePatt = /\b[a-zA-Z0-9]{3,20}\b/g;
    let passwordPatt = /\b\w{5,15}\b/g;
    let emailPatt = /\b\w+@(\w+\.*)+\b/g;
    let wasCheked = false;
    $("#company").change((event) => {
        "use strict";
        console.log(event.target);
        if($(event.target).is(':checked')){
            $("#companyInfo").css("display", 'inline')
            wasCheked = true;
        }else{
            wasCheked = false;
            $("#companyInfo").css("display", 'none')
        }
    });
}
