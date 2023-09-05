import { Component } from '@angular/core';
import {SharedService} from 'src/app/services/shared.service';

import { PBXMessage, ttPBXMessSendDataCls, ttPBXMessTopCls } from 'src/app/Models/PBXMessage';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  constructor(    

  ){

  }
  constructPBXMessage() {
    // ttPBXMessTop
    let objttPBXMessTop=new ttPBXMessTopCls();
    objttPBXMessTop.ttchSunSiteID=environment.applicationName;
    objttPBXMessTop.ttchSunMessVersion="V-0.1";
    // objttPBXMessTop.ttchSunMode="";
    // objttPBXMessTop.ttchSunModeData="";
    // objttPBXMessTop.ttchSunDirection="Forward";
    // objttPBXMessTop.ttchSunMessStage="TO-PBX";
    // objttPBXMessTop.ttchSunMessStatus="New Search Request"; 

   

    


    //Interfaces
    // var objTopMsg:IttPBXMessTop={
    //   ttchSunSiteID:"",
    //   ttchSunDirection:"",
    //   ttchSunMessStage:"",
    //   ttchSunMessStatus:"",
    //   ttchSunMessVersion:"",
    //   ttchSunMode:"",
    //   ttchSunModeData:""
    // }
    // const json = JSON.stringify(this.objPBXMess);
    // alert(json);
    // console.log(json);
   // return json;
    
  };
}
