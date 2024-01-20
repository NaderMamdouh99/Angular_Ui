import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public myAngularxQrCode: string;
  public edit:string;
  public value: string;


  /* Dependence Injection */
  constructor(private clipboardService: ClipboardService) {
    // assign a value
    this.myAngularxQrCode = 'Your QR code data string';
    this.value = 'www.tazkty.com/473847';
    this.edit = 'Edit';
  }

  /* Functionalty for Copy Link Using (clipboardService)  */
  copyLink() {
    this.clipboardService.copyFromContent(this.value);
    console.log(this.value);
  }

  /* Functionalty for Delete Ticket */
  Delete() {
    let confirm: any = alert('Are you sure to delete?');
    if (confirm == true) {
      this.value = '';
      window.location.reload();
    }
  }
}
