import { Component } from '@angular/core';
import { MinhasTarefas } from 'src/models/minhasTarefas.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const key_localStorage: string = 'ListaMinhaTarefas'

// Decorator @component({metadados ...})
@Component({
  selector: 'app-root', // transformar em tag html <app-root>
  // 'app' prefixo para não confudir tag HTML
  templateUrl: './app.component.html', // template HTML
  styleUrls: ['./app.component.css'] // style CSS
})

// Classe Pública AppCOMPONENT
export class AppComponent {
  //title = 'Todos - Minhas Listas de Tarefas'; // <title>todo</title>
  //public listaMinhasTarefas: any[] = [] // [] -> array vázio
  //public listaMinhasTarefas: any[]; // undefined

  // constructor() {
  //   // adicionar tarefa no array (push)
  //   this.listaMinhasTarefas.push('passear com meu cachorro')
  //   this.listaMinhasTarefas.push('Ir para casa da minha vô')
  //   this.listaMinhasTarefas.push('Ir para igreja')
  // }

  //public listaMinhasTarefas: MinhasTarefas[] = [];
  public listaMinhasTarefas: MinhasTarefas[] = [];
  public formulario: FormGroup

  /**
   * constructor (instancia de modulo para usar em toda classe)
   */
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.carregarLocalStorage()
    this.formularioValidador()

    // this.listaMinhasTarefas.push(
    //   new MinhasTarefas(1, 'Passear com meu cachorro', true)
    // )

    // this.listaMinhasTarefas.push(
    //   new MinhasTarefas(2, 'Ir para casa da minha vô')
    // )

    // this.listaMinhasTarefas.push(
    //   new MinhasTarefas(3, 'Ir para igreja perto de casa')
    // )
  }


  formularioValidador() {
    this.formulario = this.formBuilder.group({

      form_nome: [ // name do campo 
        '', // Valor padrão do campo

        Validators.compose([ // COMPOR AS REGRAS DAS VALIDAÇÕES
          // Compor somente mais de uma regra. 
          Validators.maxLength(80),
          Validators.minLength(3),
          Validators.required
        ])

      ]

    });
  }

  salvarFormulario() {
    // Ou this.formulario.value => {form_nome => 'nome'}
    // ou
    //const campoNome = this.formulario.controls['form_nome'].value
    const campoNome = this.formulario.controls.form_nome.value
    //const id = this.listaMinhasTarefas[0].getComprimento + 1
    const id = this.listaMinhasTarefas.length + 1

    this.listaMinhasTarefas.push(
      new MinhasTarefas(id, campoNome)
    )
    this.armazenarLocalStorage()
    this.limparTodosCampos()
  }

  limparTodosCampos() {
    this.formulario.reset()
  }

  limparCampoNome() {
    this.formulario.controls.form_nome.reset()
  }

  removeTarefa(tarefa: MinhasTarefas) {
    const indiceTarefa = this.listaMinhasTarefas.indexOf(tarefa)
    const indiceNaoEncontrado = -1
    const quantosDeveSerDeletado = 1
    if (indiceTarefa !== indiceNaoEncontrado) {
      this.listaMinhasTarefas.splice(indiceTarefa, quantosDeveSerDeletado)
    }
    this.armazenarLocalStorage()
  }

  desmarcarConcluida(tarefa: MinhasTarefas) {
    tarefa.concluida = false;
    this.armazenarLocalStorage()
  }

  marcarConcluida(tarefa: MinhasTarefas) {
    tarefa.concluida = true;
    this.armazenarLocalStorage()
  }


  /////////////////////////////////////////////////////////////////////
  // ARMAZENAR NO BROWSER
  // LOCALSTORAGE = Reiniciou a máquina os dados estão salvado no PC CLIENTE
  // SESSION STORAGE = perder dados temporariamente 
  armazenarLocalStorage() {
    // converter Json | array para STRING
    const dadoString = JSON.stringify(this.listaMinhasTarefas)
    localStorage.setItem(key_localStorage, dadoString);
  }

  carregarLocalStorage(): void {
    const dadoString = localStorage.getItem(key_localStorage)
    // Converter String em JSON
    const itemJSON = JSON.parse(dadoString)
    this.listaMinhasTarefas = itemJSON == null ? [] : itemJSON
  }

}
