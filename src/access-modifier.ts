{
  //access modifier with typescript;

  class BankAccount {
    // private: if i use private  implicitly then we do not access the variable out side of class; example: _balance property

    //protected: if i use protected implicitly then we can access from child class, who extends main class;
    constructor(
      readonly id: string,
      public name: string,
      private _balance: number,
      protected accountNo: string
    ) {}
    getBalance() {
      return this._balance;
    }
    deposit(amount: number) {
      console.log((this._balance = this._balance + amount));
    }
    withdraw(amount: number) {
      console.log((this._balance = this._balance - amount));
    }
  }

  class Student extends BankAccount {
    constructor(id: string, name: string, accountNo: string) {
      super(id, name, 0, accountNo);
    }

    balanceModify() {
      console.log(this.accountNo);
    }
  }

  const goribManus = new BankAccount("11", "mr: gorib", 99, "accountNo:222");
  console.log(goribManus);
  const student = new Student("2", "student mr", "111");
  student.withdraw(99);
  console.log(student);
  goribManus.getBalance();
  goribManus.deposit(100);
  goribManus.withdraw(50);

  //
}
