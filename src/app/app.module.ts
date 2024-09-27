import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { AppRoutingModule } from './app-routing.module';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { WritableSignalComponent } from './writable-signal/writable-signal.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';
import { OnPushDemoComponent } from './on-push-demo/on-push-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    SignalsIntroComponent,
    WritableSignalComponent,
    ComputedSignalComponent,
    EffectsDemoComponent,
    OnPushDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
