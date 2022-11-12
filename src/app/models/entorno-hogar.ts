export class EntornoHogar {
  /**
   * @description ¿La vivienda es urbana o rural?
   */
  pregunta1: number = -1;
  /**
   * @description Departamento de Residencia
   */
  pregunta2: string = '';
  /**
   * @description Municipio de Residencia
   */
  pregunta3: string = '';
  /**
   * @description Localidad
   */
  pregunta4: string = '';
  /**
   * @description Corregimiento
   */
  pregunta5: string = '';
  /**
   * @description Comuna
   */
  pregunta6: string = '';
  /**
   * @description Dirección de la Vivienda
   */
  pregunta7: string = '';
  /**
   * @description Barrio
   */
  pregunta8: string = '';
  /**
   * @description ¿Los padres/cuidador cuentan con empleo formal?
   */
  pregunta9: number = -1;
  /**
   * @description ¿Los padres/cuidador vive del dia a dia?
   */
  pregunta10: number = -1;
  /**
   * @description ¿Los padres/cuidador vive de ayudas o subsidios del gobierno?
   */
  pregunta11: number = -1;
  /**
   * @description ¿Los padres/cuidador tiene un a condición laboral distintas a la anteriores? ¿Cual?
   */
  pregunta12: string = '';
  /**
   * @description ¿Cuál es el estrato de la vivienda?
   */
  pregunta13: number = -1;
  /**
   * @description Sí la respuesta anterior fue OTRO. Indicar ¿cual?
   */
  pregunta14: string = '';
  /**
   * @description El cuidado del niño, niña, está a cargo de:
   */
  pregunta15: number = -1;
  /**
   * @description SÍ LA RESPUESTA ANTERIOR FUE "OTRO", INDICAR CUAL
   */
  pregunta16: string = '';
  /**
   * @description ¿En este hogar se presenta violencia Intrafamiliar?
   */
  pregunta17: number = -1;
  /**
   * @description ¿Qué mecanismos utilizan como padres o cuidador para corregir al niño/ niña en casa?
   */
  pregunta18: number = -1;
  /**
   * @description SÍ LA RESPUESTA ANTERIOR FUE "OTRO", INDICAR CUAL
   */
  pregunta19: string = '';
  /**
   * @description ¿Existen riesgos de accidente en el espacio donde el menor vive tales como accidentes de tráfico por
   * estar la vivienda cerca a avenidas o carreteras con alto flujo vehicular?
   */
  pregunta20: number = -1;
  /**
   * @description ¿Existen riesgos de accidente en el espacio donde el menor vive tales como ahogamiento por estar el
   * niño/niña, expuesto a piscinas y tanques de almacenamiento de agua sin protección o existen acequias o ríos cerca de la vivienda?
   */
  pregunta21: number = -1;
  /**
   * @description ¿Existen riesgos de accidente en el espacio donde el menor vive tales como a exposición a quemaduras
   * por fuego al existir venta de combustible en la vivienda, fogones o estufas al alcance de los menores, fósforos al
   * alcance de los infantes?
   */
  pregunta22: number = -1;
  /**
   * @description ¿Existen riesgos de accidente en el espacio donde el menor vive tales como caídas por pisos muy
   * deslizantes, ventanas sin protección, escaleras, uso de patinetas y patines sin protección.?
   */
  pregunta23: number = -1;
  /**
   * @description ¿Existen riesgos de accidente en el espacio donde el menor vive tales como intoxicaciones no
   * intencionadas por medicamentos o sustancias químicas no protegidas?
   */
  pregunta24: number = -1;
  /**
   * @description ¿Existen riesgos de accidente en el espacio donde el menor vive tales como riesgo Eléctrico
   * por enchufes eléctrico sin protectores?
   */
  pregunta25: number = -1;
  /**
   * @description ¿Existen riesgos de accidente en el espacio donde el menor vive tales como atragantamiento por
   * estar expuesto a objetos pequeños u elementos que no corresponden con la edad.?
   */
  pregunta26: number = -1;
  /**
   * @description ¿Se cuenta con todas las medidas de prevención de accidentes en casa?
   */
  pregunta27: number = -1;
  /**
   * @description ¿Cuándo sale a trabajar a quien delega para el cuidado del menor?
   */
  pregunta28: number = -1;
  /**
   * @description SÍ LA RESPUESTA ANTERIOR FUE "OTRO", INDICAR CUAL
   */
  pregunta29: string = '';
  /**
   * @description ¿La vivienda cuenta con el servicio publico de energía eléctrica?
   */
  pregunta30: number = -1;
  /**
   * @description ¿La energía eléctrica es?
   */
  pregunta31: number = -1;
  /**
   * @description ¿La localidad cuenta con alcantarillado?
   */
  pregunta32: number = -1;
  /**
   * @description ¿Cuenta con disposición o eliminación de aguas servidas?
   */
  pregunta33: number = -1;
  /**
   * @description ¿Dónde Depositan las Excretas y Orinas?
   */
  pregunta34: number = -1;
  /**
   * @description ¿Existen redes de alcantarillado con disposición final de aguas residuales?
   */
  pregunta35: number = -1;
  /**
   * @description ¿Qué sistema de alcantarillado dispone la zona?
   */
  pregunta36: number = -1;
  /**
   * @description ¿Dónde descargan las aguas residuales de tu localidad?
   */
  pregunta37: number = -1;
  /**
   * @description ¿La localidad cuenta con disponibilidad de cobertura a través de una antena para el envío de señal
   * a equipos móviles, computadora y otros equipos de tipo privado que permita conectar con internet?
   */
  pregunta38: number = -1;
  /**
   * @description La tecnología de red disponible en la antena satélite que provee señal en la localidad a teléfonos
   * móviles, computadoras y otros dispositivos es
   */
  pregunta39: number = -1;
  /**
   * @description ¿La localidad cuenta con servicio de recolección de basuras?
   */
  pregunta40: number = -1;
  /**
   * @description Los días estipulados para recoger la basura son
   */
  pregunta41: number = -1;
  /**
   * @description ¿La localidad cuenta con servicio de acueducto?
   */
  pregunta42: number = -1;
  /**
   * @description ¿La fuente de agua que abastece en la localidad es directamente del rio por gravedad, con tratamiento (potable)?
   */
  pregunta43: number = -1;
  /**
   * @description ¿La fuente de agua que abastece en la localidad es directamente del rio por gravedad, sin tratamiento.?
   */
  pregunta44: number = -1;
  /**
   * @description ¿La fuente de agua que abastece en la localidad es de un pozo construido en casa?
   */
  pregunta45: number = -1;
  /**
   * @description ¿La fuente de agua que abastece en la localidad es de un pozo comunitario?
   */
  pregunta46: number = -1;
  /**
   * @description ¿La fuente de agua que abastece en la localidad es de una laguna tipo jaguey?
   */
  pregunta47: number = -1;
  /**
   * @description ¿La fuente de agua que abastece en la localidad es por recolección de aguas lluvia?
   */
  pregunta48: number = -1;
  /**
   * @description ¿La fuente de agua que abastece en la localidad es por carro tanque distribuidor de agua?
   */
  pregunta49: number = -1;
  /**
   * @description ¿La fuente de agua que abastece en la localidad la toma directamente de acequias o ríos?
   */
  pregunta50: number = -1;
  /**
   * @description ¿La fuente de agua que abastece en la localidad es la compra de agua empacada?
   */
  pregunta51: number = -1;
  /**
   * @description Sí la fuente de agua que abastece en la localidad es otra diferente a las anteriores mencionadas. Indicar ¿Cuál?
   */
  pregunta52: string = '';
  /**
   * @description Si responde que la fuente de obtención del agua es por carro tanque, preguntar ¿el tanque del vehículo es?
   */
  pregunta53: number = -1;
  /**
   * @description ¿Cuenta con monitorio sanitario de calidad el agua distribuida por carro tanque?
   */
  pregunta54: number = -1;
  /**
   * @description ¿Cuantas veces a la semana el carro tanque abastece de agua potable a la localidad?
   */
  pregunta55: number = -1;
  /**
   * @description ¿El agua que llega hasta el domicilio es apta para el consumo humano?
   */
  pregunta56: number = -1;
  /**
   * @description Para la preparación de alimentos, ¿utilizan agua potable?
   */
  pregunta57: number = -1;
  /**
   * @description ¿Cuenta con gas natural conectado a la red pública?
   */
  pregunta58: number = -1;
  /**
   * @description ¿Como es el funcionamiento de gas y oxigeno que llega a su casa cuando enciende la estufa?
   */
  pregunta59: number = -1;
  /**
   * @description Si es una región agrícola- Preguntar:¿Conoce la calidad de niveles de contaminación del agua que
   * disponen para el riego de los cultivos en su localidad?
   */
  pregunta60: number = -1;
  /**
   * @description ¿Conoce los niveles permisibles de ruido en áreas comunes?
   */
  pregunta61: number = -1;
  /**
   * @description ¿Conoce de los niveles de contaminación ambiental en cuanto a: aire, olores, partículas, humo en la localidad?
   */
  pregunta62: number = -1;
  /**
   * @description ¿Conoce si la autoridad ambiental ha realizado caracterización del agua, aire y suelo a fin de
   * determinar los niveles de contaminación de la localidad?
   */
  pregunta63: number = -1;
  /**
   * @description ¿Sabe si la autoridad ambiental competente ha realizado campañas de sensibilización sobre niveles permisibles de ruido?
   */
  pregunta64: number = -1;
  /**
   * @description ¿Están haciendo gestión integral de residuos sólidos?
   */
  pregunta65: number = -1;
  /**
   * @description Si contesta sí, preguntar ¿Qué tipo de residuos gestionan?
   */
  pregunta66: number = -1;
  /**
   * @description ¿Ha recibido este hogar capacitación o entrenamiento en el manejo de residuos sólidos por la autoridad
   * competente o institución donde asiste el niño/niña?
   */
  pregunta67: number = -1;
  /**
   * @description Si la respuesta anterior es sì. ¿Qué entidad le brindó la capacitación?
   */
  pregunta68: number = -1;
  /**
   * @description SÍ LA RESPUESTA ANTERIOR FUE "OTRO", INDICAR CUAL
   */
  pregunta69: string = '';
  /**
   * @description Para la eliminación o disposición final de basuras dispone la localidad de
   */
  pregunta70: number = -1;
  /**
   * @description ¿Conoce este hogar los aprovechamientos de los residuos sólidos?
   */
  pregunta71: number = -1;
  /**
   * @description ¿Conoce este hogar la disposición final de residuos no aprovechables?
   */
  pregunta72: number = -1;
  /**
   * @description ¿Ha recibido este hogar recomendaciones de prevención de fauna nociva y fumigaciones del ente de
   * salud municipal, departamental en prevención de: Mosquito Aedes, mosquito anopheles, moscas, ratas, cucarachas e
   * insectos que contaminan los alimentos como la polilla mediterránea de la harina, Gusanillo del queso, gorgojo del
   * frijol, ¿escarabajo de la despensa y otros?
   */
  pregunta73: number = -1;
  /**
   * @description ¿Cuenta la localidad con manejo de residuos peligrosos, procesos de minimización, reciclaje,
   * recolección, almacenamiento, tratamiento, transporte y disposición final de envases de agroquímicos, plaguicidas,
   * baterías y otros de tipo peligrosos?
   */
  pregunta74: number = -1;
  /**
   * @description ¿Vive en condiciones de hacinamiento?
   */
  pregunta75: number = -1;
  /**
   * @description Sí hay hacinamiento, ¿Cuántas familias habitan en ella?
   */
  pregunta76: string = '';
  /**
   * @description Sí hay hacinamiento, ¿Número total de personas que habitan?
   */
  pregunta77: string = '';
  /**
   * @description Sí hay hacinamiento, ¿De cuantas habitaciones dispone la vivienda?
   */
  pregunta78: string = '';
  /**
   * @description ¿La vivienda está adaptada, exenta de barreras en su entorno físico y posibilita vida independiente a
   * personas con discapacidad o movilidad reducida?
   */
  pregunta79: number = -1;
  /**
   * @description ¿Con que operador?
   */
  pregunta80: string = '';
}
