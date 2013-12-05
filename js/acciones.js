// JavaScript Document
var IP="";
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
		   {var db = openDatabase ("Test", "1.0", "base", 65535);
			   alert ("TABLA");
			 db.transaction(function (ejecutar)
			   {
				   alert("alumnos");
				var SQL = "CREATE TABLE Alumnos (NoControl VARCHAR(14) NOT NULL PRIMARY KEY, Nombre VARCHAR(40) NOT NULL, ApellidoP VARCHAR(30) NOT NULL, ApellidoM VARCHAR(30), Grupo VARCHAR(2) NOT NULL )"
				alert("despues de crear tabla");
		    	ejecutar.executeSql (SQL, undefined, function () 
					{ 
      				alert ("Tabla Alumnos creada");
    				}, error);//executesql
				});
			buscaralumnos('5J');
		   });//Tabla
		   function error (ejecutar, err)
		   {
			   alert ("Error de Base de Datos: " + err.message);
			   return false;
			   }//error
	      function buscaralumnos(Gpo)
		  	{
				datos="Grupo="+Gpo;
				$.ajax({
					type:"POST",
					url:"http://192.168.1.10/lista/agregar.php",
					data:datos
				}).done(function (msg){
					if(msg=="*" || msg == null)
						{
							alert ("NO SE ENCONTRARON ALUMNOS EN ESE GRUPO");
						}
					else 
						{
							//var db = openDatabase ("Test", "1.0", "base", 65535);
							alert (msg);
							var OAlumno=jQuery.parseJSON(msg);
							alert(OAlumno.alumnos.length);
							db.transaction(function(ejecutar){
								var SQL = "INSERT INTO Alumnos (NoControl, Nombre, ApellidoP, ApellidoM, Grupo) VALUES (?,?,?,?,?)";
								
								var Tope = OAlumno.alumnos.length;
								for (var i=0; i<Tope;i++)
								alert("for");
									{ var NC = OAlumno.alumnos[i].NoControl.val();
								var N = OAlumno.alumnos[i].Nombre.val();
								var AP = OAlumno.alumnos[i].ApellidoP.val();
								var AM = OAlumno.alumnos[i].ApellidoM.val();
								alert (NC);
								alert (N);
								alert (AP);
								alert (AM);
								alert (Gpo);
								alert ("Vuelta: " + i);
										ejecutar.executeSql(SQL,[NC,N ,AP, AM,Gpo], function(){alert("Alumno :" + N +" agregado");}, error);
									}
								});
							}//else
				});
			  }
			   
         }, false);//deviceready
});//documen

