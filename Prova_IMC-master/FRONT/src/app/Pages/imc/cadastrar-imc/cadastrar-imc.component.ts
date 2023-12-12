import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Imc } from 'src/app/Models/imc';
import { Aluno } from 'src/app/Models/Aluno';

@Component({
  selector: 'app-cadastrar-imc',
  templateUrl: "./cadastrar-imc.component.html", 
  styleUrls: ["./cadastrar-imc.component.css"]
})
export class CadastrarImcComponent implements OnInit {

  peso!: number;
  altura!: number;
  classificacao!: string;
  imc!: number;
  alunoId!: number;
  id!: number;
  alunos!: Aluno[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {this.route.params.subscribe((params) => {
    let { id } = params;
    if (id !== undefined) {
      this.http.get<Imc>(`https://localhost:5001/API/imc/buscar/${id}`).subscribe({
        next: (imc) => {
          this.peso = imc.peso;
          this.altura = imc.altura;
          this.id = imc.id!;
        },
      });
    }
  });
    this.http.get<Aluno[]>
      ("https://localhost:5001/API/aluno/listar")
      .subscribe({
        next: (alunos) => {
          this.alunos = alunos;
        }
      });
  }

  alterar(): void {
    console.log(this.id);
    
    let imc: Imc = {
      id: this.id,
      peso: this.peso,
      altura: this.altura,
      alunoId: this.alunoId
    };
    this.http.patch<Imc>("https://localhost:5001/API/imc/alterar", imc).subscribe({
        next: (imc) => {
          this._snackBar.open("Alterado com sucesso!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/imc/listar"]);
        },
      });
  }

  cadastrar(){
    let Imc : Imc = {
      peso: this.peso,
      altura: this.altura,
      alunoId: this.alunoId
    };

    this.http
      .post<Imc>("https://localhost:5001/API/Imc/cadastrar", Imc)
      .subscribe({
        next: (Imc) => {
          this._snackBar.open("Cadastrado com sucesso!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/imc/listar"]);
        },
        error: (error) => {
          console.error("Ocorreu um erro!");
        },
      });
  }
}
