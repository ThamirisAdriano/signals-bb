import { Component } from '@angular/core';
import { signal, effect } from '@angular/core';

interface Elemento {
  nome: string;
  simbolo: string;
  numeroAtomico: number;
}

@Component({
  selector: 'app-effects-demo',
  templateUrl: './effects-demo.component.html',
  styleUrls: ['./effects-demo.component.css']
})
export class EffectsDemoComponent {
  elementoSelecionado = signal<Elemento | null>(null);

  elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1 },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8 },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11 },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17 },
  ];

  constructor() {
    // Efeito que faz log sempre que o elemento selecionado muda
    effect(() => {
      const elemento = this.elementoSelecionado();
      if (elemento) {
        console.log(`Elemento Selecionado: ${elemento.nome}`);
      }
    });
  }

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }
}
