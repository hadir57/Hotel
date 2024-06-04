import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { ChambreService } from 'src/Services/chambre.service';
import { ReservationService } from 'src/Services/reservation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  Nb_Reservation!: number;
  Nb_Chambre!: number;

  nbSimple: number = 0;
  nbDouble: number = 0;
  nbTriple: number = 0;
  tab_reservation: number[] = [];
  chartData: ChartDataset[] = [
    {
      label: '$ in Nb_Reservation ',
      data: this.tab_reservation,
    },
  ];
  chartDatapie: ChartDataset[] = [
    {
      label: '$ repartition',
      data: [],
    },
  ];
  chartDatabar: ChartDataset[] = [
    {
      label: '$ Nb_Chambre',
      data: [],
    },
  ];
  chartLabels: string[] = [];
  chartLabelsbar: string[] = [];
  chartLabelspie: string[] = ['Simple', 'Double', 'Triple'];
  chartOptions: ChartOptions = {};
  
  constructor(
    private RS: ReservationService,
    private CS: ChambreService,
  ) {}

  ngOnInit(): void {
    this.getResevation();
    this.getChambre();
  }
  
  getResevation() {
    // Ajoutez votre logique ici
  }
  
  getChambre() {
    this.CS.getAllChambres().subscribe((res) => {
      this.Nb_Chambre = res.length;
      res.forEach((el) => {
        this.chartLabels.push(el.type);
        this.tab_reservation.push(el.tab_pub.length);
        if (el.type === 'Simple') {
          this.nbSimple++;
        } else if (el.type === 'Double') {
          this.nbDouble++;
        } else {
          this.nbTriple++;
        }
      });
      
      this.chartDatapie = [
        { label: '$ repartition', data: [this.nbSimple, this.nbDouble, this.nbTriple] },
      ];
      
      this.chartDatabar = [
        { label: '$ Nb_Chambre', data: [this.nbSimple, this.nbDouble, this.nbTriple] },
      ];
      
      this.chartData = [
        {
          label: '$ in Nb_Reservation',
          data: this.tab_reservation,
        },
      ];
    });
  }
}