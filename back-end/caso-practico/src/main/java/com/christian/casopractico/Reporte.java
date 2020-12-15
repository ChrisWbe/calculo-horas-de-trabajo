package com.christian.casopractico;

import javax.persistence.*;

/**
 *
 * @author Christian
 */

@Entity
@Table(name="reportes")
public class Reporte {
   
    @Column
    @Id
    private String idTecnico;
    @Column
    private String idServicio;
    @Column
    private int fechaInicio;
    @Column
    private int fechaFin;

    public String getIdTecnico() {
        return idTecnico;
    }

    public void setIdTecnico(String idTecnico) {
        this.idTecnico = idTecnico;
    }

    public String getIdServicio() {
        return idServicio;
    }

    public void setIdServicio(String idServicio) {
        this.idServicio = idServicio;
    }

    public int getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(int fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public int getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(int fechaFin) {
        this.fechaFin = fechaFin;
    }
    
    
    
}
