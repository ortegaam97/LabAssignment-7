import { Component } from '@angular/core';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast-app';
  randomNumber: number;
  randomToastType: string;

  constructor(private toastService: ToastService) { }

  showToast() {
    this.randomNumber = Math.floor(Math.random() * 4) + 1;
    switch (this.randomNumber) {
      case 1: {
        this.randomToastType = 'info';
        break;
      }
      case 2: {
        this.randomToastType = 'success';
        break;
      }
      case 3: {
        this.randomToastType = 'warning';
        break;
      }
      case 4: {
        this.randomToastType = 'danger';
        break;
      }
    }

    const toastType = this.randomToastType;
    const toastMessage = 'The random number generated is:' + ' ' + this.randomNumber;
    const timeout = 4000;
    this.toastService.showToast(toastType, toastMessage, timeout);
  }
}
