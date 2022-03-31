import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelDataComponent } from 'src/app/_metronic/partials/content/widgets/tables/excel-data/excel-data.component';
import { GoogleAddresIntegrationComponent } from 'src/app/_metronic/partials/content/widgets/tables/google-addres-integration/google-addres-integration.component';
import { JsonTableComponent } from 'src/app/_metronic/partials/content/widgets/tables/json-table/json-table.component';
import { SendMailsComponent } from 'src/app/_metronic/partials/content/widgets/tables/send-mails/send-mails.component';
import { ServerGridComponent } from 'src/app/_metronic/partials/content/widgets/tables/server-grid/server-grid.component';
import { AuthGuard } from 'src/app/_metronic/partials/content/widgets/tables/sign-with-google/auth.guard';
import { SignWithGoogleComponent } from 'src/app/_metronic/partials/content/widgets/tables/sign-with-google/sign-with-google.component';
import { SigninPageComponent } from 'src/app/_metronic/partials/content/widgets/tables/signin-page/signin-page.component';
import { TokenCrudComponent } from 'src/app/_metronic/partials/content/widgets/tables/token-crud/token-crud.component';
import { InterceptoreApiCrudComponent } from 'src/app/_metronic/partials/content/widgets/tables/token-using-interceptor/interceptore-api-crud/interceptore-api-crud.component';
import { TokenUsingInterceptorComponent } from 'src/app/_metronic/partials/content/widgets/tables/token-using-interceptor/token-using-interceptor.component';
import { UserDataGridComponent } from 'src/app/_metronic/partials/content/widgets/tables/user-data-grid/user-data-grid.component';
import { TablesComponent } from './tables/tables.component';
import { WidgetsExamplesComponent } from './widgets-examples.component';
const routes: Routes = [
  {
    path: '',
    component: WidgetsExamplesComponent,
    children: [
      {
        path: "",
        component: SignWithGoogleComponent
      },
      {
        path: "sign-with-google",
        component: SignWithGoogleComponent
      },
      {
        path: "signin-page",
        component: SigninPageComponent
      },
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: "jsontable",
        component: JsonTableComponent
      },
      {
        path: "server-grid",
        children: [
          {
            path: "",
            component: ServerGridComponent
          },
          {
            path: ":id",
            component: ServerGridComponent
          }
        ]
      },
      {
        path: "token-crud",
        component: TokenCrudComponent
      },
      {
        path: "google-map",
        component: GoogleAddresIntegrationComponent
      },
      {
        path: "exceldata",
        component: ExcelDataComponent
      },
      {
        path : "userdatagrid",
        component: UserDataGridComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "sendMails",
        component: SendMailsComponent
      },
      {
        path : "token-interceptor",
        component : TokenUsingInterceptorComponent
      },
      {
        path: "interceptor-crud",
        component: InterceptoreApiCrudComponent
      },
      { path: '', redirectTo: 'lists', pathMatch: 'full' },
      { path: '**', redirectTo: 'lists', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetsExamplesRoutingModule { }
