package dao;

public class Entrenador {
    private String rutEntrenador;
    private int    codProfEntrenador;

    public Entrenador() {
    }

    public Entrenador(String rutEntrenador, int codProfEntrenador) {
        this.rutEntrenador = rutEntrenador;
        this.codProfEntrenador = codProfEntrenador;
    }

    public String getRutEntrenador() {
        return rutEntrenador;
    }

    public void setRutEntrenador(String rutEntrenador) {
        this.rutEntrenador = rutEntrenador;
    }

    public int getCodProfEntrenador() {
        return codProfEntrenador;
    }

    public void setCodProfEntrenador(int codProfEntrenador) {
        this.codProfEntrenador = codProfEntrenador;
    }
    
    
}
