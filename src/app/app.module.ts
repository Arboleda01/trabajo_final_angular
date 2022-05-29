import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezaComponent } from './componentes/cabeza/cabeza.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { S1Component } from './componentes/s1/s1.component';
import { S2Component } from './componentes/s2/s2.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Web1Component } from './paginas/web1/web1.component';
import { Web2Component } from './paginas/web2/web2.component';
import { S1W2Component } from './componentes/s1-w2/s1-w2.component';
import { Web3CrudComponent } from './paginas/web3-crud/web3-crud.component';
import { CrudComponent } from './componentes/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    MenuComponent,
    S1Component,
    S2Component,
    PieComponent,
    Web1Component,
    Web2Component,
    S1W2Component,
    Web3CrudComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
