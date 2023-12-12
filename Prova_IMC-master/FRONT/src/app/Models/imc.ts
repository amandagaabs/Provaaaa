import { Aluno } from "./Aluno"

export interface Imc{
    id?: number;
    peso: number;
    altura: number;
    imc?: number;
    classificacao?: string;
    aluno?: Aluno;
    alunoId: number;
}