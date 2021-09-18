export default class Ninio {
  id?: string;
  /*INFORMACIÓN DE LA UNIDAD DE SERVICIO*/
  nombreUds?: string;
  codigoUds?: string;
  servicioUds?: string;
  /*INFORMACIÓN DEL USUARIO (NIÑA/NIÑO)*/
  fechaNacimiento?: string;
  primerNombre?: string;
  segundoNombre?: string;
  pimerApellido?: string;
  segundoApellido?: string;
  tipoDocumento?: string;
  nuip?: string;
  crtPertenece?: string;
  benHablaCrtPertenece?: string;
  /*Datos de contacto del Adulto Responsable o Acudiente*/
  nombreAcudiente?: string;
  parentescoAcudiente?: string;
  celularAcudiente?: string;
  /*SALUD*/
  perteneceSGSSS?: string;
  razonSGSSS?: string;
  nombreEPS?: string;
  cvActualizado?: string;
  cvNoActualizadoRazon?: string;
  controlSaludOral?: string;
  controlSaludOralMotivo?: string;
  valoracionOftamologica?: string;
  valoracionAuditiva?: string;
  motivoConsultaExterna?: string;
  alergico?: string;
  alergicoMedicamento?: string;
  /*NUTRICIÓN Y MEDIDAS ANTROPOMETRICAS*/
  carneCYD?: string;
  peso?: string;
  talla?: string;
  dietaEspecial?: string;

  /*INFORMACIÓN PARA NIÑAS Y NIÑOS MENORES DE 6 MESES*/

  /*INFORMACIÓN PARA NIÑAS Y NIÑOS ENTRE 6 MESES Y 1 AÑO*/

  /*INFORMACIÓN PARA NIÑAS Y NIÑOS MAYORES DE 1 AÑO*/

  /*DISCAPACIDAD*/

  /*GRADO DE LIMITACIÓN EN LA EJECUCIÓN DE ACTIVIDADES, DESDE LA INDEPENDENCIA FUNCIONAL*/

  /**/

  
  description?: string;
  published?: boolean;
  title?: string;;

  constructor(fechaNacimiento?: string) {
    this.fechaNacimiento = fechaNacimiento;
  }
}
