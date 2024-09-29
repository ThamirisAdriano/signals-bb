import { Component } from '@angular/core';
import { signal, computed, WritableSignal } from '@angular/core';

interface Elemento {
  nome: string;
  simbolo: string;
  numeroAtomico: number;
  massaAtomica: number;
  grupo: string;
}

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent {
  // Criando um Signal para armazenar a lista de elementos químicos
  elementos: WritableSignal<Elemento[]> = signal([
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1, massaAtomica: 1.008, grupo: 'Não-metal' },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8, massaAtomica: 15.999, grupo: 'Não-metal' },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11, massaAtomica: 22.990, grupo: 'Metal Alcalino' },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17, massaAtomica: 35.45, grupo: 'Halogênio' },
    { nome: 'Argônio', simbolo: 'Ar', numeroAtomico: 18, massaAtomica: 39.948, grupo: 'Gaseoso' },
    { nome: 'Potássio', simbolo: 'K', numeroAtomico: 19, massaAtomica: 39.098, grupo: 'Metal Alcalino' },
  ]);

  // Signal para o elemento selecionado
  elementoSelecionado = signal<Elemento | null>(null);

  // Computed Signal para exibir propriedades do elemento selecionado
  propriedadesElemento = computed(() => {
    const elemento = this.elementoSelecionado();
    return elemento
      ? `${elemento.nome} (${elemento.simbolo}) - Número Atômico: ${elemento.numeroAtomico}, Massa Atômica: ${elemento.massaAtomica}, Grupo: ${elemento.grupo}`
      : 'Nenhum elemento selecionado';
  });

  // implement a method that filters the elements array based on the search term
  filtrarElementos(termo: string) {
    return this.elementos().filter(elemento =>
      elemento.nome.toLowerCase().includes(termo.toLowerCase()) ||
      elemento.simbolo.toLowerCase().includes(termo.toLowerCase())
    );
  }

  // Método para selecionar um elemento
  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }
}
