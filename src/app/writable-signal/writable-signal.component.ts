import { Component } from '@angular/core';
import { signal } from '@angular/core';

interface Elemento {
  nome: string;
  simbolo: string;
  numeroAtomico: number;
}

@Component({
  selector: 'app-writable-signal',
  templateUrl: './writable-signal.component.html',
  styleUrls: ['./writable-signal.component.css']
})
export class WritableSignalComponent {
  elementoSelecionado = signal<Elemento | null>(null);

  elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1 },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8 },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11 },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17 },
  ];

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }

  resetarSelecao() {
    this.elementoSelecionado.set(null);
  }
}
