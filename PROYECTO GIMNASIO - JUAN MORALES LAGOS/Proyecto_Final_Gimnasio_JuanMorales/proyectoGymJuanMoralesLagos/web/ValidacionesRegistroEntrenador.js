function validaCamposEntrenador(){
    var rutentrenador             = document.getElementById("txt1").value;
    var nombreentrenador          = document.getElementById("txt2").value;
    var apellidopaternoentrenador = document.getElementById("txt3").value;
    var apellidomaternoentrenador = document.getElementById("txt4").value;
    var profesionentrenador       = document.getElementById("sel1").value;
    var claveentrenador           = document.getElementById("pass5").value;
    var clavereingresoentrenador  = document.getElementById("pass6").value;
    
    if (rutentrenador==0 | rutentrenador==""){
        alert ("Debe Ingresar Rut Entrenador");
        return false;
        
    }else if (rutentrenador.length < 9 | rutentrenador.length > 10){
        alert ("Formato Rut debe ser 12123456-0");
        return false;
        
    }else if (nombreentrenador==0 | nombreentrenador==""){
        alert ("Error...Debe Ingresar Nombre Entrenador");
        return false;       
   
    }else if (apellidopaternoentrenador==0 | apellidopaternoentrenador==""){
        alert("Error...Debe Ingresar Apellido Paterno Entrenador");
        return false;
        
    }else if (apellidomaternoentrenador==0 | apellidomaternoentrenador==""){
        alert("Error...Debe Ingresar Apellido Materno Entrenador");
        return false;
        
    }else if (profesionentrenador==0 | profesionentrenador==""){
        alert("Error...Debe Seleccionar Profesion Entrenador");
        return false;
        
    }else if (claveentrenador==0 | claveentrenador==null){
        alert ("Error...Debe Ingresar Password o clave Secreta");
        return false;
   
    }else if (claveentrenador.length < 5 | claveentrenador.length > 5){
        alert ("Error...Clave Debe Tener 5 Caracteres");
        return false;
              
    }else if (clavereingresoentrenador==0 | clavereingresoentrenador==null){
        alert ("Error...Deber Confirmar su Contraseña");
        return false;
    
    }else if (clavereingresoentrenador.length < 5 | clavereingresoentrenador.length > 5){
        alert ("Error...Contraseña Debe Contener 5 Carácrteres");
        return false;
    
    }else if (claveentrenador != clavereingresoentrenador){
       alert("Error...Claves Deben ser Iguales");
       return false;
   }
}


