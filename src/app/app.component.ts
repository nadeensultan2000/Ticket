import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { ChartComponent } from "./chart/chart.component";
import { TableComponent } from "./table/table.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardComponent,ChartComponent, TableComponent]
})
export class AppComponent {

  title = 'ticket-2';

}
