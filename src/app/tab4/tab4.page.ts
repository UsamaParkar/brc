import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor( private dataService: DataserviceService) { }

  ngOnInit() {}

  goToAccountPage() { this.dataService.goToAccountPage(); }

}
