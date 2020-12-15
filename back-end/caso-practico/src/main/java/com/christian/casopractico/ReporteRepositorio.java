/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.christian.casopractico;

import org.springframework.data.repository.Repository;

/**
 *
 * @author Christian
 */
public interface ReporteRepositorio extends Repository<Reporte, String>{
    Reporte findAll();
    Reporte save(Reporte r);
    //void delete();
}
