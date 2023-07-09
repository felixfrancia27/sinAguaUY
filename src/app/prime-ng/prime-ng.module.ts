import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { AutoFocusModule } from 'primeng/autofocus';


@NgModule({
  exports: [
    FormsModule,
    AccordionModule,
    AutoFocusModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    DialogModule,
    InputSwitchModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    RippleModule,
    StyleClassModule,
    TableModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
