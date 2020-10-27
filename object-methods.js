// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

const calculator = {
  fisrtNum: 0,
  secondNum: 0,
  read() {
    this.firstNum = prompt('Введите первое число:');
    this.secondNum = prompt('Введите второе число:');
  },
  sum() {
    return Number(this.firstNum) + Number(this.secondNum);
  },
  mul() {
    return Number(this.firstNum) * Number(this.secondNum);
  }
}

calculator.read();
calculator.sum();
calculator.mul();

// ------------ Master ------------ //
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
