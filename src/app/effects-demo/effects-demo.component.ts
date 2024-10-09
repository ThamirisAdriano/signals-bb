import { Component } from '@angular/core';
import { ElementoService, Elemento } from './elemento.service'; // Importa o serviço e a interface

@Component({
  selector: 'app-effects-demo',
  templateUrl: './effects-demo.component.html',
  styleUrls: ['./effects-demo.component.css']
})
export class EffectsDemoComponent {

  constructor(private elementoService: ElementoService) {}

  elementos = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1 },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8 },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11 },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17 }
  ];

  selecionarElemento(elemento: Elemento) {
    this.elementoService.selecionarElemento(elemento); // Atualiza o estado via serviço
  }

  obterElementoSelecionado() {
    return this.elementoService.obterElementoSelecionado(); // Obtém o estado via serviço
  }
}
