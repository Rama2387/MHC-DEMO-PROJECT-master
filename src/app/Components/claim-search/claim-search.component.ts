import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClaimsHeader, PBXMessage, ttPBXMessEndCls, ttPBXMessReturnDataCls, ttPBXMessSendDataCls, ttPBXMessTopCls } from 'src/app/Models/PBXMessage';
import { DatabaseService } from 'src/app/services/database.service';
import { SharedService } from 'src/app/services/shared.service';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';
import { PBXService } from 'src/app/services/pbx.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-claim-search',
  templateUrl: './claim-search.component.html',
  styleUrls: ['./claim-search.component.css'],
})
export class ClaimSearchComponent extends BaseComponent implements OnInit {
  claimSearchForm!: FormGroup;
  searchedClaims: any[] = [];
  searchClicked: boolean = false;
  pbxMode: string = "ClaimSearch";
  pbxsendLabel: string = "ClaimNumber";
  objPBXMess = new PBXMessage();
  lstch: ClaimsHeader[] = [];
  objch = new ClaimsHeader();
  objectLength: boolean =false;


  constructor(
    private _fb: FormBuilder,
    private dataBaseService: DatabaseService,
    public router: Router,
    private pbxService: PBXService


  ) {
    super();


  }

  ngOnInit(): void {
    this.claimSearchForm = this._fb.group({
      claimNumber: [''],
      controlNumber: [''],
      checkNumber: [''],
    });
  }

  claimSearchSubmit() {
    this.constructPBXMessage();
    // if (this.claimSearchForm.valid) {
    //   if (this.searchedClaims.length !== 0) {

    //     this.searchedClaims = []
    //   }
    //   // this.dataBaseService.getClaims().subscribe(
    //   //   (data) => {
    //   //     //console.log(data)
    //   //     data.forEach((item: any) => {
    //   //       debugger
    //   //       if (

    //   //         item.checkNumber == this.claimSearchForm.value.checkNumber &&
    //   //         item.claimNumber == this.claimSearchForm.value.claimNumber &&
    //   //         item.controlNumber == this.claimSearchForm.value.controlNumber
    //   //       ) {
    //   //         this.searchedClaims.push(item);

    //   //       }
    //   //     });
    //   //   },
    //   //   (error) => {
    //   //     console.log(error);
    //   //   }
    //   // );
    //   //console.log(this.searchedClaims);

    //   //console.log(this.claimSearchForm.value);
    // } else {
    //   console.log('form invalid');
    // }
  }

  public override constructPBXMessage() {
    this.searchClicked = true;

    let objttPBXMessTop = new ttPBXMessTopCls();
    objttPBXMessTop.ttchSunSiteID=environment.applicationName;
    objttPBXMessTop.ttchSunMessVersion = "V-0.1";
    objttPBXMessTop.ttchSunMode = this.pbxMode;
    objttPBXMessTop.ttchSunModeData = this.claimSearchForm.controls['claimNumber'].value;    
    objttPBXMessTop.ttchSunDirection = "Forward";
    objttPBXMessTop.ttchSunMessStage = "TO-PBX";
    objttPBXMessTop.ttchSunMessStatus = "New Search Request";

    let MsgToplst = [];
    MsgToplst.push(objttPBXMessTop);
    this.objPBXMess.ttPBXMessTop = MsgToplst;

    //ttPBXMessSendData
    let objttPBXMessSendData = new ttPBXMessSendDataCls();
    objttPBXMessSendData.ttdecSunSendMyRecID = 0.0;
    objttPBXMessSendData.ttdecSunSendMyRecID = 48149.0;
    objttPBXMessSendData.ttchSunSendLabel = this.pbxsendLabel;
    objttPBXMessSendData.ttchSunSendValue = this.claimSearchForm.value.claimNumber;
    objttPBXMessSendData.ttchSunSendExtra1 = "";
    objttPBXMessSendData.ttchSunSendExtra2 = "";

    let MsgSendlst = [];
    MsgSendlst.push(objttPBXMessSendData);
    this.objPBXMess.ttPBXMessSendData = MsgSendlst;

    //ttPBXMessReturnDataCls
    // let objttPBXMessReturnData = new ttPBXMessReturnDataCls();
    // objttPBXMessReturnData.ttdecSunRtnPrntRecID = 0.0;
    // objttPBXMessReturnData.ttdecSunRtnMyRecID = 0.0;
    // objttPBXMessReturnData.ttchSunRtnLabel = "";
    // objttPBXMessReturnData.ttchSunRtnValue = "";
    // objttPBXMessReturnData.ttchSunRtnExtra1 = "";
    // objttPBXMessReturnData.ttchSunRtnExtra2 = "EMPTY ON SEND";

    // objttPBXMessReturnData.ttchSunRtnClaimDetail1 = "CLAIMDETAIL1";
    // objttPBXMessReturnData.ttchSunRtnClaimDetail2 = "CLAIMDETAIL2";

    // this.objch.CreatedBy = "System";
    // this.objch.DIAG1 = "test1";
    // this.objch.DIAG2 = "test2";
    // this.objch.DIAG3 = "test3";
    // this.lstch.push(this.objch);

    // objttPBXMessReturnData.lstClaimsHeader = this.lstch;

    // let MsgReturnlst = [];
    // MsgReturnlst.push(objttPBXMessReturnData);
    // this.objPBXMess.ttPBXMessReturnData = MsgReturnlst;

    //ttPBXMessEndCls
    let objttPBXMessEndCls = new ttPBXMessEndCls();
    objttPBXMessEndCls.ttchSunErrorNum = "one";
    objttPBXMessEndCls.ttchSunRtnMessage = "one";
    objttPBXMessEndCls.ttlogRanOnServer1 = true;
    objttPBXMessEndCls.ttlogRanOnServer2 = false;

    let MsgEndlst=[];
    MsgEndlst.push(objttPBXMessEndCls);
    this.objPBXMess.ttPBXMessEnd=MsgEndlst;

    
   
    //Call to Service to send data
    this.pbxService.onSubmitPostCall(this.objPBXMess,'/getallmetrics').subscribe(res => {
      console.log("response", res);


     // if(res.length>0){
      let claimhdrData=res.ttPBXMessReturnData.ttWebClaimHdr;
      console.log('claimheaderdata',claimhdrData);

      let claimhdrcodeData=res.ttPBXMessReturnData.ttwebClaimHdrCodes;
      console.log('claimhdrcodeData',claimhdrcodeData);
      
      if(claimhdrData !=null){
       this.searchedClaims.push(claimhdrData);
        this.objectLength=true;
      }
      else{
        this.objectLength=false;
      }

     
      if(claimhdrcodeData !=null){
        this.searchedClaims.push(claimhdrcodeData);
         this.objectLength=true;
       }
       else{
         this.objectLength=false;
       }
       console.log(this.searchedClaims);

       console.log(this.objectLength);
        // let entries = Object.entries(dtata);
        // console.log('entries',entries);

        // this.searchedClaims=entries;
        // console.log('searchedClaimsaa',this.searchedClaims);

       // this.objectLength = Object.keys(this.searchedClaims).length != 0;
      //  console.log('objectLength',this.objectLength);

        // let data=Object.getOwnPropertyNames(res.ttPBXMessReturnData);
        // this.searchedClaims=data;
        // console.log('searchedClaims',data);


        
      //   Object.getOwnPropertyNames(res).forEach(key => {
      //     let value = res[key];
      //     console.log('value',value);
      // });

     

     // }
        // console.log('json',JSON.parse(res));
        // console.log('jsonstring',JSON.stringify(res));
        // let fieldValues = JSON.parse(res);
        // console.log('fieldvalues',fieldValues);

        // let keys = Object.keys(fieldValues);
        // console.log('keys',keys);

        
        // let values = Object.keys(ttPBXMessEndCls).map(key => fieldValues[key]);
        // console.log('values',values);
     // }
    });
  }


}




