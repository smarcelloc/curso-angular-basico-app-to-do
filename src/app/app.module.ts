import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // Configuram o injetor de Módulo
import { ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';

// Declaração, Importes, Providers e inicialização
// @decorator ({
//  metadados ...
//})
@NgModule({
  // Meus Componentes
  declarations: [
    AppComponent
  ],
  // Angular Modulo
  imports: [
    BrowserModule, // Para trabalhar com Mobile e Desktop
    ReactiveFormsModule
  ],
  providers: [], // Prover serviços para todos @NgModule
  bootstrap: [AppComponent] // inicialização
})
// Classe pública AppModule
export class AppModule { }
