package dao;

public class Persona {
    
   private String rutPersona;
   private String nombrePersona;
   private String apePatPersona;
   private String apeMatePersona;
   private int    codigoEstadoPersona;
   private String clavePersona;

    public Persona() {
    }

    public Persona(String rutPersona, String clavePersona) {
        this.rutPersona = rutPersona;
        this.clavePersona = clavePersona;
    }

        public String getRutPersona() {
        return rutPersona;
    }

    public void setRutPersona(String rutPersona) {
        this.rutPersona = rutPersona;
    }

    public String getNombrePersona() {
        return nombrePersona;
    }

    public void setNombrePersona(String nombrePersona) {
        this.nombrePersona = nombrePersona;
    }

    public String getApePatPersona() {
        return apePatPersona;
    }

    public void setApePatPersona(String apePatPersona) {
        this.apePatPersona = apePatPersona;
    }

    public String getApeMatePersona() {
        return apeMatePersona;
    }

    public void setApeMatePersona(String apeMatePersona) {
        this.apeMatePersona = apeMatePersona;
    }

    public int getCodigoEstadoPersona() {
        return codigoEstadoPersona;
    }

    public void setCodigoEstadoPersona(int codigoEstadoPersona) {
        this.codigoEstadoPersona = codigoEstadoPersona;
    }

    public String getClavePersona() {
        return clavePersona;
    }

    public void setClavePersona(String clavePersona) {
        this.clavePersona = clavePersona;
    }
   
   
       

    
    
}
