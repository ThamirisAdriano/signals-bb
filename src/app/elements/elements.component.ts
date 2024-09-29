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
  elementos: WritableSignal<Elemento[]> = signal([
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1, massaAtomica: 1.008, grupo: 'Não-metal' },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8, massaAtomica: 15.999, grupo: 'Não-metal' },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11, massaAtomica: 22.990, grupo: 'Metal Alcalino' },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17, massaAtomica: 35.45, grupo: 'Halogênio' },
    { nome: 'Argônio', simbolo: 'Ar', numeroAtomico: 18, massaAtomica: 39.948, grupo: 'Gaseoso' },
    { nome: 'Potássio', simbolo: 'K', numeroAtomico: 19, massaAtomica: 39.098, grupo: 'Metal Alcalinoterroso' },
    { nome: 'Calcio', simbolo: 'Ca', numeroAtomico: 20, massaAtomica: 40.078, grupo: 'Metal Alcalinoterroso' }
  ]);

  elementoSelecionado = signal<Elemento | null>(null);

  propriedadesElemento = computed(() => {
    const elemento = this.elementoSelecionado();
    return elemento
      ? `${elemento.nome} (${elemento.simbolo}) - Número Atômico: ${elemento.numeroAtomico}, Massa Atômica: ${elemento.massaAtomica}, Grupo: ${elemento.grupo}`
      : 'Nenhum elemento selecionado';
  });

  filtrarPorGrupo(grupo: string): Elemento[] {
    return this.elementos().filter(elemento => elemento.grupo === grupo);
  }
  
  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }
}
