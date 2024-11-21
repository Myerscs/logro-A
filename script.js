function guardarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const numero = document.getElementById("numero").value;
    const correo = document.getElementById("correo").value;
    const etiqueta = document.getElementById("etiqueta").value;

    if (nombre && numero && correo && etiqueta) {
        const table = document.getElementById("registroTabla");
        const row = table.insertRow();
        row.innerHTML = `
            <td>${nombre}</td>
            <td>${numero}</td>
            <td>${correo}</td>
            <td>${etiqueta}</td>
            <td><button onclick="eliminarRegistro(this)">Eliminar</button> - <button onclick="editarRegistro(this)">Editar</button></td>
        `;

       
        document.getElementById("nombre").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("etiqueta").value = "";
    } else {
        alert("Por favor, completa todos los campos.😇");
    }
}