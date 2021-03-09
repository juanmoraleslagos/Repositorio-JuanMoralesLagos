
package controlador;

import dao.Entrenador;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.DAOentrenador;

/**
 *
 * @author juanm
 */
public class ProcesoIngresarEntrenador extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
                   
           //Validar de datos recibidos del formulario.
           if (request.getParameter("rutEntrenador").trim().equalsIgnoreCase("")){
               request.getRequestDispatcher("/errorIngresoRut.jsp").forward(request, response);
           
           }else if (request.getParameter("rutEntrenador").length() < 9 | request.getParameter("rutEntrenador").length() > 11){
               request.getRequestDispatcher("/errorLongitudRut.jsp").forward(request, response);
          
           }else if (request.getParameter("nombreEntrenador").trim().equalsIgnoreCase("")){
               request.getRequestDispatcher("/errorIngresoNombre.jsp").forward(request, response);
           
           }else if (request.getParameter("apellidoPaternoEntrenador").trim().equalsIgnoreCase("")){
               request.getRequestDispatcher("/errorIngresoApellidoPaterno.jsp").forward(request, response);
               
           }else if (request.getParameter("apellidoMaternoEntrenador").trim().equalsIgnoreCase("")){
               request.getRequestDispatcher("/errorIngresoApellidoMaterno.jsp").forward(request, response);
           
           }else if (request.getParameter("profesionEntrenador").equalsIgnoreCase("")){
               request.getRequestDispatcher("/errorIngresoProfesion.jsp").forward(request, response);
           
           }else if (request.getParameter("claveEntrenador").trim().equalsIgnoreCase("")){
               request.getRequestDispatcher("/errorIngresoClave.jsp").forward(request, response);
           
           }else if ((request.getParameter("claveEntrenador").length() < 5) | (request.getParameter("claveEntrenador").length() > 5)){
               request.getRequestDispatcher("/errorExtencionClave.jsp").forward(request, response);
           
           }else if (request.getParameter("claveEntrenadorReingreso").trim().equalsIgnoreCase("")){
               request.getRequestDispatcher("/errorReingresoClave.jsp").forward(request, response);
           
           }else if ((request.getParameter("claveEntrenadorReingreso").length() < 5) | (request.getParameter("claveEntrenadorReingreso").length() > 5)){
               request.getRequestDispatcher("/errorExtencionClave.jsp").forward(request, response);
           
           }else if (!request.getParameter("claveEntrenador").equals(request.getParameter("claveEntrenadorReingreso"))){
              request.getRequestDispatcher("/errorClavesDistintas.jsp").forward(request, response);
           
           }else {
             
           //Rescatando variables a utilizar en el registro de tblpersona.
           String rutPersona             = request.getParameter("rutEntrenador");
           String nombrePersona          = request.getParameter("nombreEntrenador");
           String apellidoPaternoPersona = request.getParameter("apellidoPaternoEntrenador");
           String apellidoMaternoPersona = request.getParameter("apellidoMaternoEntrenador");
           int codigoEstadoPersona       = 1;
           String clavepersona           = (request.getParameter("claveEntrenador"));
           
           //Declarando Variable a Utilizar en registrar datos tblentrenador.
           String rutEntrenador = "";
           int  codProfEntrenador = 0;
           
           //Primero: Verificar si rut del Entrenador esta en tblpersona...
           
           RequestDispatcher requestDispatcher;
           Entrenador entrenador = new Entrenador();
           
           DAOentrenador daoentrenador = new DAOentrenador();
           
           //recibiendo el rut a buscar en tblentrenador...
           String rutBuscarEntrenador;
           rutBuscarEntrenador = request.getParameter("rutEntrenador");
           List<Entrenador> datos = new ArrayList<>();
           datos = (List<Entrenador>) daoentrenador.listarParametro(rutBuscarEntrenador);
           request.setAttribute("respuestaDatos",datos);
           
           requestDispatcher = request.getRequestDispatcher("vistaRegistrarEntrenador.jsp");
           requestDispatcher.forward(request, response);   
           
           }       
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
