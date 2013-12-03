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
		 $("#Tabla").bind ("click", function (event)
		    db.transaction (function (ejecutar) 
                  {
                   var sql = "CREATE TABLE Lista (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(100) NOT NULL, apellido VARCHAR(100) NOT NULL)";
                    ejecutar.executeSql (sql, undefined, function () 
                        { 
                              alert ("Tabla creada");
                    }, error);//executesql
                  });//Ejecutar
				  });//Tabla

          function error (transaction, err) {
          alert ("Error de Base de Datos : " + err.message);
           return false;
        }//funcion error 
        
          
  }, false);//deviceready
});//documen