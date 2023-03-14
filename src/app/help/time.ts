export class Time {
  getDateString(fecha: string): string {
    const date = new Date(fecha);
    const mes = ((date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1));
    const dia = ((date.getDate() + 1) < 10 ? `0${date.getDate()}` : (date.getDate()));
    console.log(mes, dia);
    return `${date.getFullYear()}-${mes}-${dia}`;
  }

  getTimeString(fecha: string): string {
    const date = new Date(fecha);
    return `${date.getHours()}:${date.getMinutes()}`;
  }
}
