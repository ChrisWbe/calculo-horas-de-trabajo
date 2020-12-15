
package com.christian.casopractico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Christian
 */
@Service
public class ReporteServiceImpl implements ReporteService{
    @Autowired
    private ReporteRepositorio repositorio;
    @Override
    public Reporte listar() {
        return repositorio.findAll();
    }

    @Override
    public Reporte add(Reporte r) {
       return repositorio.save(r);
    }


}
