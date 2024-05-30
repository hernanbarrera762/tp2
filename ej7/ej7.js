document.addEventListener('DOMContentLoaded', function() {
    const divUsuarios = document.getElementById('usuarios');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const tarjeta = document.createElement('div');
                tarjeta.classList.add('user-card');
                tarjeta.innerHTML = `
                    <p><strong>ID:</strong> ${usuario.id}</p>
                    <p><strong>Nombre:</strong> ${usuario.name}</p>
                    <p><strong>Nombre de Usuario:</strong> ${usuario.username}</p>
                    <p><strong>Email:</strong> ${usuario.email}</p>
                    <p><strong>Sitio Web:</strong> <a href="http://${usuario.website}" target="_blank">${usuario.website}</a></p>
                    <button onclick="verTarea(${usuario.id}, this)">Ver Tarea</button>
                    <div class="tasks" id="tarea-${usuario.id}"></div>
                `;
                divUsuarios.appendChild(tarjeta);
            });
        });

    window.verTarea = function(idUsuario, boton) {
        const divTarea = document.getElementById(`tarea-${idUsuario}`);
        divTarea.innerHTML = '';

        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${idUsuario}`)
            .then(resp => resp.json())
            .then(tareas => {
                const tarea = tareas[0];
                if (tarea) {
                    const itemTarea = document.createElement('p');
                    itemTarea.textContent = tarea.title;
                    itemTarea.classList.add(tarea.completed ? 'completed' : 'pending');
                    divTarea.appendChild(itemTarea);
                }

                boton.disabled = true;
            });
    };
});
