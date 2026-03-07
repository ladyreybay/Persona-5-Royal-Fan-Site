// Rey Piater-Boswell 25678592

var prefname=document.getElementById("name"), surname=document.getElementById("surname");
var username=document.getElementById("username"), birth=document.getElementById("birth");
var email=document.getElementById("email"), cell=document.getElementById("cell");
var pass=document.getElementById("password"), passcon=document.getElementById("confirm");
var vaPass=false, vaCon=false, sub=document.getElementById("submitForm");
var vaName=false, vaSurname=false, vaUsername=false, vaBirth=false, vaEmail=false, vaCell=false;

sub.onclick = function(){
    if(vaName && vaSurname && vaUsername && vaBirth && vaEmail && vaCell && vaPass && vaCon){//check if everything is valid
        return true;
    }else{//one or more inputs are invalid
        document.getElementById("subMes").innerHTML = "One or more inputs are invalid.";
        document.getElementById("subMes").style.color = "rgb(247, 56, 56)";
        console.log("Error: Inputs are invalid");
        return false;
    }
}

prefname.onblur = function(){
    let val = prefname.value;
    if(val.length <= 1){//check if name length is 1 or less characters
        document.getElementById("prefnamelab").style.color = "rgb(247, 56, 56)"; 
        document.getElementById("nameMes").innerHTML = "Name is too short";
        document.getElementById("nameMes").style.color = "rgb(247, 56, 56)";
        prefname.style.border = "2px solid rgb(238, 44, 76)";
        prefname.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        prefname.classList.remove("inp");//both used to replay shake animation when values are changed
        prefname.classList.add("wrong");//this is kept similar throughout
        vaName = false;
    }else{//valid name: name length is greater than 1
        document.getElementById("nameMes").innerHTML = ""; 
        document.getElementById("prefnamelab").style.color = "lime";
        prefname.style.border = "2px solid lime";
        prefname.style.boxShadow = "0 0 3px lime";
        prefname.classList.remove("wrong");
        prefname.classList.add("inp");
        vaName = true;
    }
}

surname.onblur = function(){
    let val = surname.value;
    if(val.length <= 1){//check if surname length is 1 or less charcters
        document.getElementById("surnamelab").style.color = "rgb(247, 56, 56)";
        document.getElementById("surnameMes").innerHTML = "Surname is too short";
        document.getElementById("surnameMes").style.color = "rgb(247, 56, 56)";
        surname.style.border = "2px solid rgb(238, 44, 76)";
        surname.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        surname.classList.remove("inp");
        surname.classList.add("wrong");
        vaSurname = false;
    }else{//valid surname: surname length is greater than 1
        document.getElementById("surnameMes").innerHTML = ""
        document.getElementById("surnamelab").style.color = "lime";
        surname.style.border = "2px solid lime";
        surname.style.boxShadow = "0 0 3px lime";
        surname.classList.remove("wrong");
        surname.classList.add("inp");
        vaSurname = true;
    }
}

username.onblur = function(){
    let val = username.value;
    if(val.length < 3){//check if username length is less than 3 characters
        document.getElementById("usernamelab").style.color = "rgb(247, 56, 56)";
        document.getElementById("usernameMes").innerHTML = "Username must be at least 3 characters long";
        document.getElementById("usernameMes").style.color = "rgb(247, 56, 56)";
        username.style.border = "2px solid rgb(238, 44, 76)";
        username.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        username.classList.remove("inp");
        username.classList.add("wrong");
        vaUsername = false;
    }else{//valid username: length at least 3
        document.getElementById("usernameMes").innerHTML = "";
        document.getElementById("usernamelab").style.color = "lime";
        username.style.border = "2px solid lime";
        username.style.boxShadow = "0 0 3px lime";
        username.classList.remove("wrong");
        username.classList.add("inp");
        vaUsername = true;
    }
}

pass.onblur = function(){
    let val = pass.value;
    let letter = /[a-zA-Z]/g;//used for checking for letters
    let number = /[0-9]/g;//user for checking for numbers
    if(val.length < 8){//Check if password is at least 8 characters long
        document.getElementById("passwordlab").style.color = "rgb(247, 56, 56)";
        document.getElementById("passMes").innerHTML = "Password must be at least 8 charcters";
        document.getElementById("passMes").style.color = "rgb(247, 56, 56)";
        pass.style.border = "2px solid rgb(238, 44, 76)";
        pass.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        pass.classList.remove("inp");
        pass.classList.add("wrong");
        vaPass = false;
    }else if(!number.test(val)||!letter.test(val)){//Check if password contains at least on letter and number
        document.getElementById("passwordlab").style.color = "rgb(247, 56, 56)";
        document.getElementById("passMes").innerHTML = "Password have at least one number and letter";
        document.getElementById("passMes").style.color = "rgb(247, 56, 56)";
        pass.style.border = "2px solid rgb(238, 44, 76)";
        pass.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        pass.classList.remove("inp");
        pass.classList.add("wrong");
        vaPass = false;
    }else{//valid password: at least 8 chars, and at least 1 letter and number
        document.getElementById("passMes").innerHTML = "";
        document.getElementById("passwordlab").style.color = "lime";
        pass.style.border = "2px solid lime";
        pass.style.boxShadow = "0 0 3px lime";
        pass.classList.remove("wrong");
        pass.classList.add("inp");
        vaPass = true;
    }
}

passcon.onblur = function(){
    let val = passcon.value;
    if(val.length >= 8 && val === password.value){//Check if confirm password matches password
        document.getElementById("conMes").innerHTML = "";
        document.getElementById("confirmlab").style.color = "lime";
        passcon.style.border = "2px solid lime";
        passcon.style.boxShadow = "0 0 3px lime";
        passcon.classList.remove("wrong");
        passcon.classList.add("inp");
        vaCon = true;
    }else{//valid confirm password: matches password's contents
        document.getElementById("confirmlab").style.color = "rgb(247, 56, 56)";
        document.getElementById("conMes").innerHTML = "Confirm password must match Password";
        document.getElementById("conMes").style.color = "rgb(247, 56, 56)";
        passcon.style.border = "2px solid rgb(238, 44, 76)";
        passcon.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        passcon.classList.remove("inp");
        passcon.classList.add("wrong");
        vaCon = false;
    }
}

birth.onblur = function(){
    let val = birth.value;
    const tdate = new Date();//making date object for calculating age
    let age = tdate.getFullYear()-val.substring(0,4);//calc of age as date input format is yyyy/mm/dd
    if(val === ""){//check for if age input is empty
        document.getElementById("birthlab").style.color = "rgb(247, 56, 56)";
        document.getElementById("birthMes").innerHTML = "Please enter a date";
        document.getElementById("birthMes").style.color = "rgb(247, 56, 56)";
        birth.style.border = "2px solid rgb(238, 44, 76)";
        birth.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        birth.classList.remove("inp");
        birth.classList.add("wrong");
        vaBirth = false;
    }else if(age < 16 && age >= 0){//check if entered age is between 0 and 16 years
        document.getElementById("birthlab").style.color = "rgb(247, 56, 56)";
        document.getElementById("birthMes").innerHTML = "You must be at least 16 to make an account";
        document.getElementById("birthMes").style.color = "rgb(247, 56, 56)";
        birth.style.border = "2px solid rgb(238, 44, 76)";
        birth.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        birth.classList.remove("inp");
        birth.classList.add("wrong");
        vaBirh = false;
    }else if(age < 0){//check for if user chose years greater than current (2025 vs 2026)
        document.getElementById("birthlab").style.color = "rgb(247, 56, 56)";
        document.getElementById("birthMes").innerHTML = "Please select a valid year (before current)";
        document.getElementById("birthMes").style.color = "rgb(247, 56, 56)";
        birth.style.border = "2px solid rgb(238, 44, 76)";
        birth.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        birth.classList.remove("inp");
        birth.classList.add("wrong");
        vaBirh = false;
    }else{//valid age: person is 16+
        document.getElementById("birthlab").style.color = "lime";
        document.getElementById("birthMes").innerHTML = "";
        birth.style.border = "2px solid lime";
        birth.style.boxShadow = "0 0 3px lime";
        birth.classList.remove("wrong");
        birth.classList.add("inp");
        vaBirth = true;
    }
}

email.onblur = function(){
    let val = email.value;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //pattern for checking for @ and . symbols
    if(!pattern.test(val)){//checks if email contains @ and .
        document.getElementById("emaillab").style.color = "rgb(247, 56, 56)";
        document.getElementById("emailMes").innerHTML = "Please ensure your email contains an @ and . symbol";
        document.getElementById("emailMes").style.color = "rgb(247, 56, 56)";
        email.style.border = "2px solid rgb(238, 44, 76)";
        email.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        email.classList.remove("inp");
        email.classList.add("wrong");
        vaEmail = false;
    }else{//valid email: contains @ and . symbols
        document.getElementById("emaillab").style.color = "lime";
        document.getElementById("emailMes").innerHTML = "";
        email.style.border = "2px solid lime";
        email.style.boxShadow = "0 0 3px lime";
        email.classList.remove("wrong");
        email.classList.add("inp");
        vaEmail = true;
    }
}

cell.onblur = function(){
    let val = cell.value;
    const pattern = /^\d{10}$/; //pattern for 10 digits (0-9) 
    if(val.length !== 10){// checks length is less than 10
        document.getElementById("cnumlab").style.color = "rgb(247, 56, 56)";
        document.getElementById("cellMes").innerHTML = "Phone number should be 10 characters in length";
        document.getElementById("cellMes").style.color = "rgb(247, 56, 56)";
        cell.style.border = "2px solid rgb(238, 44, 76)";
        cell.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        cell.classList.remove("inp");
        cell.classList.add("wrong");
        vaCell = false;
    }else if(!pattern.test(val)){// checks if phone number contains anything else but numbers
        document.getElementById("cnumlab").style.color = "rgb(247, 56, 56)";
        document.getElementById("cellMes").innerHTML = "Phone number may only have numbers";
        document.getElementById("cellMes").style.color = "rgb(247, 56, 56)";
        cell.style.border = "2px solid rgb(238, 44, 76)";
        cell.style.boxShadow = "0 0 3px rgb(238, 44, 76)";
        cell.classList.remove("inp");
        cell.classList.add("wrong");
        vaCell = false;
    }else{//valid phone: length is 10 and only has numbers
        document.getElementById("cnumlab").style.color = "lime";
        document.getElementById("cellMes").innerHTML = "";
        cell.style.border = "2px solid lime";
        cell.style.boxShadow = "0 0 3px lime";
        cell.classList.remove("wrong");
        cell.classList.add("inp");
        vaCell = true;
    }
}