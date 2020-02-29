import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
 @Input()  name="cultures";
  @Input() type="nontechinal";
 @Input() date="feb23,2020";
 @Input() venue="pec";

  constructor() { }

  ngOnInit(): void {
  }

}
