
package controlador;

import dao.Persona;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.DAOpersona;


public class ProcesoLogin extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
        
        //Recibimos Valores.
        String rutAdministrador="";
        String claveAdministrador="";
        String msjError="";
        
        
        
        //Realizando validaciones por parte del servidor...
        if (request.getParameter("rutPersona").trim().equalsIgnoreCase("")){
            msjError = "Debe Ingresar su Rut";     
            
        }else if ((request.getParameter("clavePersona").length() < 5) | (request.getParameter("clavePersona").length() > 6)){
            msjError = "Password debe Tener 5 Carácteres";
        
        }else if (request.getParameter("clavePersona").trim().equalsIgnoreCase("")){
            msjError = "Debe Ingresar su Password";  
       
        }else {
            
            rutAdministrador   = request.getParameter("rutPersona");
            claveAdministrador = request.getParameter("clavePersona");  
            
            DAOpersona dao = new DAOpersona();
            List<Persona> datos = new ArrayList<Persona>();
        
            datos = (List<Persona>) dao.listarPorParametros(rutAdministrador, claveAdministrador);
            
            if (datos.size() > 0){
                request.setAttribute("datos",datos);
                request.getRequestDispatcher("index.jsp").forward(request, response);
            }else{
                request.setAttribute("Error", "No Hay Acceso");
                request.getRequestDispatcher("index.jsp").forward(request, response);               
            }            
        }       
       
            /* TODO output your page here. You may use following sample code. */
             out.println("<h1>" + msjError + "</h1>");  
        }
    }

    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
