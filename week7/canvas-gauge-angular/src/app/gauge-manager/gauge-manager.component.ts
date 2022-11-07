import { Component } from '@angular/core';
import {GaugeStyle} from "../gauge-clean/gauge-style";

@Component({
  selector: 'app-gauge-manager',
  templateUrl: './gauge-manager.component.html',
  styleUrls: ['./gauge-manager.component.scss']
})
export class GaugeManagerComponent {

  public progress = 0;

  public threshold = 60;

  public showHandle = false;

  public gagues = 1;

  public style = GaugeStyle.CLASSIC;

  public allStyles = GaugeStyle;

  public sequence(n: number){
    return Array(n);
  }

}
