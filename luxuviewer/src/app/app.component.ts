import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
  // store the original function n a variable
  const original = descriptor.value;
  // do some maniplations with descriptor.value
  // original();

  descriptor.value = function(...args) {
    console.log('Arguments ', args, ' were passed in this function');
    const result = original.apply(this, args);
    console.log('The result of the function is ', result);
    return result;
  };

  // return the descriptor
  return descriptor;
}

function classLog() {
  return (...args) => {
    console.log('Arguments passed to this class\'s constructor are ', args);
  };
}

@classLog()
class MyExampleClass {
  constructor(arg1, arg2) {
    console.log('constructor fired!');
  }
}

const myClass = new MyExampleClass(5, 10);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'luxuview';

  constructor() {
    console.log('This statement was generated by the constructor', this.aSimpleMethod(5, 2));
  }

  @log
  aSimpleMethod(a, b) {
    return a * b;
  }
}
