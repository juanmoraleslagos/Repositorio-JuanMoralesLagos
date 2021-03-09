<%-- 
    Document   : index
    Created on : 11-11-2019, 15:46:17
    Author     : juanm
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="dao.Persona"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page session="true" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="Validaciones.js"></script>
        <title>JSP Page</title>
    </head>
    <body>
    <center>
        <h1>Login Administrador</h1>
        <h3>Introducir Rut y Contraseña de Adminstrador</h3>        
        <form method="POST" action="ProcesoLogin" onsubmit="return validaCampos()" >
            <table cellspacing="3" cellspacing="3" border="1">
                <tr>
                    <td align="right" > Rut      :  </td>
                    <td> <input type="text" name="rutPersona" id="txt1" required placeholder="12345678-0"/> </td>
                </tr>
                <tr>
                    <td align="right"> Contraseña : </td>
                    <td> <input type="password" name="clavePersona" id="txt2" required minlength="5" maxlength="5"/> </td>
                </tr>                              
            </table>  
            <input type="submit" value="Ingresar" name="btnIngresar"/>
            <input type="reset"  value="Limpiar"  name="Limpiar"/>
        </form>
        
        <%
            HttpSession sesion = request.getSession();
            
            List<Persona> datos = new ArrayList<Persona>();
            if (request.getAttribute("Error")!=null){
                out.print("<script>alert('Administrador o Contraseña Erronea');</script>");
            }
            
            if (request.getAttribute("datos")!= null){
                datos = (List<Persona>) request.getAttribute("datos");
                String rutPersona="";
                
                for (Persona persona : datos){
                    rutPersona = persona.getRutPersona();
                }                
                session.setAttribute("rutPersona",rutPersona);
                response.sendRedirect("menuAdministrador.jsp");
            }
            
            %>
    </center>
</body>
</html>
