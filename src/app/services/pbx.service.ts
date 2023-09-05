import { Injectable } from '@angular/core';
import { PBXMessage } from '../Models/PBXMessage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PBXService {

  constructor(private http: HttpClient) { }

  public postfunc(pbxMsg: any,methodName: string): Observable<string> {
    var x=environment.apiUrl + methodName;
    console.log('entire url',x);
    return this.http.post(
      environment.apiUrl + methodName,
      {
        pbxmsg:pbxMsg
      },
      { responseType: 'text' }
    );
  }

  // onSubmitCallCreation(pbxMsg: any,methodName: string):Observable<any>{
//   onSubmitCallCreation(test:any,methodName:string):Observable<any>{
// alert(test);
//     return this.http.post(
//       environment.apiUrl+ '/getallmembers',test,
      
//       { responseType: 'text' });
//   }


  onSubmitPostCall(message:PBXMessage,methodName:string): Observable<any> {
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(message);
 // console.log(body)
  return this.http.post(environment.apiUrl + methodName, body,{'headers':headers})
    
   
  }
  // public getfunc(pbxmsg: PBXMessage): Observable<string> {
  //   return this.http.get(
  //     environment.apiUrl + pbxmsg,
  //     {
       
  //     },
  //     { responseType: 'text' }
  //   );
  // }


  // return this.http.post(
  //   environment.apiUrl + '/getallmembers',
  //   {
  //     message:message,
  //   },
  //   { responseType: 'text' }
  // );
}


