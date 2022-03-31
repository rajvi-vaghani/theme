import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsExamplesRoutingModule } from './widgets-examples-routing.module';
import { WidgetsExamplesComponent } from './widgets-examples.component';
import { TablesComponent } from './tables/tables.component';
import { WidgetsModule } from '../../_metronic/partials';
import { JsonTableComponent } from 'src/app/_metronic/partials/content/widgets/tables/json-table/json-table.component';

@NgModule({
  declarations: [
    WidgetsExamplesComponent,
    TablesComponent,
    JsonTableComponent
  ],
  imports: [CommonModule, WidgetsExamplesRoutingModule, WidgetsModule],
})
export class WidgetsExamplesModule {}
