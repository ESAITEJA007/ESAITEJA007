import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CounterApp';
  @Input() Banana: number = 0;
  @Output() BananaChange: EventEmitter<number> = new EventEmitter<number>;

  @Input() Apple: number = 0;
  @Output() AppleChange: EventEmitter<number> = new EventEmitter<number>;

  incBanana(): void{
    this.Banana++;
    this.BananaChange.emit(this.Banana);
  }
  incApple(): void{
    this.Apple++;
    this.AppleChange.emit(this.Apple);
  }
  reset(): void{
    this.Apple = 0
    this.Banana =0
    this.AppleChange.emit(this.Apple);
    this.BananaChange.emit(this.Banana);

  }
}
