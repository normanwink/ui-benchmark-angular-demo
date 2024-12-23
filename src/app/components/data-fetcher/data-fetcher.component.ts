import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-fetcher',
  standalone: true,
  imports: [
    HttpClientModule,
  ],
  templateUrl: './data-fetcher.component.html'
})
export class DataFetcherComponent implements OnInit {
  private http: HttpClient = inject(HttpClient);

  dataText: string = 'Loading...';

  ngOnInit(): void {
    this.http.get<{ text: string }>('http://localhost:3000/test').subscribe({
      next: (response: { text: string }) => {
        this.dataText = response.text;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.dataText = 'Error fetching data';
      }
    });
  }
}
