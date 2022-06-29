import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato = this.fb.group({
    nome:["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto:["",[
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["",[
      Validators.minLength(10),
      Validators.required
    ]],
    email: ["",[
      Validators.required,
      Validators.email
    ]],
    mensagem:["",[
      Validators.required,
      Validators.minLength(20)
    ]]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  enviarMensagem(){
    alert("A mensagem foi enviada !!!")
    this.formContato.reset()
  }

}
