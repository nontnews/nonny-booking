import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Flight } from './flight';
import { PageService } from './page.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking';
  bk: FormGroup;
  arr:any = []
  flightt:Flight;
  constructor(private fb: FormBuilder,private page:PageService){
    this.flightt=new Flight('','','','',new Date,new Date,0,0,0)
    this.getpageservice();
    this.bk=this.fb.group({
    fullName: ['',Validators.required],
    from: ['',Validators.required],
    to: ['',Validators.required],
    type: ['',Validators.required],
    departure: ['',Validators.required],
    arrival: ['',Validators.required],
    adults: ['0',[Validators.required, Validators.max(10)]],
    children: ['0',[Validators.required, Validators.max(10)]],
    infants: ['0',[Validators.required, Validators.max(10)]]})
  }
  submit(f:FormGroup){
    this.flightt.fullName=f.get('fullName')?.value;
    this.flightt.from=f.get('from')?.value;
    this.flightt.to=f.get('to')?.value;
    this.flightt.type=f.get('type')?.value;
    this.flightt.departure=f.get('departure')?.value;
    this.flightt.arrival=f.get('arrival')?.value;
    this.flightt.adults=f.get('adults')?.value;
    this.flightt.children=f.get('children')?.value;
    this.flightt.infants=f.get('infants')?.value;
    let nn=new Flight(f.get('fullName')?.value,
    f.get('from')?.value,
    f.get('to')?.value,
    f.get('type')?.value,
    f.get('departure')?.value,
    f.get('arrival')?.value,
    f.get('adults')?.value,
    f.get('children')?.value,
    f.get('infants')?.value)
    this.arr.push(nn)
  }
  getpageservice(){
    this.arr=this.page.getpage()
  }
}
