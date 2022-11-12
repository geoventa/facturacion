export class EntornoEducativo {
  /**
   * @description El niño/ niña asiste a un centro de educación inicial formal en alguno de los grados de:
   */
  pregunta1: number = -1;
  /**
   * @description Sí la respuesta anterior es no, ¿Cuál es la causa por la cual el niño/ niña no estudia?
   */
  pregunta2: number = -1;
  /**
   * @description ¿El Hogar Infantil, institución educativa dispone de Baterías sanitarias accesibles adaptadas a la
   * altura del infante, diseñadas desde la perspectiva del diseño universal o diseño para todos, que favorezca la
   * independencia y disminuya riesgos de accidentes y no vulnere la dignidad humana?
   */
  pregunta3: number = -1;
  /**
   * @description ¿El Hogar infantil/o institución educativa dispone de suficiente material didáctico y juguetes
   * accesibles con Diseño para Todos, que permitan ser usados por todos los niños y, se tiene en cuenta los diferentes
   * tipos de discapacidad (sensorial, cognitiva y física), a fin de favorecer el desarrollo biopsicomotriz, la igualdad
   * y la accesibilidad como un derecho autónomo?
   */
  pregunta4: number = -1;
  /**
   * @description ¿Se promueve al interior del hogar infantil y/o, institución educativa el arte teniendo en cuenta la
   * cultura, de manera que, se salvaguarde la identidad cultural del territorio?
   */
  pregunta5: number = 0;
  /**
   * @description ¿En promedio qué tiempo permanece en el hogar infantil o en la Institución educativa?
   */
  pregunta6: number = -1;
  /**
   * @description ¿El hogar infantil y/o programa del ICBF, cuenta con un proyecto institucional que contemple
   * estrategias de promoción de la salud como practica socio cultural en la primera infancia?
   */
  pregunta7: number = -1;
  /**
   * @description ¿Cuál es el Nivel académico de la madre comunitaria o docente?
   */
  pregunta8: number = -1;
  /**
   * @description SÍ LA RESPUESTA ANTERIOR FUE "OTRO", INDICAR CUAL
   */
  pregunta9: string = '';
  /**
   * @description La modalidad FAMI y hogares tradicionales, Cumplen con los perfiles del talento humano que se
   * requieren para la atención de las niñas, niños, y las mujeres gestantes con un enfoque diferencial.
   */
  pregunta10: number = -1;
  /**
   * @description ¿Cuál es el tipo de profesión nivel de estudios de la madre cuidador y/o docente de educación inicial?
   */
  pregunta11: number = -1;
  /**
   * @description SÍ LA RESPUESTA ANTERIOR FUE "OTRO", INDICAR CUAL
   */
  pregunta12: string = '';
  /**
   * @description Cómo Madre comunitaria cuidador y/o docente de aula de atención integral a la primera infancia.
   * ¿Cuenta con formación en competencias de inclusión  desde la perspectiva del diseño universal de los aprendizajes
   * para orientar la atención integral a la primera infancia?
   */
  pregunta13: number = -1;
  /**
   * @description ¿Sabe o conoce lo que es un sistema de certificación y acreditación de calidad de la prestación de
   * servicios en atención integral a la primera infancia?
   */
  pregunta14: number = -1;
  /**
   * @description ¿Tienen niños, niñas con discapacidad vinculados a las unidades de servicio de hogares de bienestar
   * y/o institución educativa?
   */
  pregunta15: number = -1;
  /**
   * @description ¿Cuántos niños con discapacidad tienen caracterizados?
   */
  pregunta16: string = '';
  /**
   * @description ¿Cuántos niños, niñas  con discapacidad  les permiten atender por cada grupo asignado en el hogar
   * infantil o  centro educativo formal?
   */
  pregunta17: string = '';
  /**
   * @description ¿Cómo madre comunitaria y/o docente de aula de atención integral a la primera infancia. ¿Tiene
   * conocimiento sobre los diferentes tipos de discapacidad
   */
  pregunta18: number = -1;
  /**
   * @description ¿Los niños/niñas identificados con discapacidad cuentan certificación de discapacidad?
   */
  pregunta19: number = -1;
  /**
   * @description Como madre comunitaria, y/o   docente de aula de atención integral a la primera infancia.
   * ¿ha participado en mesas de trabajo en la localidad, para la formulación del plan de desarrollo municipal, a fin
   * de incluir las necesidades específicas de los niños/niñas bajo el entendido de que, cada comuna, vereda,
   * corregimiento presenta unas características diferentes?
   */
  pregunta20: number = -1;
  /**
   * @description ¿Por qué no ha participado en mesas de trabajo para la formulación del plan de desarrollo del municipio?
   */
  pregunta21: number = -1;
  /**
   * @description ¿Cuenta con un proyecto pedagógico coherente con los fundamentos técnicos, políticos y de gestión de
   * la estrategia de atención integral a la primera infancia y los referentes técnicos de educación inicial, que
   * responda a la realidad sociocultural y a las particularidades de las niñas, los niños y sus familias o cuidadores
   * (mujeres gestantes)?
   */
  pregunta22: number = -1;
  /**
   * @description ¿Planea, implementa y hace seguimiento a las experiencias pedagógicas y de cuidado llevadas a cabo
   * con las niñas y los niños desde la gestación, orientadas a la promoción del desarrollo infantil, en coherencia con
   * su proyecto pedagógico, los fundamentos técnicos, políticos y de gestión de la atención integral y las orientaciones
   * pedagógicas nacionales y territoriales de educación inicial?
   */
  pregunta23: number = 0;
  /**
   * @description ¿Los espacios y/o infraestructuras donde se presta la atención están ubicados fuera de zonas de riesgo
   * no mitigable por causas naturales o humanas de acuerdo con la normatividad técnica vigente?
   */
  pregunta24: number = -1;
  /**
   * @description ¿Cuenta con concepto de uso del suelo permitido o compatible para jardín infantil o centro de desarrollo
   * infantil o institución educativa?
   */
  pregunta25: number = -1;
  /**
   * @description Para inmuebles construidos a partir del año 2011. ¿Cuenta con licencia de construcción expedida para
   * su funcionamiento? Para inmuebles construidos antes del 2011, ¿cuenta con un certificado expedido por la secretaria
   * de planeación de la entidad territorial o quien haga sus veces, que evidencie que la infraestructura es apta para su funcionamiento?
   */
  pregunta26: number = -1;
  /**
   * @description ¿Cuenta con un inmueble que cumpla con las condiciones de la planta física establecidas en las
   * especificaciones para las áreas educativa, recreativa, administrativa y de servicios? . Dichas especificaciones
   * tendrán en cuenta los espacios diferentes y particulares del territorio y las características de la población atendida.
   */
  pregunta27: number = -1;
  /**
   * @description ¿Las niñas/niños cuentan con una póliza de seguro contra accidentes?
   */
  pregunta28: number = -1;
  /**
   * @description ¿Dispone de muebles, elementos y material didáctico pertinente para las necesidades de desarrollo
   * integral de la población atendida y el contexto sociocultural, que cumplan con condiciones de seguridad y salubridad
   * y que sean suficientes de acuerdo con el grupo de atención, así como para el desarrollo de las actividades administrativas?
   */
  pregunta29: number = -1;
}
