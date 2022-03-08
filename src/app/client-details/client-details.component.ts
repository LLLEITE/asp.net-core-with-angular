import { Component, DebugElement, OnInit } from '@angular/core';
import { Client } from '../shared/client.model';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styles: [
  ]
})

export class ClientDetailsComponent implements OnInit {

  constructor(public service: ClientService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Client) {
    console.log(selectedRecord.id);
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(Id: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteClient(Id)
        .subscribe(res => {
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }
}
