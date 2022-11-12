export class EntornoSalud {
  /**
   * @description ¿ A qué régimen de salud se encuentra afiliado?
   */
  pregunta1: number = -1;
  /**
   * @description Sí está en régimen subsidiado ¿ A qué grupo del Sisbén IV pertenece?
   */
  pregunta2: number = -1;
  /**
   * @description ¿En que EPS-S se encuentra afiliado?
   */
  pregunta3: number = -1;
  /**
   * @description Sí la respuesta anterior fue OTRA, indicar cual
   */
  pregunta4: string = '';
  /**
   * @description ¿Asistió a controles prenatales?
   */
  pregunta5: number = -1;
  /**
   * @description ¿A cuantos controles asistió?
   */
  pregunta6: number = -1;
  /**
   * @description ¿Cuántas ecografías le realizaron?
   */
  pregunta7: number = -1;
  /**
   * @description Los controles médicos durante el embarazo fueron atendidos por el área de:
   */
  pregunta8: number = -1;
  /**
   * @description La asistencia al parto fue:
   */
  pregunta9: number = -1;
  /**
   * @description ¿Considera que el niño/niña vive y disfruta del nivel más alto de salud?
   */
  pregunta10: number = -1;
  /**
   * @description ¿El niño, niña, goza y mantiene un estado nutricional adecuado?
   */
  pregunta11: number = -1;
  /**
   * @description ¿La EPS - S donde está afiliado el niño/niña presta servicios de salud en habilitación infantil
   * integral en la localidad donde vive, que incluya servicios de fonoaudiología, fisioterapia, sicología, terapia
   * ocupacional, neuropediatría, psiquiatría infantil y pediatría?
   */
  pregunta12: number = -1;
  /**
   * @description ¿El centro de salud de la localidad dispone de infraestructura adecuada y accesible diseñada desde
   * la perspectiva del diseño universal para la atención de población infantil con discapacidad, previo a la
   * identificación de alteraciones del desarrollo, que permita atender oportunamente a los niños/niñas en condiciones de igualdad?
   */
  pregunta13: number = -1;
  /**
   * @description ¿Ha recibido el niño, niña, valoración integral por grupo interdisciplinario por sicología,
   * fonoaudiología, fisioterapia, ocupacional, neuropediatría, antes de ingresar a centros de estimulación temprana,
   * educación inicial o programas del ICBF a fin de identificar retrasos u alteraciones del neurodesarrollo para su intervención oportuna?
   */
  pregunta14: number = -1;
  /**
   * @description ¿Al niño/niña, le han aplicado escalas del desarrollo o algún test psicométrico estandarizado y
   * validado en Colombia para de identificar objetivamente alteraciones del neurodesarrollo a fin de realizar intervenciones oportunas?
   */
  pregunta15: number = -1;
  /**
   * @description Sí la respuesta anterior es sí, preguntar. ¿Cual?
   */
  pregunta16: string = '';
  /**
   * @description Sí la respuesta anterior es sí, preguntar. ¿Cuál fue el diagnostico emitido?
   */
  pregunta17: string = '';
  /**
   * @description ¿Reporta valoración de la vía auditiva, mediante potenciales evocados auditivos, de tronco encefálico?
   */
  pregunta18: number = -1;
  /**
   * @description ¿Reporta valoración mediante potenciales visuales evocados?
   */
  pregunta19: number = -1;
  /**
   * @description ¿Conoce usted los valores de referencia de Zinc( Zn) y de cobre (Cu) séricos en el infante?
   */
  pregunta20: number = -1;
  /**
   * @description Si el niño/niña nació en el año 2020, preguntar ¿Cuenta con certificado de tamizaje neonatal
   * verificable a través de una página disponible por la EPS?
   */
  pregunta21: number = -1;
  /**
   * @description Escala Afectiva: ¿Cuenta el niño/niña con valoración psicoafectiva que permita medir niveles de
   * ansiedad y depresión infantil?
   */
  pregunta22: number = -1;
  /**
   * @description ¿Cómo padre o cuidador conoce la percepción que tiene el niño, niña, respecto a su funcionamiento
   * físico, psicológico y social, reportado mediante una valoración a través de una escala de vida?
   */
  pregunta23: number = -1;
  /**
   * @description ¿Alguna vez su niño/ niña fue víctima de abuso sexual?
   */
  pregunta24: number = -1;
  /**
   * @description ¿El niño/niña recibió o recibe tratamiento sicológico?
   */
  pregunta25: number = -1;
  /**
   * @description ¿Dentro del programa que se presta a la mujer gestante existe espacios adecuados y accesibles
   * diseñados desde la perspectiva del diseño universal o diseño para todos que permita seguridad y comodidad?
   */
  pregunta26: number = -1;
  /**
   * @description ¿Conoce la talla de la niña /niño?
   */
  pregunta27: number = -1;
  /**
   * @description ¿Conoce el perímetro cefálico de la niña /niño?
   */
  pregunta28: number = -1;
  /**
   * @description ¿Conoce el índice de masa muscular de la niña /niño?
   */
  pregunta29: number = -1;
  /**
   * @description Al ingresar el infante a los servicios de programas de educación inicial del ICBF y otros, ¿se miden
   * las frecuencias: Cardiaca, presión arterial, Oximetría de pulso, capacidad y condición aeróbica?
   */
  pregunta30: number = -1;
  /**
   * @description ¿El niño/ niña asiste a controles periódicos por odontopediatría?
   */
  pregunta31: number = -1;
  /**
   * @description ¿El centro de salud de la localidad cuenta con asistencia médica y odontológica permanente?
   */
  pregunta32: number = -1;
  /**
   * @description ¿Los profesionales contratados para el servicio médico y odontológico cuentan con idoneidad y
   * experiencia relacionada con el área?
   */
  pregunta33: number = -1;
  /**
   * @description Los médicos y odontólogos que prestan servicio en la localidad son
   */
  pregunta34: number = -1;
  /**
   * @description ¿El centro de salud centro de salud cuenta con laboratorio clínico de primer nivel?
   */
  pregunta35: number = -1;
  /**
   * @description Si responde no, preguntar: ¿Dónde direccionan inicialmente a las personas para brindar el servicio de
   * laboratorio?
   */
  pregunta36: string = '';
  /**
   * @description ¿Dispone el centro de salud del servicio de ambulancia permanente en su localidad?
   */
  pregunta37: number = -1;
  /**
   * @description Si responde no, preguntar: ¿De qué manera acceden a un transporte para trasladar a las personas a un
   * centro médico de salud?
   */
  pregunta38: number = -1;
  /**
   * @description Si la respuesta anterior, fue OTRO. Diga cual
   */
  pregunta39: string = '';
  /**
   * @description ¿Considera que el estado de la malla vial de acceso al perímetro urbano presenta dificultades y
   * genera un alto índice de accidentes en la zona?
   */
  pregunta40: number = -1;
  /**
   * @description Si responde si, preguntar el estado vial
   */
  pregunta41: number = -1;
  /**
   * @description ¿Existen barrera de accesibilidad física y social, en la localidad que limitan el desarrollo
   * biopsicomotriz de los niños/niñas, limitando la oportunidad de participar y disfrutar con los demás en espacios
   * de ocio y juegos en parques infantiles por no estar diseñados desde la perspectiva del diseño universal o diseño para Todos?
   */
  pregunta42: number = -1;
}
