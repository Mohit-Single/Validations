function validate()
{
    document.getElementById("myBtn").disabled = true;
    var x = document.forms["myForm"]["email"].value;
    var txt="";
    document.getElementById("emailspan").innerHTML=txt;
    var str = document.forms["myForm"]["pwd"].value;
    var anothertext="";
    console.log(str);
    var result2=true;
    document.getElementById("pwdspan").innerHTML=anothertext;
    if(x.length==0)
    {   
        result2=false;
        txt = "please enter valid username";
        
    }
    else if(x.length<=8){
        result2=false;
       txt="Please input atleast 8 character";
    }
    document.getElementById("emailspan").innerHTML=txt;
    document.getElementById("emailspan").style.color = "red";
    console.log("hi"+x+x.length);
   // console.log("hello"+y);
    //console.log("hello"+z);
    //window.alert(z)
    var result=false;
    if(str.match(/[a-z]/g) && str.match( 
     /[A-Z]/g) && str.match( 
     /[0-9]/g) && str.match( 
     /[^a-zA-Z\d]/g) && str.length >= 8) 
     { 
         result=true;
     }
     if(!result)
     {   
         console.log('password');
         document.getElementById("pwdspan").innerHTML="please enter valid passsword";
         document.getElementById("pwdspan").style.color = "red";
     }
     console.log(result+"hhh"+result2);
     if(result==true && result2==true)
     {
        document.getElementById("myBtn").disabled = false;
     }
     
}
$(function () {

    if (localStorage.chkbox && localStorage.chkbox != '') {
        $('#rememberChkBox').attr('checked', 'checked');
        $('#email').val(localStorage.username);
        $('#pwd').val(localStorage.pass);
    } else {
        $('#rememberChkBox').removeAttr('checked');
        $('#email').val('');
        $('#pwd').val('');
    }

    $('#rememberChkBox').click(function () {

        if ($('#rememberChkBox').is(':checked')) {
            // save username and password
            localStorage.username = $('#email').val();
            localStorage.pass = $('#pwd').val();
            localStorage.chkbox = $('#rememberChkBox').val();
        } else {
            localStorage.username = '';
            localStorage.pass = '';
            localStorage.chkbox = '';
        }
    });
});