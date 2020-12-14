import {IServicio} from 'src/app/models/IServicio';
export class Servicio{
    private _idTecnico:String
    private _idServicio:String
    private _fechaInicio:Date
    private _fechaFin:Date
    

    constructor(obj:IServicio){
        this._idTecnico=obj._idTecnico
        this._idServicio=obj._idServicio
        this._fechaInicio=obj._fechaInicio
        this._fechaFin=obj._fechaFin
    }

    validarFecha():boolean{
        return this._fechaInicio.getTime()<this._fechaFin.getTime()
    }




}