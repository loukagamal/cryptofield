import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WhatIsIcoComponent } from './components/what-is-ico/what-is-ico.component';
import { HomeComponent } from './components/home/home.component';
import { WorkProcessComponent } from './components/work-process/work-process.component';
import { CoreModule } from 'src/app/core/core.module';
import { ContactComponent } from './components/contact/contact.component';
import { OurtTeamComponent } from './components/ourt-team/ourt-team.component';

@NgModule({
  declarations: [WhatIsIcoComponent, HomeComponent, WorkProcessComponent, ContactComponent, OurtTeamComponent],
  imports: [CommonModule, HomeRoutingModule,CoreModule],
  exports: [WhatIsIcoComponent, HomeComponent, WorkProcessComponent,ContactComponent],
})
export class HomeModule {}
