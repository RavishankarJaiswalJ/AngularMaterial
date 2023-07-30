import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './AppModules/mat.module';
import { HeaderComponent } from './Includes/header/header.component';
import { FooterComponent } from './Includes/footer/footer.component';
import { MainComponent } from './Pages/main/main.component';
import { ButtonComponent } from './Pages/button/button.component';
import { ToggleButtonComponent } from './Pages/toggle-button/toggle-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicComponent } from './Pages/dynamic/dynamic.component';
import { ElevationComponent } from './Pages/elevation/elevation.component';
import { RippleComponent } from './Pages/ripple/ripple.component';
import { MenuComponent } from './Pages/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ButtonComponent,
    ToggleButtonComponent,
    DynamicComponent,
    ElevationComponent,
    RippleComponent,
    MenuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
   
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
