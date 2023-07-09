import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  
  constructor() { }
  isAuth: boolean = false;
  ngOnInit(): void {
   this.isAuth = this.readSessionStorage('IsAuth') != null;
  }


  readSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }
  
}
