import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { DropdownMenusModule } from '../dropdown-menus/dropdown-menus.module';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablesWidget11Component } from './tables/tables-widget11/tables-widget11.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerGridComponent } from './tables/server-grid/server-grid.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { GMapModule } from 'primeng/gmap';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PaginatorModule } from 'primeng/paginator';
import { TokenCrudComponent } from './tables/token-crud/token-crud.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CardModule } from 'primeng/card';
import { GoogleAddresIntegrationComponent } from './tables/google-addres-integration/google-addres-integration.component';
import { ExcelDataComponent } from './tables/excel-data/excel-data.component';
import { SignWithGoogleComponent } from './tables/sign-with-google/sign-with-google.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'ng-social-login-module';
import { SigninPageComponent } from './tables/signin-page/signin-page.component';
import { UserDataGridComponent } from './tables/user-data-grid/user-data-grid.component';
import { ToastrModule } from 'ngx-toastr';
import { SendMailsComponent } from './tables/send-mails/send-mails.component';
import { TokenUsingInterceptorComponent } from './tables/token-using-interceptor/token-using-interceptor.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorServiceService } from './tables/token-using-interceptor/interceptor-service.service';
import { AuthHelpers } from './tables/sign-with-google/auth.heapers';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    // 969561055507 = ankita , 1016994148249 = stackblick
    // provider: new GoogleLoginProvider('1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com')
    provider: new GoogleLoginProvider('969561055507-hd9h4a12vtra25nive9t02ngh0nc6j2k.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("")

  }
], true);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [
    TablesWidget11Component,
    ServerGridComponent,
    TokenCrudComponent,
    GoogleAddresIntegrationComponent,
    ExcelDataComponent,
    SignWithGoogleComponent,
    SigninPageComponent,
    UserDataGridComponent,
    SendMailsComponent,
    TokenUsingInterceptorComponent
  ],
  imports: [
    CommonModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ProgressBarModule,
    ButtonModule,
    NgbModule,
    GMapModule,
    MultiSelectModule,
    ToastModule,
    ContextMenuModule,
    SliderModule,
    AutoCompleteModule,
    PaginatorModule,
    CalendarModule,
    TableModule,
    DialogModule,
    FileUploadModule,
    ToolbarModule,
    DropdownModule,
    InputTextareaModule,
    ConfirmDialogModule,
    InputNumberModule,
    RadioButtonModule,
    NgxPaginationModule,
    GooglePlaceModule,
    CardModule,
    SocialLoginModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      // useClass: AuthHelpers,
      useClass: InterceptorServiceService,
      multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  exports: [
    TablesWidget11Component
  ]
})
export class WidgetsModule { }
