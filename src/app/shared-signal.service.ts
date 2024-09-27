import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

interface Elemento {
  nome: string;
  simbolo: string;
  numeroAtomico: number;
}

@Injectable({
  providedIn: 'root'
})
export class SharedSignalService {
  // Signal compartilhado para o elemento selecionado
  elementoSelecionado = signal<Elemento | null>(null);

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }
}
