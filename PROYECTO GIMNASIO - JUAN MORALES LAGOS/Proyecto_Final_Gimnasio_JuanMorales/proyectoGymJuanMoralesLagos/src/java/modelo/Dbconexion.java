package modelo;

public class Dbconexion {
    
    private String driver;
    private String url;
    private String usuario;
    private String pass;
    
    public Dbconexion(){
        this.driver  = "com.mysql.jdbc.Driver";
        this.url     = "jdbc:mysql://localhost:3306/bdgym";
        this.usuario = "root";
        this.pass    = "";
    }

    public String getDriver() {
        return driver;
    }

    public String getUrl() {
        return url;
    }

    public String getUsuario() {
        return usuario;
    }

    public String getPass() {
        return pass;
    }
    
}
