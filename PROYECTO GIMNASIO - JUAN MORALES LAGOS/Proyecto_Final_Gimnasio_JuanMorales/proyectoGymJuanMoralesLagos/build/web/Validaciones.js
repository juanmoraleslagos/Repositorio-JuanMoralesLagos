function validaCampos(){
   
    var rut      = document.getElementById("txt1").value;
    var password = document.getElementById("txt2").value;
    
    if (rut.length==0 | rut==""){
        alert ("Debe Ingresar Su Rut"); 
        return false;
             
    }else if (password.lenght==0 | password==""){
        alert ("Debe Ingresar su Password");
        return false;  
        
    }else if (password.length < 5 | password.length > 6){
       alert ("Clave Administrador Debe Tener 5 Carácteres");
       return false;
    
    }
   
}


