package modelo;

import dao.Entrenador;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class DAOentrenador implements Operaciones{
    Dbconexion db = new Dbconexion();

    @Override
    public String insertar(Object obj) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<?> listar() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<?> listarParametro(String rut) {
        List<Entrenador> datos = new ArrayList<>(); //variable para cargar los datos.
        Connection con;
        PreparedStatement pst;
        ResultSet rs; //Permite recorrer el arreglo.
        String query = "SELECT * FROM tblentrenador WHERE rutEntrenador="+rut;
        //Se procede a armar la conexion...
        
        try {
            Class.forName(db.getDriver());
            //String de conexion.
            con = (Connection) DriverManager.getConnection(db.getUrl(), db.getUsuario(),db.getPass());
            pst = (PreparedStatement) con.prepareStatement(query);
            rs  = pst.executeQuery();
            //Recorremos el resultSet.
            while(rs.next()){
                //vamos a tener una fila del arreglo.
                datos.add(new Entrenador(rs.getString("rutEntrenador"),rs.getInt("codProfEntrenador")));
            }
        } catch (ClassNotFoundException |SQLException e) {
            String error = e.getMessage();
        }
        return datos;
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
