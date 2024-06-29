export class CustomDate {

  constructor(
    private year: number = 1993,
    private month: number = 7,
    private _day: number = 9,
  ) {}

  public get day(): number {
    return this._day;
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    } else if (type === "months") {
      this.month += amount;
    } else if (type === "years") {
      this.year += amount;
    } else {
      throw new Error("Invalid type");
    }
  }

  public get isLepYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const customDate2 = new CustomDate(2022, 11, 10);
console.log(customDate2.printFormat());

console.log(customDate2.day); // 10
const customDate = new CustomDate();
const customDate5 = new CustomDate(2000, 7, 10);
console.log(customDate);

console.log(customDate.isLepYear);
console.log(customDate5.isLepYear);
