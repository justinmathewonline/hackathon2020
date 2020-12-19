import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import {PopupService} from '../popup/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() id: string;
  private element: any;
  constructor(private modalService: PopupService, private el: ElementRef) {
    this.element = el.nativeElement;
   }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
  }
  // move element to bottom of page (just before </body>) so it can be displayed above everything else
  document.body.appendChild(this.element);

  // close modal on background click
  this.element.addEventListener('click', el => {
      if (el.target.className === 'mmodal') {
          this.close();
      }
  });
  // add self (this modal instance) to the modal service so it's accessible from controllers
  this.modalService.add(this);
    // this.el.nativeElement.addEventListener('click', () => {
    //   this.close();
    // });
  }
  // close() {
  //   this.el.nativeElement.classList.remove('sshow');
  //   this.el.nativeElement.classList.add('hhidden');
  // }
 // remove self from modal service when component is destroyed
 ngOnDestroy(): void {
  this.modalService.remove(this.id);
  this.element.remove();
}
    // open modal
    open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('jw-modal-open');
  }
}
