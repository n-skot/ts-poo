export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
}

/*const driver: Driver = {
  database: 'my_database',
  password: 'my_password',
  port: 3306,
}*/

class Postgres implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: string,
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(): boolean {
    throw new Error("Method not implemented.");
  }

  connect(): void {
    console.log('Connecting to Postgres database...');
  }
}

class MogoDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(): boolean {
    throw new Error("Method not implemented.");
  }

  connect(): void {
    console.log('Connecting to MongoDB database...');
  }
}
