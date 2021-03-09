
package modelo;

import dao.Profesion;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class DAOprofesion implements Operaciones{
    Dbconexion db = new Dbconexion();

    @Override
    public String insertar(Object obj) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Profesion> listar() {
      List<Profesion> datosprofesion = new ArrayList<>(); //---> Variable para cargar los datos del Select.
      Connection con;
      PreparedStatement pst;
      ResultSet rs; //--> //Result Set permite recorrer el arreglo.
      String query = "SELECT * FROM tblprofesion";
      
//--> Se procede a armar la conexion.
        try {
            Class.forName(db.getDriver());
            
          //--> String de conexion.
            con = (Connection) DriverManager.getConnection(db.getUrl(),db.getUsuario(),db.getPass());
            pst = (PreparedStatement) con.prepareStatement(query);
            rs  = pst.executeQuery();
            
            //--->Procedo a recorrer el arreglo.
            while(rs.next()){
                
                //--> vamos a recuperar una fila del arreglo.
                datosprofesion.add(new Profesion(rs.getInt("idProfesion"),rs.getString("nombreProfesion")));                
            }
        } catch (ClassNotFoundException | SQLException e) {
            String error = e.getMessage();
        }
    return datosprofesion;    
    }
    @Override
    public List<?> listarParametro(String parametro) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<?> listarPorParametros(String parametro1, String parametro2) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String actualizar(Object obj) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String eliminar(Object obj) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
