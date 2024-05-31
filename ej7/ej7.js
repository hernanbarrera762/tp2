document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usuarios => mostrarUsuarios(usuarios));

    function mostrarUsuarios(usuarios) {
        const usuariosDiv = document.getElementById('usuarios');
        usuarios.forEach(usuario => {
            const cartaUsuario = document.createElement('div');
            cartaUsuario.className = 'carta-usuario';
            cartaUsuario.innerHTML = `
                <p>ID: ${usuario.id}</p>
                <p>Nombre: ${usuario.name}</p>
                <p>Nombre de usuario: ${usuario.username}</p>
                <p>Email: ${usuario.email}</p>
                <p>Sitio web: ${usuario.website}</p>
                <button onclick="verTareas(${usuario.id}, this)">Ver Tareas</button>
                <div class="tareas" id="tareas-${usuario.id}"></div>
            `;
            usuariosDiv.appendChild(cartaUsuario);
        });
    }
});

function verTareas(usuarioId, boton) {
    const tareasDiv = document.getElementById(`tareas-${usuarioId}`);
    if (tareasDiv.innerHTML === '') {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${usuarioId}`)
            .then(response => response.json())
            .then(tareas => mostrarTareas(tareas, tareasDiv, boton));
    } else {
        tareasDiv.innerHTML = '';
        boton.innerText = 'Ver Tareas';
    }
}

function mostrarTareas(tareas, tareasDiv, boton) {
    tareasDiv.innerHTML = '<h3>Tareas:</h3>';
    tareas.forEach(tarea => {
        const cartaTarea = document.createElement('div');
        cartaTarea.className = `carta-tarea ${tarea.completed ? 'completada' : 'no-completada'}`;
        cartaTarea.innerHTML = `
            <p>ID: ${tarea.id}</p>
            <p>Título: ${tarea.title}</p>
            <p>Completada: ${tarea.completed ? 'Sí' : 'No'}</p>
        `;
        tareasDiv.appendChild(cartaTarea);
    });
    boton.innerText = 'Ocultar Tareas';
}