<%-- 
    Document   : vistaRegistrarEntrenador
    Created on : 26-11-2019, 21:15:05
    Author     : juand
--%>

<%@page import="modelo.DAOprofesion"%>
<%@page import="dao.Profesion"%>
<%@page import="dao.Entrenador"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="modelo.DAOentrenador"%>
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
        <script type="text/javascript" src="ValidacionesRegistroEntrenador.js"></script>
        <title>JSP Page</title>
    </head>
    <body>
        <pre>Bienvenido Administrador : <%= rutPersona%> | <a href="index.jsp">Cerrar Session</a></pre>
 <center>
     <h3>Registro Entrenador</h3>
     
     <br>
     <br>
     <form method="POST" action="ProcesoIngresarEntrenador" onsubmit="return validaCamposEntrenador()">
            <table cellspanding="3" cellspanding="3" border="1">
             <tr>
                 <td align="left">Rut :</td>
                 <td> <input type="text" name="rutEntrenador" id="txt1" required placeholder="12345678-0"/></td>
             </tr>
             <tr>
                 <td align="left">Nombre :</td>
                 <td> <input type="text" name="nombreEntrenador" id="txt2" required/></td>
             </tr>
             <tr>
                 <td align="left">Apellido Paterno :</td>
                 <td> <input type="text" name="apellidoPaternoEntrenador" id="txt3" required/></td>
             </tr>
             <tr>
                 <td align="left">Apellido Materno :</td>
                 <td> <input type="text" name="apellidoMaternoEntrenador" id="txt4" required/>  </td>
             </tr>
             <tr>
                 <td align="left">Seleccione Profesion :</td>
                 <td> <select name="profesionEntrenador" id="sel1" required>
                         <option value="">Seleccione Profesion</option>
                         <% 
                         DAOprofesion daoprofesion = new DAOprofesion();
                         List<Profesion> datosprofesion = (List<Profesion>) request.getAttribute("datosprofesion");
                         
                         if (request.getAttribute("datosprofesion") != null){
                             datosprofesion = (List<Profesion>) (request.getAttribute("datosprofesion"));
                             int dimension = datosprofesion.size();
                             if (dimension == 0){
                                 out.print("<script>alert('NO HAY PROFESIONES REGISTRADAS');</script>");
                             }
                         }else{
                             datosprofesion = daoprofesion.listar();                     
                             for (Profesion profesion : datosprofesion){
                              out.print("<option value="+profesion.getIdProfesion()+">"+profesion.getNombreProfesion()+"</option>");
                             }
                         }                  
                         %>                          
                      </select></td>
             </tr>
             <tr>
                 <td align="left">Ingrese Contraseña   :</td>
                 <td> <input type="password" name="claveEntrenador" value="" id="pass5" required minlength="5" maxlength="5"/> </td>
             </tr>
             <tr>
                 <td align="left">Reingrese Contraseña :</td>
                 <td> <input type="password" name="claveEntrenadorReingreso" id="pass6" required minlength="5" maxlength="5"/></td>
             </tr>
            <tr>
                  <td align="left">PRESIONAR PARA REGISTRAR :</td>
                  <td><input type="submit" value="Enviar Datos"/></td>
            </tr>
            <tr>
                <td align="left">PRESIONAR PARA BORRAR :</td>
                <td> <input type="reset" value="Limpiar Datos" />  </td>
            </tr>
         </table>        
     </form>
        <br>
        <form action="menuAdministrador.jsp" method="POST">
            <input type="submit" value="Regresar Menu Administrador" />
        </form>     
 </center>
 
    </body>
</html>
