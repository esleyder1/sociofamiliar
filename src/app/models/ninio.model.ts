export default class Ninio {
  id?: string;
  /*INFORMACIÓN DE LA UNIDAD DE SERVICIO*/
  nombreUds?: string;
  codigoUds?: string;
  servicioUds?: string;
  /*INFORMACIÓN DEL USUARIO (NIÑA/NIÑO)*/
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

  /*NUTRICIÓN Y MEDIDAS ANTROPOMETRICAS*/

  /*INFORMACIÓN PARA NIÑAS Y NIÑOS MENORES DE 6 MESES*/

  /*INFORMACIÓN PARA NIÑAS Y NIÑOS ENTRE 6 MESES Y 1 AÑO*/

  /*INFORMACIÓN PARA NIÑAS Y NIÑOS MAYORES DE 1 AÑO*/

  /*DISCAPACIDAD*/

  /*GRADO DE LIMITACIÓN EN LA EJECUCIÓN DE ACTIVIDADES, DESDE LA INDEPENDENCIA FUNCIONAL*/

  /**/

  
  description?: string;
  published?: boolean;
}
