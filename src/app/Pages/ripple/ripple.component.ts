import { Component } from '@angular/core';

@Component({
  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.css']
})
export class RippleComponent {
  
  centered = false;
  disabled = false;
  unbounded = false;
  radius!: number;
  color!: string;
  myColor="#00ccff"
  // myColor=Range ;red: any;
}
