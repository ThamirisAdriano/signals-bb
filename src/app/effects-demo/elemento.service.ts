import { Injectable } from '@angular/core';
import { signal, effect } from '@angular/core';

export interface Elemento {
  nome: string;
  simbolo: string;
  numeroAtomico: number;
}

@Injectable({
  providedIn: 'root'
})
export class ElementoService {
  // Sinal gravável para armazenar o elemento selecionado
  elementoSelecionado = signal<Elemento | null>(null);

  constructor() {
    // Efeito que faz log sempre que o elemento selecionado mudar
    effect(() => {
      const elemento = this.elementoSelecionado();
      if (elemento) {
        console.log(`Log do Serviço: Elemento Selecionado: ${elemento.nome}`);
      }
    });
  }

  // Método para atualizar o sinal de elemento selecionado
  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }

  // Método para retornar o elemento selecionado
  obterElementoSelecionado() {
    return this.elementoSelecionado();
  }
}
