import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
  // store the original function n a variable
  const original = descriptor.value;
  // do some maniplations with descriptor.value
  original();
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
    this.aSimpleMethod();
  }

  @log
  aSimpleMethod() {
    console.log("Hey there!");
  }
}
