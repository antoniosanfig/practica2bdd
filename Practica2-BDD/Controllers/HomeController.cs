using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Practica2_BDD.Models;
using System.Diagnostics;

namespace Practica2_BDD.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly Practica2bddContext _practicaContext;

        public HomeController(ILogger<HomeController> logger,Practica2bddContext practicaContext)
        {
            _practicaContext = practicaContext;
            _logger = logger;
        }

        public IActionResult Index(List<Persona> personasP)
        {

            if (personasP.Count > 0) return View(personasP);

            
            List<Persona> personas = _practicaContext.Personas.ToList();
            
            return View(personas);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public IActionResult RealizarFragmentacion(string campo, string tipo, string valor)
        {
            string tipoString = "=";
            switch (tipo)
            {
                case "1": tipoString = "<"; break;
                case "2": tipoString = ">"; break;
                case "3": tipoString = "<="; break;
                case "4": tipoString = ">="; break;
                case "5": tipoString = "="; break;
                case "6": tipoString = "<>"; break;
                default: tipoString = "="; break;
            }

            var valorParametrizado = new SqlParameter("valor", valor);
            List<Persona> personas = _practicaContext.Personas.FromSqlRaw($"Select * from personas where {campo} {tipoString} @valor", valorParametrizado).ToList();



            return View(personas);
        }
    }
}