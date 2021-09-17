import * as moment from 'moment';

export default class Sol {
  id?:number;
  nombreEpoca?:string; 
  nombreNasa?:string;
  nombreEsp?:string;
  fecha?:string;
  fechaInicio?:string;
  fechaFin?:string;
  narracion?:string;

  constructor(nombreEpoca?: string, nombreNasa?: string, nombreEsp?:string, fecha?:string
    , fechaInicio?:string, fechaFin?:string, narracion?:string) {
    this.nombreEpoca = nombreEpoca;
    this.nombreNasa = nombreNasa;
    this.nombreEsp = nombreEsp;
    this.fecha = fecha;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.narracion = narracion;
  }

  datos(fechaNacimiento:string) {

    let epocaNoEncontrada = false;

    const epocas = [
      { "numeroEpoca": 1, "nombreEpoca": "Primera Época", "nombreNasa" : "MEEZ A´TE WALA", "nombreEsp": "Tiempo grande de sol picante", "fecha": "21 de Diciembre al 20 de Marzo", "fechaInicio": "21/12", "fechaFin": "20/03", "narracion": "La Primera época solar se caracteriza por tener los días más cortos que el resto del año. Durante éste periodo la luna suele tener más fuerza que el sol. Es el momento del año donde se realiza el ritual mayor del fuego Ipxh Fxizenxi, así mismo, se deben realizar los rituales de recogida de luciérnagas."},
      { "numeroEpoca": 2, "nombreEpoca": "Segunda Época", "nombreNasa" : "NUS A´TE WALA", "nombreEsp": "Tiempo grande de aguacero suave", "fecha": "21 de Marzo al 20 de Junio", "fechaInicio": "21/03", "fechaFin": "20/06", "narracion": "Es la época del sol joven. Sol que asciende por el oriente acompañado de una luna que le ayuda a mantener el equilibrio, puesto que las horas de luz son equiparables a las de la noche, así mismo las fuerzas frías son equiparables a las calientes. Éste es un periodo de equidad, por lo cual ocurre el equinoccio de invierno. Durante este tiempo, que transcurre entre el 21 de marzo y el 21 de Junio, se suelen limpiar los suelos y hacer los pagamentos en los lugares sagrados."},
      { "numeroEpoca": 3, "nombreEpoca": "Tercera Época", "nombreNasa" : "EZ A´TE WALA", "nombreEsp": "Tiempo grande de sol con viento", "fecha": "21 de Junio al 20 de Septiembre", "fechaInicio": "21/06", "fechaFin": "20/09", "narracion": "Ésta es la tercera época del año, momento en el cual el sol se encuentra más maduro y las fuerzas frías y Calientes se encuentran más equilibradas. Es a su vez la época más larga del año y con mayor fuerza solar, es el momento propicio para realizar revitalizaciones."},
      { "numeroEpoca": 4, "nombreEpoca": "Cuarta Época", "nombreNasa" : "NUS A´TE WALA", "nombreEsp": "Tiempo grande de aguacero fuerte", "fecha": "21 de Septiembre al 20 de Diciembre", "fechaInicio": "21/09", "fechaFin": "20/12", "narracion": "Entre el 21 de Septiembre y el 20 de Diciembre el sol comienza a descender. Para completar su ciclo de derecha a izquierda, desde los pies de la tierra hasta su cabeza de ida y vuelta. Durante éste periodo la luna toma más fuerza y la energía del sol tiende a ser fría debido a que llega el equinoccio de invierno, que trae consigo a las aves migratorias y a los espíritus. Por esta razón se suele celebrar el ritual mayor del Çxapuç en Noviembre."},
  
    ]
    let epocaSol:any;
    epocas.forEach(function (epoca) {

      let fNac = moment(fechaNacimiento).format('DD/MM')
      var compareDate = moment(fNac, "DD/MM");
      var startDate   = moment(epoca.fechaInicio, "DD/MM");
      var endDate     = moment(epoca.fechaFin, "DD/MM"); 

      //console.log(compareDate.isBetween(startDate, endDate))
      
      if(compareDate.isBetween(startDate, endDate)){
        epocaNoEncontrada = false;
        epocaSol = epoca
      }

    });
    if(epocaSol == undefined){
      epocaSol = epocas[0]
    }
    return epocaSol


  }

  
}
