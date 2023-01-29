import { Injectable } from '@angular/core';

export type Toast = {
  text: string;
  options?: {
    classname: string;
    delay: number;
  };
};

type finallyToast = Required<Pick<Toast, 'text' | 'options'>>;

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: Toast[] = [];

  showStandard(toast: Toast) {
    this._show({
      text: toast.text,
      options: toast.options || {
        classname: 'bg-light text-dark',
        delay: 3000,
      },
    });
  }

  showSuccess(toast: Toast) {
    this._show({
      text: toast.text,
      options: toast.options || {
        classname: 'bg-success text-light',
        delay: 3000,
      },
    });
  }

  showDanger(text: string, options?: any) {
    this._show({
      text: text,
      options: options || {
        classname: 'bg-danger text-light',
        delay: 3000,
      },
    });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  private _show(toast: finallyToast) {
    this.toasts.push({ text: toast.text, options: { ...toast.options } });
    console.log(this.toasts);
  }
}
