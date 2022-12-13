import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  position: string = 'toast-bottom-left';
  progressBarStatus: 'decreasing' | 'increasing' | null = 'increasing';
  closeBtn: boolean = true;

  constructor(
    private toasterService: ToastrService
  ) { }

  /**
   * show error toast
   * @param message
   */
  error(message: string): void{
    this.toasterService.error('', message, {positionClass: this.position, progressBar: this.progressBarStatus? true: false, progressAnimation:  this.progressBarStatus? this.progressBarStatus: 'increasing', closeButton: this.closeBtn});
  }

  /**
   * show success toast
   * @param message
   */
  success(message: string): void{
    this.toasterService.success('', message, {positionClass: this.position, progressBar: this.progressBarStatus? true: false, progressAnimation:  this.progressBarStatus? this.progressBarStatus: 'increasing', closeButton: this.closeBtn});
  }

}
