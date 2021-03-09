<?php
$servidor  = "localhost";
$basedatos = "bdgym";
$usuario   = "root";
$clave     = "";

$json = array();

if (isset($_GET["rutPersona"]) && isset($_GET["nombrePersona"]) && isset($_GET["apePatPersona"]) && isset($_GET["apeMatePersona"]) && isset($_GET["codigoEstadoPersona"]) && isset($_GET["codigoEstadoPersona"]) && isset($_GET["clavePersona"])){
    $rutPersona = $_GET["rutPersona"];
    $nombrePersona = $_GET["nombrePersona"];
    $apePatPersona = $_GET["apePatPersona"];
    $apeMatePersona = $_GET["apeMatePersona"];
    $codigoEstadoPersona = $_GET["codigoEstadoPersona"];
    $clavePersona = $_GET["clavePersona"];    
    $conexion = mysql_connect($servidor,$usuario,$clave,$basedatos);
    $consulta = "INSERT INTO tblpersona VALUES ('$rutPersona','$nombrePersona','$apePatPersona','$apeMatePersona',$codigoEstadoPersona,$clavePersona)";
    $resultado = mysqli_query($conexion,$consulta);
    
    if ($resultado){
        $consulta2 = "SELECT * FROM tblpersona WHERE rutPersona = '".$rutPersona."'";
        $resultado = mysqli_query($conexion, $consulta2);
        
        if ($registro = mysqli_fetch_array($resultado)){
            $json['usuario'][]=$registro;            
        }
        mysql_close($conexion);
        print json_encode($json);
        
    }else{
        $persona["rutPersona"]="Error al insertar el rut";
        $persona["nombrePersona"]="Error al insertar el nombre";
        $persona["apePatPersona"]="Error al insertar el apellido peterno";
        $persona["apeMatePersona"]="Error al insertar el apellido materno";
        $persona["codigoEstadoPersona"]="Error al inserta el codigo Estado";
        $persona["clavePersona"]="Erro al insertar clave persona";
        $json['usuario'][]=$persona;
        print json_encode($persona);
    }
    }else{
        $persona["rutPersona"]="Error Web Service";
        $persona["nombrePersona"]="Error Web Service";
        $persona["apePatPersona"]="Error Web Service";
        $persona["apeMatePersona"]="Error Web Service";
        $persona["codigoEstadoPersona"]="Error Web Service";
        $persona["clavePersona"]="Error Web Service";
        $json['usuario'][]=$persona;
        print json_encode($persona);
    }


    
