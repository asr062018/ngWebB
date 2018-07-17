import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoFormBuilderComponent } from './demo-form-builder/demo-form-builder.component';
import { DemoFormWithValidationComponent } from './demo-form-with-validation/demo-form-with-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent,
    DemoFormBuilderComponent,
    DemoFormWithValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
