export class CustomDate {

  constructor(
    private _year: number = 1993,
    private _month: number = 7,
    private _day: number = 9,
  ) {}

  public get day(): number {
    return this._day;
  }

  //public set day(value: number): number {}

  /**
   * month
   */
  public get month() {
    return this._month;
  }

  public set month(value: number) {
    if (value >= 1 &&    value <= 12) {
      this._month = value;
    } else {
      throw new Error("Invalid month");
    }
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this._year}`;
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
      this._month += amount;
    } else if (type === "years") {
      this._year += amount;
    } else {
      throw new Error("Invalid type");
    }
  }

  public get isLepYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

const customDate = new CustomDate(2022, 11, 10);
console.log(customDate.printFormat());
customDate.month = 4;
console.log(customDate.month);
customDate.month = 40;
console.log(customDate.month);
