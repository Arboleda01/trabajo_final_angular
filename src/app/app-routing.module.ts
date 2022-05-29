import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Web1Component } from './paginas/web1/web1.component';
import { Web2Component } from './paginas/web2/web2.component';
import { Web3CrudComponent } from './paginas/web3-crud/web3-crud.component';

const routes: Routes = [


{path: 'pagina1', component:Web1Component},
{path: 'pagina2', component: Web2Component},
{path: 'pagina3', component: Web3CrudComponent},

{path: '', component: Web1Component}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
