{
  // Statics OOP

  class Counter {
    //if use statics then we should use Class name for counting; here this not working;
    static count: number = 0;
    increment() {
      return (Counter.count = Counter.count + 1);
    }
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();
  console.log(instance1.increment());
  console.log(instance1.increment());
  // if we use statics for method  then we will use Class Name for calling method
  console.log(Counter.increment());

  const instance2 = new Counter();
  console.log(instance2.increment());

  //
}
