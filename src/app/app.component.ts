import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataFetcherComponent } from './components/data-fetcher/data-fetcher.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, DataFetcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui-benchmark-angular-demo';
}
