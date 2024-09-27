import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Definindo uma interface para o exemplo, se necessário
interface Selection {
  value: string; // Pode ajustar conforme necessário
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tabela-periodica';
  
  // Adicionando a propriedade `selection` com um valor inicial
  selection = new BehaviorSubject<Selection | null>(null);

  // Método para atualizar a seleção (apenas um exemplo de implementação)
  selecionar(valor: string) {
    this.selection.next({ value: valor });
  }
}
