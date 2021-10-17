import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { weather } from '../apiservice/api.service';

@Component({
  selector: 'app-newscomp',
  templateUrl: './newscomp.component.html',
  styleUrls: ['./newscomp.component.scss']
})
export class NewscompComponent implements OnInit {



  news_obj = {
    'title': '',
    'description': '',
    'urlToImage': ''
  }

  username = "Name"
  location = "Location Name"
  news: Subscription | undefined
  newsreport: any = [];
  //tem =this.weatherReportData.main.temp;
  //tem2= this.tem -273;
  constructor(private newservice: weather) { }

  ngOnInit(): void {

    this.news = this.newservice.newsdata$.subscribe((response: any) => {
      console.log(response)
      this.newsreport = response.articles;
      
    })
    this.newservice.newsdata({});
  }
}
