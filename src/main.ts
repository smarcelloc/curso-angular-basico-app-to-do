import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Plataforma Browser Dinâmico
// para compatibilidade como Desktop e Mobile
platformBrowserDynamic()
  // Invocando o AppModulo (main)
  .bootstrapModule(AppModule)
  // Reportar erro no console toda aplicação
  .catch(err => console.error(err));
