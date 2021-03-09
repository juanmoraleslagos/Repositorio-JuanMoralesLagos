
package modelo;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;
import dao.Persona;
import static java.lang.Character.UnicodeBlock.forName;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class DAOpersona implements Operaciones {
    Dbconexion db = new Dbconexion();

    @Override
    public String insertar(Object obj){
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }       
        
    

    @Override
    public List<?> listar() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<?> listarParametro(String parametro) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<?> listarPorParametros(String rut, String clave) {
     
        List<Persona> datos = new ArrayList<>(); //variable para cargar los datos del SELECT
        Connection con;
        PreparedStatement pst;
        ResultSet rs;
        String query = "SELECT rutPersona,clavePersona FROM tblpersona WHERE rutPersona ='"+rut+"'AND clavePersona='"+clave+"'";
        //armar la conexion...
        try {
            Class.forName(db.getDriver());
            
            //string de conexiob...
            con = (Connection) DriverManager.getConnection(db.getUrl(),db.getUsuario(),db.getPass());
            pst = (PreparedStatement) con.prepareStatement(query);//define lo que tiene que hacer y donde ir.
            rs  = pst.executeQuery();
            
            //recorriendo el resultSet.
            while(rs.next()){
                //vamos a tener una "fila" del arreglo.
                datos.add(new Persona(rs.getString("rutPersona"),rs.getString("clavePersona")));                
            }
            con.close();
            
        } catch (ClassNotFoundException | SQLException e) {
           
        }        
        return datos;
    }

    @Override
    public String actualizar(Object obj) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String eliminar(Object obj) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public List<Persona> listarPorParametros(String datos, List<Persona> datos0) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
