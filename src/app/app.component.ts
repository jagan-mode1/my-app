import {Component} from "@angular/core"

@Component({
  selector : `my-app`,
  template :`
             <div>
             <h1>{{PageHeader}}</h1>
             <app-employee></app-employee>
             </div>

              `
})
export class AppComponent{
  PageHeader: string ="Emplotee Details";
}