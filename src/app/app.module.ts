import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { HttpClientModule } from '@angular/common/http';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { SearchPipe } from './shared/pipes/search.pipe';

export const options: Partial<IConfig> | (() => Partial<IConfig>)=null;


@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,   
    AngularMultiSelectModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
