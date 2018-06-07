import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-console-form',
  templateUrl: './console-form.component.html',
  styleUrls: ['./console-form.component.scss']
})
export class ConsoleFormComponent implements OnInit {
  private _registrationURL = "http://localhost:51269/Console/api/ConsoleModels";
  valuesubmited: string = "";
  errorMessage: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  Submit(consoleForm:NgForm) {
    this.valuesubmited = consoleForm.value;
    console.log(this.valuesubmited);
    this.dataService.createService(this._registrationURL, this.valuesubmited)
      .subscribe(result => console.log(result),
      error => this.errorMessage = <any>error);
  }
}
