using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models{
    public class Aluno{
        public int Id { get; set; }

        public string nome { get; set; }
        public DateTime nascimento { get; set; }
    }
}