import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';

interface Elemento {
  nome: string;
  simbolo: string;
  numeroAtomico: number;
  numeroNeutrons: number;
}

@Component({
  selector: 'app-computed-signal',
  templateUrl: './computed-signal.component.html',
  styleUrls: ['./computed-signal.component.css']
})
export class ComputedSignalComponent {
  // Sinais para os dois elementos selecionados
  elementoSelecionado1 = signal<Elemento | null>(null);
  elementoSelecionado2 = signal<Elemento | null>(null);

  // Computed Signal para calcular a massa atômica dos elementos selecionados
  massaAtomicaTotal = computed(() => {
    const elemento1 = this.elementoSelecionado1();
    const elemento2 = this.elementoSelecionado2();
    const massa1 = elemento1 ? elemento1.numeroAtomico + elemento1.numeroNeutrons : 0;
    const massa2 = elemento2 ? elemento2.numeroAtomico + elemento2.numeroNeutrons : 0;
    return massa1 + massa2;
  });

  // Lista de elementos com número de nêutrons
  elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1, numeroNeutrons: 0 },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8, numeroNeutrons: 8 },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11, numeroNeutrons: 12 },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17, numeroNeutrons: 18 },
    { nome: 'Argônio', simbolo: 'Ar', numeroAtomico: 18, numeroNeutrons: 22 },
    { nome: 'Potássio', simbolo: 'K', numeroAtomico: 19, numeroNeutrons: 20 },
    { nome: 'Calcio', simbolo: 'Ca', numeroAtomico: 20, numeroNeutrons: 24 },
    { nome: 'Estrôncio', simbolo: 'Se', numeroAtomico: 34, numeroNeutrons: 34 }
  ];

  // Funções para selecionar os elementos
  selecionarElemento1(elemento: Elemento) {
    this.elementoSelecionado1.set(elemento);
  }

  selecionarElemento2(elemento: Elemento) {
    this.elementoSelecionado2.set(elemento);
  }
}
