import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { WritableSignalComponent } from './writable-signal/writable-signal.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';
import { OnPushDemoComponent } from './on-push-demo/on-push-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' }, // Redireciona para 'elements' ao acessar a raiz
  { path: 'elements', component: ElementsComponent }, // Tela principal com a lista de elementos
  { path: 'intro', component: SignalsIntroComponent }, // Tela de introdução aos Signals
  { path: 'writable', component: WritableSignalComponent }, // Tela de sinais graváveis
  { path: 'computed', component: ComputedSignalComponent }, // Tela de cálculos computados
  { path: 'effects', component: EffectsDemoComponent }, // Tela de efeitos reativos
  { path: 'shared', component: OnPushDemoComponent }, // Tela de sinais compartilhados
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
