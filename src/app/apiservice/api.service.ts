import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class weather {
    WeatherStatus$ = new Subject()
    newsdata$= new Subject()

    constructor(private http: HttpClient) { }

    weatherdata(data: any){
        console.log(data)
        let url=`http://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=407d142875b50f8f94e8bd9d43c79b12`;
        return this.http.get(url).subscribe((res: any)=> {
            console.log(res)
            this.WeatherStatus$.next(res);
        })  
    }

    newsdata(data : any){
        console.log(data)
        let url='https://newsapi.org/v2/everything?q=in&from=2021-10-16&sortBy=popularity&apiKey=ee95568d194244b0bdda5827feb01e77';
        return this.http.get(url).subscribe((res: any)=> {
            console.log(res)
            this.newsdata$.next(res);
        })
    }
}




