function validateForm(){
    var fname=document.forms["regform"]["fullname"].value;
    var uname=document.forms["regform"]["username"].value;
    var email=document.forms["regform"]["email"].value;
    var phone=document.forms["regform"]["phone"].value;
    var pass=document.forms["regform"]["password"].value;
    var gender=document.forms["regform"]["gender"].value;
    
    if(fname==null || fname==""){
        alert("Full Name can not be blank.")
        return false;
    }
    else if (uname==null || uname==""){
        alert("Username can not be blank.")
        return false;
    }
    else if (email==null || email==""){
        alert("Please input a valid email.")
        return false;
    }
    else if (phone==null || phone==""){
        alert("Phone number can not be blank.")
        return false;
    }
    else if (pass==null || pass==""){
        alert("Incorrect password.")
        return false;
    }
    else if ((gender[0].checked==false)&&(gender[1].checked==false)){
        alert("Gender field can not be blank. Please choose prefer not to say if not comfortable sharing gender.")
        return false;
    }

}