import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-provider-search',
  templateUrl: './provider-search.component.html',
  styleUrls: ['./provider-search.component.css']
})
export class ProviderSearchComponent implements OnInit {
  providerSearchForm!: FormGroup;
  searchedProviders: any[] = [];
  searchClicked: boolean = false;
  showTable : boolean = false
  constructor(
    private _fb: FormBuilder,
    private dataBaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.providerSearchForm = this._fb.group({
      providerId: [''],
      ssn_TaxId: [''],
      npiNumber: [''],
      lastName : ['',Validators.required]
    });
  }

  providerSearchSubmit() {
    this.searchClicked = true;
    //debugger
    if (this.providerSearchForm.valid) {
      if (this.searchedProviders.length !== 0) {
        this.searchedProviders = []
      }
      this.dataBaseService.getProviders().subscribe(

        (data) => {
         // debugger
          console.log("dATA", data)
          this.showTable = true
          data.forEach((item: any) => {
            //debugger
            console.log(this.providerSearchForm.value.providerId)
            if (

              item.providerId == this.providerSearchForm.value.providerId &&

              item.ssn_TaxId == this.providerSearchForm.value.ssn_TaxId &&
              item.npiNumber == this.providerSearchForm.value.npiNumber &&
              item.lastName == this.providerSearchForm.value.lastName
            ) {
              this.searchedProviders.push(item);

            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
      console.log("SEARCHED PROVIDERS",this.searchedProviders);

      //console.log(this.providerSearchForm.value);
    } else {
      //debugger
      //this.searchClicked = false;
      console.log('form invalid');
    }
  }
}
