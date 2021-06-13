import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input ('heading1') heading1 = ""
  @Input ('heading2') heading2 = ""
  @Input ('heading3') heading3 = ""
  @Input ('list1') list1 = ""
  @Input ('list2') list2 = ""
  @Input ('list3') list3 = ""
  @Input ('list4') list4 = ""
  @Input ('list5') list5 = ""
  @Input ('list6') list6 = ""
  @Input ('list7') list7 = ""
  @Input ('list8') list8 = ""
  @Input ('button') button =""


  constructor() { }

  ngOnInit(): void {
  }

}
