import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: String = 'Task tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle()
      .subscribe((value) => {
          this.showAddTask = value;
      });
  } 

  ngOnInit() { 
    console.log('on init');

  }

  toogleAddTask(): void {
    console.log('toogle');
    this.uiService.toggleAddTask();

  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
