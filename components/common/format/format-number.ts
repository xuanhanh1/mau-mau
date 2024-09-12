const moment = require("moment");
moment.locale("vi");

export function formatVND(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatDate(day: any) {
  return moment(day).fromNow();
}
