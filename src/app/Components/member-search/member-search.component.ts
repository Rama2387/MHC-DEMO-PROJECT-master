import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { BaseComponent } from '../base/base.component';
import { SharedService } from 'src/app/services/shared.service';
import { PBXMessage, ttPBXMessReturnDataCls } from 'src/app/Models/PBXMessage';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent extends BaseComponent  implements OnInit {
  memberSearchForm!: FormGroup;
  searchedMembers: any[] = [];
  searchClicked: boolean = false;
  showTable : boolean = false
  objPBXMess=new PBXMessage();

  constructor(
    private _fb: FormBuilder,
    private dataBaseService: DatabaseService,

  ) {
    super();
  }

  ngOnInit(): void {
    this.memberSearchForm = this._fb.group({
      memberId: [''],
      ssn_TaxId: [''],
      memberName: [''],
      lastName : ['',Validators.required]
    });
  }

  memberSearchSubmit() {
    this.constructPBXMessage();

    this.searchClicked = true;
    //debugger
    if (this.memberSearchForm.valid) {
      if (this.searchedMembers.length !== 0) {
        this.searchedMembers = []
      }
      this.dataBaseService.getMembers().subscribe(

        (data) => {
         // debugger
          console.log("dATA", data)
          this.showTable = true
          data.forEach((item: any) => {
            //debugger
            console.log(this.memberSearchForm.value.memberId)
            if (

              item.memberId == this.memberSearchForm.value.memberId &&

              item.ssn_TaxId == this.memberSearchForm.value.ssn_TaxId &&
              //item.npiNumber == this.memberSearchForm.value.npiNumber &&
              item.lastName == this.memberSearchForm.value.lastName
            ) {
              this.searchedMembers.push(item);

            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
      console.log("SEARCHED Members",this.searchedMembers);

      //console.log(this.memberSearchForm.value);
    } else {
      //debugger
      //this.searchClicked = false;
      console.log('form invalid');
    }
  }

  public override constructPBXMessage(){ 

   

    //ttPBXMessReturnDataCls
    let objttPBXMessReturnData=new ttPBXMessReturnDataCls();
    
    // objttPBXMessReturnData.ttchSunRtnValue=this.memberSearchForm.value.memberId;
    // objttPBXMessReturnData.ttchSunRtnMemberDetail1="MEMBERDETAIL1";
    // objttPBXMessReturnData.ttchSunRtnMemberDetail2="MEMBERDETAIL2";

    let MsgReturnlst=[];
    MsgReturnlst.push(objttPBXMessReturnData);
    //this.objPBXMess.ttPBXMessReturnData=MsgReturnlst;


    const json = JSON.stringify(this.objPBXMess);
    alert(json);
    console.log("MEMBER DATA",json);
  }
}
