import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Imc } from 'src/app/Models/imc';
import { Aluno } from 'src/app/Models/Aluno';

@Component({
  selector: 'app-listar-imc',
  templateUrl: "./listar-imc.component.html",
  styleUrls: ["./listar-imc.component.css"]
})
export class ListarImcComponent implements OnInit {
  peso!: number;
  altura!: number;
  alunoId!: number;
  imcs!: Imc[];
  alunos!: Aluno[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.http.get<Imc[]>
      ("https://localhost:5001/API/Imc/listar")
      .subscribe({
        next: (Imcs) => {
          this.imcs = Imcs;
        }
      });
  }

  alterar(id: number){
    let Imc: Imc = {
      peso: this.peso,
      altura: this.altura,
      alunoId: this.alunoId
    };

    this.http.patch<Imc>("https://localhost:5001/API/imc/alterar", Imc)
    .subscribe({
      next: (Imc)=> {
        this._snackBar.open("Você está indo para alteração dos dados do aluno", "Ok!", {});
        this.router.navigate(["pages/imc/alterar"])
      },
      error: (error) => {
        console.error("Ocorreu um erro!")
      },
    })
  }

}
