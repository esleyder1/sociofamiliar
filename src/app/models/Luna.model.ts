export default class Luna {

  fase?:string; 
  edad?:number;
  imagen?:string;
  numeroFase?:number;
  nombreFase?:string;
  nombreNasa?:string;
  nombreEsp?:string;
  inicio?:string;
  fin?:string;
  recomendaciones?:string;

  constructor(fase?: string, edad?: number, imagen?:string, numeroFase?:number, nombreFase?:string, nombreNasa?:string, nombreEsp?:string, inicio?:string, fin?:string, recomendaciones?:string,) {
    this.fase = fase;
    this.edad = edad;
    this.imagen = imagen;
    this.numeroFase = numeroFase;
    this.nombreFase = nombreFase;
    this.nombreNasa = nombreNasa;
    this.nombreEsp = nombreEsp;
    this.inicio = inicio;
    this.fin = fin;
    this.recomendaciones = recomendaciones;
  }

  obtenerFase(fase:string): string {

    
    let faseEspaniol:string = ""
    
    switch (fase) {
      case "First Quarter":
        faseEspaniol = "Cuarto creciente";
        break;
    
      case "Full":
        faseEspaniol = "Luna llena";
        break;
        
      case "Last Quarter":
        faseEspaniol = "Gibosa menguante";
        break;

      case "New":
        faseEspaniol = "Luna nueva";
        break;
    
      case "Waning Crescent":
        faseEspaniol = "Luna menguante";
        break;
        
      case "Waning Gibbous":
        faseEspaniol = "Gibosa menguante";
        break;  

      case "Waxing Crescent":
        faseEspaniol = "Luna creciente";
        break;  
      
      case "Waxing Gibbous":
        faseEspaniol = "Gibosa Creciente";
        break;                        
      default:
        console.log("default");
    }


      fase = ""
    return faseEspaniol;
  }

  obtenerFasePorDias(edad:number): any {
    const fases = [
      { "numeroFase": 1, "nombreFase": "Fase lunar 1", "nombreNasa" : "NYAFX A´TE LUUÇX", "nombreEsp": "LUNA BEBÉ", "inicio": "1", "fin": "3", "recomendaciones": "En esta luna, no se debe sembrar ninguna semilla por que la luna esta debil, esta con pereza. Las personas que ncen en esta luna, tienden a efermarse mucho duermen demasiado, mocosea mucho y no les gusta el trabajo. Pero les gusta la belleza natural y la belleza fisica. A estas personas se debe hacer remedio en epoca de luna sabia, (luna redonda) hacer actividades como correr, caminar y tejer. Las semillas sembradas en luna bebé crecen pero dan frutos."},
      { "numeroFase": 2, "nombreFase": "Fase lunar 2", "nombreNasa" : "A´TE LUUÇX PUTXTESA", "nombreEsp": "LUNA NIÑA", "inicio": "4", "fin": "6", "recomendaciones": "En esta luna, se puede sembrar hortalizas y flores. Las personas que nacen en esta luna, poseen belleza pero son afandos, inquietos, preguntan mucho, preguntan por curiosidad mas no por aprender, hacen los trabajos a la carrera, hacen los trabajos, tareas así no las hagan bien."},
      { "numeroFase": 3, "nombreFase": "Fase lunar 3", "nombreNasa" : "A´TE KNASA", "nombreEsp": "LUNA SEÑORITA", "inicio": "7", "fin": "9", "recomendaciones": "En esta luna, es bueno para despertar las semillas con remedios se echa hojas de lechero y desgranadero, raices de palantas duras para que las matas  echen buena raiz. Las personas nacidas en esta luna, son personas coquetas, son buenos para el deporte, para el trabajo, siempre estan enamorados. Son alegres, dicen chistes y les gusta molestar. Desde la luna 8 hasta el 23 es epoca para la siembra para todo tipo de plantas."},
      { "numeroFase": 4, "nombreFase": "Fase lunar 4", "nombreNasa" : "A´TE THEJEÇSA", "nombreEsp": "LUNA MADRE", "inicio": "10", "fin": "13", "recomendaciones": "En esta luna, las personas nacidas en esta epoca son fuertes fisica y espiritualmente, son reveldes, cuestionan mucho y no les gusta los consejos pero son buenos para el estudio, trabajo y deporte, esta luna es bueno para la siembra de semillas."},
      { "numeroFase": 5, "nombreFase": "Fase lunar 5", "nombreNasa" : "A´TE THE´SA", "nombreEsp": "LUNA SABIA", "inicio": "14", "fin": "16", "recomendaciones": "En esta luna, es muy facil de ver, en esta epoca la luna ilumina de 6 pm a 6 am, a esta luna se ofrenda flores, plantas y aguardiente, a esta luna se puede pedir sabiduria y conocimiento."},
      { "numeroFase": 6, "nombreFase": "Fase lunar 6", "nombreNasa" : "A´TE KI´LUUÇXIÇSA", "nombreEsp": "LUNA BRAVA", "inicio": "17", "fin": "20", "recomendaciones": "En esta luna, las personas que nacen en esta epoca de la luna, son bravas, se enborrachan y ya buscan problemas, estas personas se identifican porque tienen dos coronas, les gusta la estética, trabajos bonitos, bien echos. Esta luna es bueno para cortar el cabello, para cortar madera, para la flauta y la chonta tambien es buena luna, también es bueno para hacer cirugías (castrar animales)."},
      { "numeroFase": 7, "nombreFase": "Fase lunar 7", "nombreNasa" : "A´TE THAKWE PUTXKHESA", "nombreEsp": "LUNA TIERNA", "inicio": "21", "fin": "24", "recomendaciones": "En esta luna, las personas que nacen en esta epoca de la luna, son tranquilas, no tienen efan, son tiernas, amables, cariñosas, se caracterizan por saludar con abrazos y besos. No realizan los trabajos o tareas. A estas personas se equilibra con la luna sabia."},
      { "numeroFase": 8, "nombreFase": "Fase lunar 8", "nombreNasa" : "A´TE IKHNA PA´NXI", "nombreEsp": "LUNA SILENCIOSA", "inicio": "25", "fin": "29", "recomendaciones": "En esta luna, las personas que nacen en esta epoca de la luna son calladas, no hablan, no preguntan, estan solos, en la familia no hablan con todos, son buenos para la concentración, son personas que les gusta analizar. Estas personas no reclaman, simplemente actúan."},
    ]
    
    let fasePorEdadLunar:any
    fases.forEach(function (fase) {
      if(edad >= parseInt(fase.inicio) && edad <= parseInt(fase.fin)){
        fasePorEdadLunar = fase;
      }
    })   
    return fasePorEdadLunar;
  }
}
