import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'butter-passer',
  template: `
  <div class="butter-passer">
    <div class="title">
      <img class="logo" src="https://angular.io/assets/images/logos/angular/angular.svg"/>
      <h3>This is an Angular Element</h3>
      </div>
    <button class="command btn" (click)="passButter()">{{text}}</button>
    <img class="butter" #butter [style.margin-left]="ml + '%'" src="https://i.imgur.com/ErKFbbo.png"/>
  </div>`,
  styles: [`
  *, h3, button {
    font-family: "Roboto","Helvetica","Arial",sans-serif;
  }
  .logo {
    width: 50px;
  }
  .butter-passer{
    display: grid;
    border: 1px solid #C50523;
  }
  .title {
    display: flex;
    align-items: center;
  }
  .command{
      width: 50%;
      margin: auto;
      padding: .5rem;
  }
  .btn{
    background: rgb(103,58,183);
    color: rgb(255,255,255);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border: none;
    border-radius: 2px;
    position: relative;
    height: 36px;
    margin: 0;
    min-width: 64px;
    padding: 0 16px;
    display: inline-block;
    
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0;
    overflow: hidden;
    will-change: box-shadow;
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
    outline: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle;
    align-items: flex-start;
    margin: auto;
  }
  .butter {
      width: 10rem;
      height: auto;
      transition: all 1s;
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButterComponent {
  @Input() text;
  @Output() butterPassed = new EventEmitter<string>();
  
  goingRight = true;
  ml = 0;
  
  @ViewChild('butter') butterRef;

  passButter() {
    console.log('pass the butter!');
    const butter = this.butterRef.nativeElement;
    if(butter) {
      if(this.goingRight){
          this.ml += 20;
      } else {
          this.ml -= 20;
      }
      if(this.ml >= 80 && this.goingRight || this.ml < 20 && !this.goingRight){
          this.goingRight = !this.goingRight;
      }
    }
    this.butterPassed.emit();
  }
}
