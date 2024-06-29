export class CustomDate {

  constructor(
    private year: number = 1993,
    private month: number = 7,
    private day: number = 9,
  ) {}

  getDay(): number {
    return this.day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
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

const customDate2 = new CustomDate(2022, 11, 10);
console.log(customDate2.printFormat());

console.log(customDate2.getDay()); // 10
const customDate = new CustomDate();
const customDate3 = new CustomDate(2022);
console.log(customDate);
console.log(customDate3);
