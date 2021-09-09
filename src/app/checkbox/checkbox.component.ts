import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  form: FormGroup
  employeeList: any = [
    {id: 1, name: 'John Smith', manager: [
      'manager','non-manager'
    ]},
    {id: 2, name: 'Contavius Caldwell-Pope', manager: [
      'manager','non-manager'
    ]},
    {id: 3, name: 'Helga James', manager: [
      'manager','non-manager'
    ]}
  ]
  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      employee: this.formBuilder.array([], Validators.required)
    })
  }
  onCheckSwitch(m){
    const employee: FormArray = this.form.get('employee') as FormArray;
    if(m.target.checked){
      employee.push(new FormControl(m.target.value));
    } else {
      const index = employee.controls.findIndex(x => x.value === m.target.value);
      employee.removeAt(index);
    }
  }
  employeeExp: string[];
  submit(){
    this.employeeExp = this.form.value;
    console.log(this.employeeExp);
  }
  ngOnInit() {
  }

}
