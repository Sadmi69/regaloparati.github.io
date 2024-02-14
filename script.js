document.getElementById('abrirRegalo').addEventListener('click', function() {
    // Muestra el contenedor del regalo
    document.getElementById('contenedorRegalo').style.display = 'block';
  
    // Crea elementos de tulipanes y gatos
    var tulipanes = document.createElement('img');
    tulipanes.src = 'https://i.makeagif.com/media/1-17-2016/WlwwNV.gif';  // Reemplaza 'ruta/tulipanes.gif' con la ruta correcta de tu imagen de tulipanes
    tulipanes.alt = 'Tulipanes';
    tulipanes.style.width = '300px';
  
    var gatos = document.createElement('img');
    gatos.src = 'https://i.pinimg.com/originals/40/f2/42/40f242175a71e3b62fe717cad80e0cae.gif';  // Reemplaza 'ruta/gatos.gif' con la ruta correcta de tu imagen de gatos
    gatos.alt = 'Gatos';
    gatos.style.width = '300px';
  
    // Agrega elementos al contenedor
    var contenedor = document.getElementById('contenedorRegalo');
    contenedor.appendChild(tulipanes);
    contenedor.appendChild(gatos);
  });
  
