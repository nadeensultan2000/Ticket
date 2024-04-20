import { Component } from '@angular/core';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { QRCodeModule } from 'angularx-qrcode';
import {  TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [QRCodeModule,TooltipModule,ClipboardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  text:string="www.tazkty.com/473847";
  constructor(private clipboard: Clipboard) { }
  copyText(text: string): void {
    this.clipboard.copy(text);
  }


}
