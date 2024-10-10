# O que são signals no angular?

![image](https://github.com/user-attachments/assets/e25ef7e6-fb2a-4594-95fc-44ff21cdb17e)


Os **signals** são uma nova funcionalidade que chegou no Angular 16 e vieram para simplificar a forma como lidamos com o estado em componentes. Em vez de precisarmos de mecanismos complexos, como observables ou gerenciadores de estado pesados, os signals oferecem uma maneira mais direta e eficiente de monitorar mudanças e atualizar a interface do usuário.

Um **signal** nada mais é do que um "guardador de valor", ou seja, ele armazena um dado e avisa automaticamente o Angular quando esse dado muda. Isso significa que, sempre que o valor de um signal for alterado, a interface vai se atualizar de forma reativa, sem que você precise fazer nada de especial para isso.

## Exemplo prático: criando e atualizando um signal

Vamos criar um signal chamado `elementoSelecionado`, que vai armazenar qual elemento químico foi selecionado pelo usuário. Inicialmente, ele será `null` porque nenhum elemento está selecionado. Depois, quando o usuário clicar em um item da lista, atualizamos esse signal.

```tsx
elementoSelecionado = signal<Elemento | null>(null);
```

Toda vez que o usuário escolher um elemento, o método `.set()` é chamado, atualizando o estado do `elementoSelecionado`. Olha como é simples fazer isso:

```tsx

selecionarElemento(elemento: Elemento) {
  this.elementoSelecionado.set(elemento);
}
```

Agora, a mágica acontece: toda vez que o estado do `elementoSelecionado` mudar, a interface que depende desse valor será automaticamente atualizada!

https://github.com/user-attachments/assets/101f1546-3f9c-4d4b-9b94-3f9d4ec3a259


### Signals vs observables: menos complicação, mais simplicidade

Embora os **observables** sejam poderosos e continuem sendo muito úteis no Angular, principalmente para coisas mais complexas, como chamadas de API ou eventos contínuos, os **signals** são uma alternativa bem mais simples para cenários onde você só precisa lidar com o estado local ou mudanças pontuais.

Ao contrário dos observables, que precisam de assinaturas e operadores para manipular dados, os signals são mais "plug and play". Você cria um signal, atualiza seu valor, e o Angular cuida do resto, sem precisar de muito código extra.

### Exemplo de signal computado

```tsx
elementoInfo = computed(() => {
  const elemento = this.elementoSelecionado();
  return elemento
    ? `Nome: ${elemento.nome} (${elemento.simbolo}), Número Atômico: ${elemento.numeroAtomico}`
    : 'Nenhum elemento selecionado';
});
```

Aqui, o `elementoInfo` vai sempre gerar uma string com o nome, símbolo e número atômico do elemento que o usuário selecionou. Se o `elementoSelecionado` mudar, o `elementoInfo` também será atualizado automaticamente, sem que você precise reescrever código para isso. Essa abordagem é chamada de **lazy evaluation** — ou seja, o valor só é calculado quando necessário.

### Como tudo isso se encaixa na interface

Com os signals, a forma de exibir os dados na interface fica super simples. Aqui está um exemplo de como você pode usar os signals no HTML para exibir o elemento selecionado e suas informações detalhadas:

```html
<ul>
  <li *ngFor="let elemento of elementos" (click)="selecionarElemento(elemento)">
    {{ elemento.nome }} ({{ elemento.simbolo }})
  </li>
</ul>

<p *ngIf="elementoSelecionado()">Elemento Selecionado: {{ elementoSelecionado()?.nome }}</p>

<p>{{ elementoInfo() }}</p>

```

Esse código faz o seguinte:

1. Mostra uma lista de elementos químicos e, quando o usuário clica em um deles, o `elementoSelecionado` é atualizado.
2. Exibe o nome do elemento selecionado (se houver um).
3. Mostra as informações detalhadas do elemento usando o signal computado `elementoInfo`.

### Writable Signals e Computed Signals: Entendendo as Diferenças
No Angular, os signals podem ser de dois tipos principais: writable signals (sinais graváveis) e computed signals (sinais computados). Cada um tem um papel diferente no gerenciamento do estado:

Writable Signals: Esses sinais permitem que você armazene e atualize valores diretamente. Ou seja, você pode mudar o valor do sinal usando o método .set(). No nosso exemplo, elementoSelecionado é um sinal gravável. Isso significa que, quando o usuário clica em um elemento da lista, o valor de elementoSelecionado é atualizado com as informações do elemento selecionado.

```
elementoSelecionado = signal<Elemento | null>(null); // Sinal gravável
```

Os sinais graváveis são ideais para situações em que o valor muda diretamente, como em interações de usuário (clicar em um botão, selecionar um item, etc.).

Computed Signals: Já os sinais computados dependem de outros sinais para gerar um valor. Eles são "leitores", ou seja, não podemos atualizar diretamente seu valor. No nosso exemplo, elementoInfo é um sinal computado, porque ele deriva seu valor a partir do elementoSelecionado. Toda vez que elementoSelecionado muda, o valor de elementoInfo é recalculado automaticamente.

```
elementoInfo = computed(() => {
  const elemento = this.elementoSelecionado();
  return elemento
    ? `Nome: ${elemento.nome} (${elemento.simbolo}), Número Atômico: ${elemento.numeroAtomico}`
    : 'Nenhum elemento selecionado';
});
```
Esse mecanismo de lazy evaluation garante que o valor só será calculado quando necessário, e o resultado é armazenado em cache até que o sinal base (elementoSelecionado) mude.

###Controle Sobre Efeitos no Angular
Agora que entendemos como funcionam os writable e computed signals, podemos explorar como os efeitos entram em cena. No Angular, um efeito é uma função que é executada sempre que um ou mais sinais mudam. Isso pode ser útil para gerar logs, sincronizar dados com uma API, ou até mesmo executar ações assíncronas.

O que torna os efeitos especiais é a possibilidade de controlar quando eles devem ser criados e quando devem ser destruídos. Isso garante que não consumimos recursos de maneira desnecessária, como memória ou processamento, quando um efeito não é mais necessário.

No Angular, usamos a função onCleanup() para garantir que qualquer recurso que um efeito esteja utilizando seja limpo corretamente quando o efeito for destruído ou reiniciado. Isso é importante quando você está lidando com tarefas como assinaturas, logs, timers, ou chamadas de API.

Exemplo básico de controle sobre a criação e destruição de um efeito:

```
effect(() => {
  const elemento = this.elementoSelecionado();
  if (elemento) {
    console.log(`Elemento Selecionado: ${elemento.nome}`);

    // Função de limpeza que é executada quando o efeito for destruído ou reiniciado
    onCleanup(() => {
      console.log(`Efeito destruído para o elemento: ${elemento.nome}`);
    });
  }
});
```

###Por que isso é importante?
Quando estamos criando uma aplicação, como a de elementos químicos, nem sempre queremos que os efeitos fiquem rodando indefinidamente. O uso de onCleanup() ajuda a garantir que o efeito pare de rodar quando não for mais necessário, evitando possíveis problemas de performance.

### Conclusão: por que os signals são legais?

Os **signals** tornam a vida da pessoa desenvolvedora Angular muito mais simples. Se você está trabalhando em algo onde o estado muda de forma local (por exemplo, selecionar um item em uma lista, mudar uma configuração), os signals são perfeitos. Eles são fáceis de criar, de atualizar e o Angular já faz o trabalho pesado de re-renderizar tudo para você. Além disso, para quem já se sentiu perdido no mundo dos observables, os signals são uma alternativa mais leve e menos complexa para lidar com estados e reatividade.
