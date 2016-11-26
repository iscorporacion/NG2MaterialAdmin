import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HostsComponent } from './hosts.component';
import { routing } from './hosts.routing';
import { Environment } from "./components/environment/environment.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    HostsComponent,
    Environment,
  ]
})
export default class HostsModule {}
