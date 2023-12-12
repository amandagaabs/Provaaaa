import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/Models/Aluno';

@Component({
  selector: "app-cadastrar-aluno",
  templateUrl: "./cadastrar-aluno.component.html",
  styleUrls: ["./cadastrar-aluno.component.css"]
})
export class CadastrarAlunoComponent implements OnInit {

  nome!: string;
  nascimento!: string;
 
  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  cadastrar(){
    let aluno: Aluno = {
      nome: this.nome,
      nascimento: this.nascimento
    };

    this.http
      .post<Aluno>("https://localhost:5001/API/aluno/cadastrar", aluno)
      .subscribe({
        next: (aluno) => {
          this._snackBar.open("Aluno foi cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/imc/cadastrar"]);
        },
        error: (error) => {
          console.error("Ocorreu um erro!");
        },
      });
  }

}
