import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-demo-form-builder',
  templateUrl: './demo-form-builder.component.html',
  styleUrls: ['./demo-form-builder.component.css']
})
export class DemoFormBuilderComponent implements OnInit {
  myForm:FormGroup;
  constructor(fb:FormBuilder) { 
    this.myForm=fb.group({
      'sku':['ABC123']
    });
  }

  ngOnInit() {
  }
  onSubmit(value:string):void{
    console.log(`you submitted value :${value}`)
  }
}
