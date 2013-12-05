// JavaScript Document
$(document).ready(function(e) 
{
  document.addEventListener("deviceready",function()
  {                 
        //se crea la base de datos Test es el nombre de la bd, 1.0 la version y 65535 el tamaño en bytes        
        
        
        $("#Crear").bind ("click", function (event)
         {                
		 var db = openDatabase ("Test", "1.0", "Alumnos", 65535);
		  db.transaction (function (ejecutar) 
                  {
                           alert ("base de datos creada");
                  });//Ejecutar
		     });//Crear
		 $
         }, false);//deviceready
});//documen