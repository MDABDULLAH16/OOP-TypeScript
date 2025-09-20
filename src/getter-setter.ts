{
  //getter and setter

  class BankAccount {
    constructor(
      readonly id: string,
      public name: string,
      private _balance: number,
      protected accountNo: string
    ) {}
    get Balance() {
      return this._balance;
    }
    // getBalance() {
    //   return this._balance;
    // }

    set Deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    // deposit(amount: number) {
    //   console.log((this._balance = this._balance + amount));
    // }

    set WithDraw(amount: number) {
      this._balance = this._balance - amount;
    }
    // withdraw(amount: number) {
    //   console.log((this._balance = this._balance - amount));
    // }
  }

  const goribManus = new BankAccount("11", "mr: gorib", 200, "accountNo:222");
  goribManus.Deposit = 100;
  goribManus.WithDraw = 10;
  console.log(goribManus);

  //
}
