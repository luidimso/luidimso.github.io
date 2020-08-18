import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from "chart.js";
import { env } from "../../../common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  totalProjects:number = 8;
  page:string = "home";
  @ViewChild("lang") langChart: any;
  @ViewChild("langMobile") langChartMobile: any;
  @ViewChild("framework") frameworkChart: any;
  @ViewChild("frameworkMobile") frameworkChartMobile: any;

  dataLang:Chart.ChartData = {
    labels: ["HTML/CSS", "JavaScript", "Java", "SQL", "TypeScript", "PHP"],
    datasets: [{
      backgroundColor: ["#DE4B25", "#f4b300", "#8C0C12", "#7CB500", "#3075C1", "#7478AE"],
      data: [8, 5, 4, 3, 3, 1]
    }]
  };
  dataFramework:Chart.ChartData = {
    labels: ["Bootstrap", "JQuery", "VRaptor", "Angular", "Ionic", "Cordova", "Hibernate", "NodeJS"],
    datasets: [{
      backgroundColor: ["#623E8C", "#20A7DC", "#424242", "#BE002E", "#367DF8", "#252E36", "#B8A876", "#8CC03D"],
      data: [5, 5, 4, 3, 3, 3, 3, 2]
    }]
  };

  chartOptions:Chart.ChartOptions = env.chartOptions;
  chartOptionsMobile:Chart.ChartOptions = env.chartOptionsMobile;

  constructor() {
  }

  ngOnInit(){
  }

  ngAfterViewInit() {
    var totalProjects = this.totalProjects;

    this.langChart = new Chart(this.langChart.nativeElement, {
      type: "bar",
			data: this.dataLang,
      options: this.chartOptions
    });
    this.langChartMobile = new Chart(this.langChartMobile.nativeElement, {
      type: "bar",
			data: this.dataLang,
      options: this.chartOptionsMobile
    });

    this.frameworkChart = new Chart(this.frameworkChart.nativeElement, {
      type: "bar",
			data: this.dataFramework,
      options: this.chartOptions
    });
    this.frameworkChartMobile = new Chart(this.frameworkChartMobile.nativeElement, {
      type: "bar",
			data: this.dataFramework,
      options: this.chartOptionsMobile
    });
  }
}
