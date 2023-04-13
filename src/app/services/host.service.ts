import {environment} from '../../environments/environment';

class Servidor {
  public webService = '';
  public apiWeb = '';
  public puerto = '';
  public ip = '';
  public mensaje_biembenida = '';
  public carpeta_imagen_camara_comercio = '';
  public carpeta_imagen_cedula_lado_a = '';
  public carpeta_imagen_cedula_lado_b = '';
  public carpeta_imagen_cedula_lado_a_fiador = '';
  public carpeta_imagen_cedula_lado_b_fiador = '';
  public carpeta_imagen_local = '';
  public carpeta_imagen_logo = '';
  public carpeta_imagen_rut = '';
  public carpeta_licencia_conducion_frente = '';
  public carpeta_licencia_conducion_atras = '';
  public carpeta_licencia_transito_frente = '';
  public carpeta_licencia_transito_atras = '';
  public carpeta_imagen_producto = '';
  public carpeta_seguro = '';
  public carpeta_matricula = '';
  public carpeta_moto = '';
  constructor(webService: string, api: string, puerto: string, ip: string, mensaje_biembenida: string) {
    this.ip = ip;
    this.puerto = puerto;
    this.webService = webService;
    this.apiWeb = api;
    this.mensaje_biembenida = mensaje_biembenida;
    this.carpeta_imagen_camara_comercio = environment.apiPhp + webService + 'IMG_CAMARA_COMERCION_CLIENTE/';
    this.carpeta_imagen_producto = environment.apiPhp + webService + 'IMG_PRODUCTO/';
    this.carpeta_imagen_cedula_lado_a = environment.apiPhp + webService + 'IMG_CEDULA_LADO_A/';
    this.carpeta_imagen_cedula_lado_b = environment.apiPhp + webService + 'IMG_CEDULA_LADO_B/';
    this.carpeta_imagen_cedula_lado_a_fiador = environment.apiPhp + webService + 'IMG_CEDULA_LADO_A_FIADOR/';
    this.carpeta_imagen_cedula_lado_b_fiador = environment.apiPhp + webService + 'IMG_CEDULA_LADO_B_FIADOR/';
    this.carpeta_imagen_local = environment.apiPhp + webService + 'IMG_LOCAL_CLIENTE/';
    this.carpeta_imagen_logo = environment.apiPhp + webService + 'IMG_LOGO_CLIENTE/';
    this.carpeta_imagen_rut = environment.apiPhp + webService + 'IMG_RUT_CLIENTE/';
    this.carpeta_licencia_conducion_atras = environment.apiPhp + webService + 'IMG_LICENCIA_CONDUCION_ATRAS/';
    this.carpeta_licencia_conducion_frente = environment.apiPhp + webService + 'IMG_LICENCIA_CONDUCION_FRENTE/';
    this.carpeta_licencia_transito_atras = environment.apiPhp + webService + 'IMG_LICENCIA_TRANSITO_ATRAS/';
    this.carpeta_licencia_transito_frente = environment.apiPhp + webService + 'IMG_LICENCIA_TRANSITO_FRENTE/';
    this.carpeta_seguro = environment.apiPhp + webService + 'IMG_SEGURO_MOTO_FRENTE/';
    this.carpeta_matricula = environment.apiPhp + webService + 'IMG_MATRICULA_MOTO/';
    this.carpeta_moto = environment.apiPhp + webService + 'IMG_MOTO/';
  }
}

// DESARROLLO
// const SERVIDOR = new Servidor('sistema_ventas_georeferencial', 'api_web', '3000', '192.168.0.102', '');
// PRODUCCION
const SERVIDOR = new Servidor('sistema_ventas_georeferencial/', 'api_web/', '3000', '45.7.230.212', '');
//const SERVIDOR = new Servidor('sistema_ventas_georeferencial', 'api_web', '3000', '170.239.87.177', '');

export const CARPETA_IMAGEN_CAMARA_COMERCIO = SERVIDOR.carpeta_imagen_camara_comercio;
export const CARPETA_IMAGEN_CEDULA_LADO_A = SERVIDOR.carpeta_imagen_cedula_lado_a;
export const CARPETA_IMAGEN_CEDULA_LADO_B = SERVIDOR.carpeta_imagen_cedula_lado_b;
export const CARPETA_IMAGEN_CEDULA_LADO_A_FIADOR = SERVIDOR.carpeta_imagen_cedula_lado_a_fiador;
export const CARPETA_IMAGEN_CEDULA_LADO_B_FIADOR = SERVIDOR.carpeta_imagen_cedula_lado_b_fiador;
export const CARPETA_IMAGEN_LOCAL = SERVIDOR.carpeta_imagen_local;
export const CARPETA_IMAGEN_LOGO = SERVIDOR.carpeta_imagen_logo;
export const CARPETA_LICENCIA_CONDUCION_ATRAS = SERVIDOR.carpeta_licencia_conducion_atras;
export const CARPETA_LICENCIA_CONDUCION_FRENTE = SERVIDOR.carpeta_licencia_conducion_frente;
export const CARPETA_LICENCIA_TRANSITO_ATRAS = SERVIDOR.carpeta_licencia_transito_atras;
export const CARPETA_LICENCIA_TRANSITO_FRENTE = SERVIDOR.carpeta_licencia_transito_frente;
export const CARPETA_SEGURO_MOTO_FRENTE = SERVIDOR.carpeta_seguro;
export const CARPETA_MATRICULA_MOTO = SERVIDOR.carpeta_matricula;
export const CARPETA_IMAGEN_PRODUCTO = SERVIDOR.carpeta_imagen_producto;
export const CARPETA_MOTO = SERVIDOR.carpeta_moto;

// export const hostPhp = 'http://' + SERVIDOR.ip + ':80' + '/' + SERVIDOR.webService +  '/' + SERVIDOR.apiWeb + '/';
export const hostPhp = environment.apiPhp + SERVIDOR.webService + SERVIDOR.apiWeb;
