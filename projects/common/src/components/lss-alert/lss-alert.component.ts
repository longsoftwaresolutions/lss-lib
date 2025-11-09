import { Component, Input } from '@angular/core';
import { LssAlertType } from './models/lss-alert-type.enum';

@Component({
  selector: 'lss-alert',
  imports: [],
  templateUrl: 'lss-alert.component.html',
  styleUrls: ['./lss-alert.component.scss'],
  standalone: true
})
export class LssAlertComponent {
  @Input('header') AlertHeader:string="";
  @Input('text') AlertText:string="";
  @Input('type') AlertType:LssAlertType=LssAlertType.NONE;
}
