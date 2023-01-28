import { Component, HostListener, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { smBreakpoint } from 'src/app/shared/constants/breakpoints';
import { getMenuDefinitions } from 'src/app/shared/constants/menuDefinition';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onResize(event: any): void {
    const innerWidth = event.target.window.innerWidth;
    this.collapseMenu = innerWidth <= smBreakpoint;

    if (!this.collapseMenu) this.offcanvasService.dismiss();
  }

  public collapseMenu!: boolean;
  public menuDefinitions = getMenuDefinitions();
  public isLoggedIn = false;
  user = { name: 'Mateusz' };

  constructor(private offcanvasService: NgbOffcanvas) {}

  ngOnInit(): void {
    this.collapseMenu = window.innerWidth <= smBreakpoint;
  }

  open(content: any) {
    this.offcanvasService
      .open(content, {
        position: 'end',
        ariaLabelledBy: 'offcanvas-basic-title',
      })
      .result.then(
        (result: any) => {},
        (reason: any) => {}
      );
  }

  close() {
    this.offcanvasService.dismiss();
  }
}
