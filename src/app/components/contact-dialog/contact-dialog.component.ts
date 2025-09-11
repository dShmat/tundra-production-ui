import {Component, inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {contacts} from '../../data/website-content.data';

@Component({
  selector: 'app-contact-dialog',
  imports: [
    FormsModule
  ],
  templateUrl: './contact-dialog.component.html'
})
export class ContactDialogComponent {
  private dialogRef = inject(MatDialogRef<ContactDialogComponent>);
  protected contacts = contacts;
   model = {contactName: '', phone: '', email: '', message: ''};

   close() {
     this.dialogRef.close();
   }

   waLink(number: string) {
     const msg = `Hello! I'd like to book a session.
 Name: ${this.model.contactName}
 Phone: ${this.model.phone}
 Email: ${this.model.email}
 Message: ${this.model.message}`;
     const encoded = encodeURIComponent(msg);
     return `https://wa.me/${number}?text=${encoded}`;
   }
}
