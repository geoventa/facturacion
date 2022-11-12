export class GetService<T> {
    static RESPONSE_ERROR = 2;
    static RESPONSE_WARNIG = 1;
    cont = 0;
    cod = 0;
    mensaje = '';
    data: T;
    status;
    errorMensaje = '';
    error = 0;
    isAutenticado = 1;
}
