const button = document.querySelector("button");

    button.addEventListener("click",()=>{
       let length = document.getElementById("length").value; 
       let password = generatePassword(length); 
       let generated = document.getElementById("password"); 

       generated.innerHTML = '<p>' + password + '<p>';
    });

    function generatePassword(length){ 
       const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-[]{}<>?/";
       let password = ""; 

       for(let i = 0; i < length; i++ ){
           const random = Math.floor(Math.random() * charset.length);
           password += charset[random];
       }

       return password;
    };





