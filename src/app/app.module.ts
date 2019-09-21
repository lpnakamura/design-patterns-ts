import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SourceComponent } from './practice-one/source/source.component';
import { DestinationComponent } from './practice-one/destination/destination.component';
import { FactoryComponent } from './factory-method/factory/factory.component';
import { PrivateModeratorComponent } from './sample-private/private-moderator/private-moderator.component';
import { ObserverComponent } from './observer-method/observer/observer.component';
import { ChainOfResponsabilityComponent } from './chain-of-responsability-method/chain-of-responsability/chain-of-responsability.component';

@NgModule({
  declarations: [
    AppComponent,
    SourceComponent,
    DestinationComponent,
    FactoryComponent,
    PrivateModeratorComponent,
    ObserverComponent,
    ChainOfResponsabilityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'source', component: SourceComponent},
      { path: 'factory', component: FactoryComponent},
      { path: 'observer', component: ObserverComponent},
      { path: 'cor', component: ChainOfResponsabilityComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
