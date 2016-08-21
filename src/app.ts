import { Router, RouterConfiguration } from "aurelia-router";
import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';
/**
 * 
 */
@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) { }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contatos';
    config.map([
      { route: '', moduleId: './system/no-selection', title: 'Select' },
      { route: 'contacts/:id', moduleId: './contact/contact-detail', name: 'contacts' }
    ]);

    this.router = router;
    
  }
}
