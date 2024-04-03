class Example {
  private _a: number;

  constructor(a: number) {
    this._a = a;
  }

  get a(): number {
    return this._a;
  }

  set a(value: number) {
    if (value < 0) {
      throw new Error('Value cannot be negative.');
    }
    this._a = value;
  }

  public display(): void {
    console.log(`The value of a is: ${this._a}`);
  }
}

// Usage
const exampleInstance = new Example(10);
exampleInstance.display();
exampleInstance.a = 20;
exampleInstance.display();
