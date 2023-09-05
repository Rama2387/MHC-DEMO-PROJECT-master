export class ttPBXMessTopCls {
    ttchSunSiteID: string= "test";
    ttchSunMessVersion: string ="V-0.1";
    ttchSunMode: string ="";
    ttchSunModeData: string ="";
    ttchSunDataMode:string[]= ['SingleAll','MultiAll','MultiList'];
    ttchSunDirection: string ="";
    ttchSunMessStage: string ="";
    ttchSunMessStatus: string ="";    
  }

  export class ttPBXMessSendDataCls {
    ttdecSunSendPrntRecID: number= 0.0;
    ttdecSunSendMyRecID: number =48149.0;
    ttchSunSendLabel: string ="";
    ttchSunSendValue: string ="9326145";
    ttchSunSendExtra1: string ="";
    ttchSunSendExtra2: string ="";      
  }

  export class ttPBXMessReturnDataCls {
    ttWebClaimHdr: SunWebClaimHdr | undefined;
    ttwebClaimHdrCodes: sunClaimHdrCodesData | undefined;
    ttClaimDtlMap: SunClaimDetailMap[] | undefined;

//     ttdecSunRtnPrntRecID: number= 0.0;
//     ttdecSunRtnMyRecID: number =0.0;
//     ttchSunRtnLabel: string ="";
//     ttchSunRtnValue: string ="";
//     ttchSunRtnExtra1: string ="";
//     ttchSunRtnExtra2: string ="EMPTY ON SEND";  
// //claim
//     ttchSunRtnClaimDetail1: string ="";
//     ttchSunRtnClaimDetail2: string ="";
//     lstClaimsHeader:ClaimsHeader[]| undefined;
//   //member
//   ttchSunRtnMemberDetail1: string ="";
//   ttchSunRtnMemberDetail2: string ="";

  }

  export class ttPBXMessEndCls {
    ttchSunErrorNum: string= "";
    ttchSunRtnMessage: string ="";
    ttlogRanOnServer1: boolean =false;
    ttlogRanOnServer2: boolean = false;   
  }

  export class ClaimsHeader
    {
        CLAIMID :number=0;
        CLAIMNUMBER :number=0;
        SERVDATE :string="";
        MEMBERID :number=0;
        GROUPID :number=0;
        PROVIDERID :number=0;
        ADJUSTMENTID :number=0;
        DIAG1 :string="";
        DIAG2 :string="";
        DIAG3 :string="";
        CreatedBy :string="";
        CreatedDate :string="";
        ModifiedBy :string="";
        ModifiedDate :string="";      
       
	 
    }

    export class SunWebClaimHdr{
      ttchMCS: string="";
      ttdecadjustmentamount: number=0.0;
      ttdadjustmentdate: string="";
      ttchbatch: string="";
      ttchclaimNote: string="";
      ttchclaimType: string="";
      ttchclaimSubType: string="";
      ttchclaimNumber: string="";
      ttdcreateDate: string="";
      ttdchcreateUser: string="";
      ttdchStatus: string="";

    }

    export class sunClaimHdrCodesData{
      ttchControlNumber: string="";
      ttintCdCount: number=0.0;
      ttchCdType: string="";
      ttchCdCode: string="";
      ttchCdDesc: string="";
      ttchCdQualifier: string="";
      ttchCdPOA: string=""; 
    } 
    
    export class SunClaimDetailMap{
      ttmcsMCHLineNum: string="";
      ttmcsMCHDiagCode: string="";
      ttmcsMCHProcCode: string="";
      ttmcsMCSCharge: string="";
      ttmcsMCSAllowed: string="";
      ttmcsMCSCoInsurance: string="";
      ttmcsMCSCoPay: string=""; 
      ttmcsMCSStatus: string=""; 
    } 

    export class PBXMessage{
    ttPBXMessTop: ttPBXMessTopCls[] | undefined;
    ttPBXMessSendData: ttPBXMessSendDataCls[] | undefined;
    ttPBXMessReturnData: ttPBXMessReturnDataCls | undefined;
    ttPBXMessEnd: ttPBXMessEndCls[] | undefined;    
  }
