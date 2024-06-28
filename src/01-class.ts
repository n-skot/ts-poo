const date = new Date();
date.getHours();
date.toISOString();

const date2 = new Date(1993, 1, 12); // January 12, 1993 | 0 es enero, 1 febrero etc
date2.toISOString();

console.log(date);
console.log(date2);

class CustomDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const customDate = new CustomDate(2022, 11, 25);

console.log(customDate);
  