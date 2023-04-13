import { hostPhp} from '../services/host.service';
import {environment} from '../../environments/environment';
const hostNodejs = environment.apiNodejs;
// property
// capeta apis
const API_ABONO = hostPhp + 'abono/';
const API_AJUSTE_FACTURA = hostPhp + 'ajuste_factura/';
const API_BODEGA = hostPhp + 'bodega/';
const API_BODEGA_PRODUCTO = hostPhp + 'bodegaProducto/';
const API_CLIENTE = hostPhp + 'cliente/';
const API_COBRADOR = hostPhp + 'cobrador/';
const API_CATEGORIA = hostPhp + 'categoria/';
const API_DEPARTAMENTO = hostPhp + 'departamento/';
const API_FACTURA = hostPhp + 'factura/';
const API_HISTORIAL_FACTURAS_CLIENTE = hostPhp + 'historialFacturasCliente/';
const API_ITEM_AJUSTE_FACTURA = hostPhp + 'item_factura/';
const API_ITEM_FACTURA = hostPhp + 'item_factura/';
const API_LISTA_PEDIDOS = hostPhp + 'lista_pedidos/';
const API_LISTA_FACTURAS = hostPhp + 'lista_facturas/';
export const API_ENTERPRICE = hostNodejs + 'enterprice/';
const API_MUNICIPIO = hostPhp + 'municipio/';
const API_PRODUCTO = hostPhp + 'producto/';
const API_RAZON_DEVOLUCION = hostPhp + 'razon_devolucion/';
const API_RUTA = hostPhp + 'ruta/';
const API_UBICACION_VENDEDOR = hostPhp + 'ubicacionVendedor/';
const API_USUARIO = hostPhp + 'usuario/';
const API_VENDEDOR = hostPhp + 'vendedor/';
const API_VENTAS_CLIENTE_POR_DIA = hostPhp + 'ventas_cliente_por_dia/';
const API_VENTAS_DEPARTAMENTO_POR_DIA = hostPhp + 'ventas_departamento_por_dia/';
const API_VENTAS_MUNICIPIO_POR_DIA = hostPhp + 'ventas_municipio_por_dia/';
const API_VENTAS_VENDEDOR_POR_DIA = hostPhp + 'ventas_vendedor_por_dia/';

// direcciones api abono
export const ABONO_POR_FACTURA = API_ABONO + 'abono_por_factura.php';

// direcciones api abono
export const AJUSTE_FACTURA_REGISTRAR = API_AJUSTE_FACTURA + 'ajuste_factura_registrar.php';
export const AJUSTE_FACTURA_POR_FACTURA = API_AJUSTE_FACTURA + 'ajuste_factura_por_factura.php';

// direcciones api bodega
export const BODEGA_CONSULTAR = API_BODEGA + 'bodegaConsultar.php';
export const BODEGA_REGISTRAR = API_BODEGA + 'bodegaRegistrar.php';

// direcciones api bodega producto

// direcciones api categoria
export const CANTEGORIA_CONSULTAR = API_CATEGORIA + 'categoriaConsultar.php';
export const CATEGORIA_REGISTRAR = API_CATEGORIA + 'categoriaRegistrar.php';

// direcciones api cliente
export const CLIENTE_CONSULTAR = API_CLIENTE + 'clienteConsultar.php';
export const CLIENTE_CONSULTAR_POR_RUTA = API_CLIENTE + 'clienteConsultarPorRuta.php';
export const CLIENTE_CONSULTAR_POR_VENDEDOR = API_CLIENTE + 'clienteConsultarPorVendedor.php';
export const CLIENTE_ACTUALIZAR = API_CLIENTE + 'clienteActualizar.php';
export const CLIENTE_CAMBIAR_CUPO = API_CLIENTE + 'clienteCambiarCupo.php';

// direcciones api cobrador
export const COBRADOR_CONSULTAR = API_COBRADOR + 'cobradorConsultar.php';
export const COBRADOR_REGISTRAR = API_COBRADOR + 'cobradorRegistrar.php';
export const VER_COBRADOR = API_COBRADOR + 'verCobrador.php';


// direcciones api departamento
export const DEPARTAMENTO_CONSULTAR = API_DEPARTAMENTO + 'departamentoConsultar.php';

// direcciones api factura
export const FACTURA_CONSULTAR_POR_RUTA_HOY = API_FACTURA + 'facturasPorRutaHoy.php';

// direcciones api factura
export const ITEM_FACTURA__POR_FACTURA = API_ITEM_FACTURA + 'item_factura_por_factura.php';
export const ITEM_FACTURA_GET_POR_MES_Y_VENDEDORA = API_ITEM_FACTURA + 'get_por_mes_y_vendedora.php';
export const ITEM_FACTURA_GET_HOY_POR_VENDEDORA = API_ITEM_FACTURA + 'get_hoy_por_vendedora.php';

// direcciones api hostorial de facturas
export const HISTORIAL_FACTURAS_CLIENTE_GET = API_HISTORIAL_FACTURAS_CLIENTE + 'get.php';

// direcciones api listaPedidos
export const LISTA_PEDIDOS_GET = API_LISTA_PEDIDOS + 'get.php';

// direcciones api listaPedidos
export const LISTA_FACTURAS_GET = API_LISTA_FACTURAS + 'get.php';
export const LISTA_FACTURAS_GET_POR_MES = API_LISTA_FACTURAS + 'getPorMes.php';
export const LISTA_FACTURAS_HOY = API_LISTA_FACTURAS + 'getHoy.php';

// direcciones api muinicipio
export const MUNICIPIO_CONSULTAR = API_MUNICIPIO + 'municipioConsultar.php';

// direcciones api producto
export const PRODUCTO_REGISTRAR = API_PRODUCTO + 'productoRegistrar.php';
export const PRODUCTO_ACTUALIZAR = API_PRODUCTO + 'productoActualizar.php';
export const PRODUCTO_CONSULTAR = API_PRODUCTO + 'productoConsultar.php';

// direcciones api ruta
export const RAZON_DEVOLUCION_CONSULTAR = API_RAZON_DEVOLUCION + 'razon_devolucion_consultar.php';

// direcciones api ruta
export const RUTA_REGISTRAR = hostNodejs + 'route/';
export const RUTA_CONSULTAR = API_RUTA + 'rutaConsultar.php';
export const RUTA_CONSULTAR_POR_MUNICIPIO = API_RUTA + 'rutaConsultaPorMunicipio.php';
export const RUTA_CONSULTAR_POR_VENDEDOR = API_RUTA + 'rutaConsultaPorVendedor.php';

// direcciones api ubicacion_vendedor
export const UBICACION_VENDEDOR_POR_VENDEDOR_Y_DIA = API_UBICACION_VENDEDOR + 'ubicacionVendedorPorVendedorYDia.php';

// direcciones api usuario
export const USUARIO_VALIDAR = API_USUARIO + 'validarUsuario.php';

// direcciones api vendedor
export const VENDEDOR_CONSULTAR = API_VENDEDOR + 'vendedorConsultar.php';
export const VENDEDOR_CONSULTAR_POR_MUNICIPIO = API_VENDEDOR + 'vendedorConsultarPorMunicipio.php';
export const VENDEDOR_REGISTRAR = API_VENDEDOR + 'vendedorRegistrar.php';
export const VER_VENDEDOR = API_VENDEDOR + 'verVendedor.php';

// direcciones api ventas_cliente_por_dia
export const VENTAS_CLIENTE_POR_DIA_HOY_POR_RUTA = API_VENTAS_CLIENTE_POR_DIA + 'ventas_cliente_por_dia_hoy_por_ruta.php';
