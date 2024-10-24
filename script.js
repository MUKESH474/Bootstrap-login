var myform=document.getElementById("myform")
var fname=document.getElementById('fname')
var lname=document.getElementById('lname')
var mail=document.getElementById('email')
var pas=document.getElementById('password')
var pass=document.getElementById('conpass')
var error1=document.getElementById('error1')
var error2=document.getElementById('error2')
var error3=document.getElementById('error3')
var error4=document.getElementById('error4')
var error5=document.getElementById('error5')


myform.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(fname.value==''){
        fname.style.border='2px solid red'
        error1.textContent='First Name is requreid'
        return
    }
    else{
        fname.style.border='2px solid green'
        error1.textContent=''
    }    
    if(lname.value==''){
        lname.style.border='2px solid red'
        error2.textContent='Last Name is requreid'
        return
    }
    else{
        lname.style.border='2px solid green'
        error2.textContent=''
    }    
})