
package modelo;

import java.util.List;


public interface Operaciones {
    public String insertar(Object obj);
    public List<?> listar();
    public List<?> listarParametro(String parametro);
    public List<?> listarPorParametros(String parametro1,String parametro2);
    public String actualizar(Object obj);
    public String eliminar (Object obj);
    
    
}
