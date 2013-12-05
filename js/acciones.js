// JavaScript Document
$(document).ready(function(e) 
{
  document.addEventListener("deviceready",function()
  {                 
        //se crea la base de datos Test es el nombre de la bd, 1.0 la version y 65535 el tamaño en bytes        
        
        
        $("#Crear").bind ("click", function (event)
         {                
		 var db = openDatabase ("Test", "1.0", "base", 65535);
		 alert ("base de datos Creada");
		    });//Crear
		 $("#Tabla").bind("click", function (event)
		   {
			   alert ("TABLA");
			 db.transaction(function (ejecutar)
			   {
				var SQL = "CREATE TABLE Alumnos (NoControl VARCHAR(14) NOT NULL PRIMARY KEY, Nombre VARCHAR(40) NOT NULL, ApellidoP VARCHAR(30) NOT NULL, ApellidoM VARCHAR(30), Grupo VARCHAR(2) NOT NULL )"
		    	ejecutar.executeSql (SQL, undefined, function () 
					{ 
      				alert ("Tabla Alumnos creada");
    				}, error);//executesql
				});
			
		   });//Tabla
		   function error (ejecutar, err)
		   {
			   alert ("Error de Base de Datos: " + err.message);
			   return false;
			   }//error
         }, false);//deviceready
});//documen

