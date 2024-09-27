import { Component } from '@angular/core';
import { SharedSignalService } from '../shared-signal.service';

@Component({
  selector: 'app-on-push-demo',
  templateUrl: './on-push-demo.component.html',
  styleUrls: ['./on-push-demo.component.css']
})
export class OnPushDemoComponent {
  constructor(public sharedSignalService: SharedSignalService) {}
}
