import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
  // store the original function n a variable
  const original = descriptor.value;
  // do some maniplations with descriptor.value
  descriptor.value = function (...args) {
    console.log('Arguments ', args, 'were passed in this function');
    const result = original(this, args);
    console.log('The result of the function is ', result);
  }
  // return the descriptor
  return descriptor; 
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'luxuviewer';

  constructor() {
    console.log(this.aSimpleMethod(5));
  }

  @log
  aSimpleMethod(a) {
    return a*a
  }
}
