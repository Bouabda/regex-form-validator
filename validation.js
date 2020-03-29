// validation script here
$( document ).ready(function() {
 let $userName = $('#user'),$password =$("#password"),$email=$("#email"),$tel=$("#tel"),$card=$("#card");

 let regxUsername=/[a-z\d]{5,12}/i;   
 let regxPsw= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,12}$/;
 let regxTel= /^00216[0-9]{8}$/;
 let regxEmail=/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]+$/;
 let regxCard =/^\d{2}-\d{2}-\d{2}$/;

 $userName.keyup(function(){
 check($userName,regxUsername);
 }); 
 $email.keyup(function(){
 check($email,regxEmail);
 });
 $password.keyup(function(){
 check($password,regxPsw);
 });
$tel.keyup(function(){    
 check($tel,regxTel);
 });
 $card.keyup(function(){
 check($card,regxCard);    
 });
 

});
function check(id ,regx){ 
    let result = $(id).val(); 
 
     if (regx.test(result)){
          $(id).css("border-color",'#1ab188');
      } else { 
        $(id).css("border-color",'#B22222');
      }    
      if (result===""){
        $(id).css("border-color",'#a0b3b0');
      } 
    
}; 