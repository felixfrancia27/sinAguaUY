import { Component, OnInit } from '@angular/core';



let apiLoaded = false;
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia-pasos.component.html',
  styleUrls: ['./experiencia-pasos.component.scss']
})
// https://youtu.be/8pCzrNP2K1E tutorial explicativo --felix

export class ExperienciaPasosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
  }

  }}
