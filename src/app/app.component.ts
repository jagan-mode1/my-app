import {Component} from "@angular/core"

@Component({
  selector : `my-app`,
  template :`
             <div>
             <h1>{{getFullname()}}</h1>
          <img src="http://www.wtastudios.com/{{imagePath}}">
        
             <app-employee></app-employee>

             <button disabled="{{isDisabled}}">Click Me</button>
             <span bind-innerHtml="PageHeader"></span>
             </div>

              `
})
export class AppComponent{
  PageHeader: string ="Employee Details";

  imagePath: string ="files/images/team/jagan.jpg";

  firstName : string ="jagan";
 lastName : string ="naik";

 getFullname() : string {
   return this.firstName + ' ' + this.lastName;
 }

 isDisabled : boolean=true ;
}