<%-- 
    Document   : menuAdministrador
    Created on : 18-11-2019, 16:53:57
    Author     : juand
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true" %>

<%
    HttpSession sesion = request.getSession();
    String rutPersona = "";
    
    if (sesion.getAttribute("rutPersona")!=null && sesion!=null){
        rutPersona = sesion.getAttribute("rutPersona").toString();        
    
    }else{
        response.sendRedirect("index.jsp");
    }    
    %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <pre>Bienvenido Administrador : <%= rutPersona %> | <a href="index.jsp">Cerrar Session</a></pre>
    <center>
        <h1>Panel Administración</h1>
        <br><br>
        <form  method="POST"  action="vistaRegistrarEntrenador.jsp" >
            <input type="submit" value="Registrar Entrenador" />            
        </form>
        <br>
        <form action="vistaActulizarEntrenador.jsp" method="POST">
            <input type="submit" value="Eliminar Entrenador" />            
        </form>
        <br>
        <form action="vistaEliminarEntrenador.jsp" method="POST">
            <input type="submit" value="Eliminar Entrenador" />            
        </form>
        <br>
        <form action="vistaRegistrarUsuario.jsp" method="POST">
            <input type="submit" value="Registrar Usuario" />            
        </form>
        <br>
        <form action="vistaEliminarUsuario" method="POST">
            <input type="submit" value="Eliminar Usuario" />            
        </form>
    </center>
         
    
        
    </body>
</html>
