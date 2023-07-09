import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  config: any = {};
  timerId: any;

  ngOnInit() {
    this.timerId = setInterval(() => this.calculateTime(), 1000);
  }

  calculateTime() {
    const startDate = new Date('2023-05-10T00:00:00');
    const now = new Date();
    const diffSeconds = Math.floor((now.getTime() - startDate.getTime()) / 1000);

    const days = Math.floor(diffSeconds / (3600 * 24));
    const hours = Math.floor((diffSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    const seconds = Math.floor(diffSeconds % 60);

    this.config = {
      leftTime: diffSeconds,
      format: `${days} Días ${hours} Horas ${minutes} Minutos ${seconds} Segundos`,
      demand: true, // Habilita el cálculo en tiempo real
      days: {
        text: 'Días',
        pluralText: 'Días',
      },
      hours: {
        text: 'Horas',
        pluralText: 'Horas',
      },
      minutes: {
        text: 'Minutos',
        pluralText: 'Minutos',
      },
      seconds: {
        text: 'Segundos',
        pluralText: 'Segundos',
  
      },
    };
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
