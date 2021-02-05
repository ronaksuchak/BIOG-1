import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent {
  addressForm = this.fb.group({
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Gujarat', abbreviation: 'GJ'},
    {name: 'Maharastra', abbreviation: 'MH'},
    {name: 'Delhi', abbreviation: 'DL'},
    {name: 'Punjab', abbreviation: 'PUJ'},
    {name: 'Bihar', abbreviation: 'BI'},
    {name: 'Rajasthan', abbreviation: 'RJ'},
    {name: 'Jammu and Kashmir', abbreviation: 'JK'},
    {name: 'Hyderabad', abbreviation: 'HY'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
