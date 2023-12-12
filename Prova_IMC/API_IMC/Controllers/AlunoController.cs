using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API_IMC.Controllers{
    [ApiController]
    [Route("API/aluno")]
    public class AlunoController : ControllerBase{
        private readonly DataContext _context;

        public AlunoController(DataContext context) => _context = context;

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Aluno aluno){
            _context.Alunos.Add(aluno);
            _context.SaveChanges();
            return Created("", aluno);
        }

        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.Alunos.ToList());
    }
}