import { Routes, RouterModule }  from '@angular/router';
import { HostsComponent } from './hosts.component';

const routes: Routes = [
  {
    path: '',
    component: HostsComponent,
  }
];

export const routing = RouterModule.forChild(routes);
