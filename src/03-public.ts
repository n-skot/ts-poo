export class CustomDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this.day += amount;
    } else if (type === "months") {
      this.month += amount;
    } else if (type === "years") {
      this.year += amount;
    } else {
      throw new Error("Invalid type");
    }
  }
}

const customDate2 = new CustomDate(2022, 11, 22);
console.log(customDate2.day);
customDate2.day = 31;
console.log(customDate2.day);

