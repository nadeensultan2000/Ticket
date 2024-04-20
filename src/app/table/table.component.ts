import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import{TableModule} from 'primeng/table'
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TooltipModule,TableModule,ButtonModule,PaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  
 tickets:object[]=
[
  {"id": 0,"name":"mohamed" ,"ticketNumber":"C-101","price":56,"cenima":"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...","persons":1,"numberoftimes":"مرة واحدة","ticketPdF":"ticket.pdf"}
,  {"id": 0,"name":"mohamed" ,"ticketNumber":"C-101","price":56,"cenima":"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...","persons":1,"numberoftimes":"مرة واحدة","ticketPdF":"ticket.pdf"}
,  {"id": 0,"name":"mohamed" ,"ticketNumber":"C-101","price":56,"cenima":"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...","persons":1,"numberoftimes":"مرة واحدة","ticketPdF":"ticket.pdf"}
,  {"id": 0,"name":"mohamed" ,"ticketNumber":"C-101","price":56,"cenima":"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...","persons":1,"numberoftimes":"مرة واحدة","ticketPdF":"ticket.pdf"}
,  {"id": 0,"name":"mohamed" ,"ticketNumber":"C-101","price":56,"cenima":"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...","persons":1,"numberoftimes":"مرة واحدة","ticketPdF":"ticket.pdf"}
,  {"id": 0,"name":"mohamed" ,"ticketNumber":"C-101","price":56,"cenima":"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...","persons":1,"numberoftimes":"مرة واحدة","ticketPdF":"ticket.pdf"}
,  {"id": 0,"name":"mohamed" ,"ticketNumber":"C-101","price":56,"cenima":"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...","persons":1,"numberoftimes":"مرة واحدة","ticketPdF":"ticket.pdf"}
,  {"id": 0,"name":"mohamed" ,"ticketNumber":"C-101","price":56,"cenima":"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...","persons":1,"numberoftimes":"مرة واحدة","ticketPdF":"ticket.pdf"}

]

}

