import {Component, inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {contacts} from '../../data/website-content.data';
import {LocaleService} from '../../i18n/locale.service';

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
  readonly i18n = inject(LocaleService);
   model = {contactName: '', phone: '', email: '', message: ''};

   close() {
     this.dialogRef.close();
   }

   waLink(number: string) {
     const msg = `${this.i18n.copy().contactDialog.whatsappGreeting}
${this.i18n.copy().contactDialog.fullName}: ${this.model.contactName}
${this.i18n.copy().contactDialog.phone}: ${this.model.phone}
${this.i18n.copy().contactDialog.email}: ${this.model.email}
${this.i18n.copy().contactDialog.message}: ${this.model.message}`;
     const encoded = encodeURIComponent(msg);
     return `https://wa.me/${number}?text=${encoded}`;
   }
}
