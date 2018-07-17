import { Component, 
  OnInit,
  Input // addes this  
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  // name:string; //added new property
  @Input() name:string;   //added Input annotation
  constructor() { 
    // this.name ='John'; // set the name
    // this will removed setting name using input 
  }

  ngOnInit() {
  }

}
