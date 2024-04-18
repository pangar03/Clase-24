import {obtenerTareas} from "./utils.js";

const render = async () => {
    const tareas = await obtenerTareas();
    const listaTareas = document.querySelector("#lista");

    // Funcion para crear la tarea
    const crearTarea = (nombreTarea, estadoTarea) => {
        const tarea = document.createElement("div");
        tarea.classList.add("lista__tarea");
        tarea.textContent = nombreTarea;
        if (estadoTarea) {
            tarea.classList.add("lista__tarea--terminada");
        }
        else {
            tarea.classList.add("lista__tarea--pendiente");
        }

        tarea.addEventListener("click", () => {
            tarea.classList.toggle("lista__tarea--terminada");
            tarea.classList.toggle("lista__tarea--pendiente");
        });
        
        return tarea;
    };

    // Agregamos las tareas existentes al HTML
    for(const tarea of tareas) {
        listaTareas.appendChild(crearTarea(tarea.nombre, tarea.terminada));
    }

    // Evento para crear tarea
    const formTareas = document.querySelector("#formulario");
    formTareas.addEventListener("submit", async (e) => {
        e.preventDefault();
        listaTareas.appendChild(crearTarea(e.target.nombreTarea.value, e.target.estadoTarea.checked));
    });
};

document.addEventListener("DOMContentLoaded", render);

// Esto es un comentario especial para poder realizar un commit, si estas leyendo esto, por favor ignora este comentario. Gracias.
// Decidiste seguir leyendo el comentario, debes tener mucho tiempo libre.
// En serio, no hay nada interesante aquí.
// ¿Por qué sigues leyendo?
// ¿No tienes nada mejor que hacer?
// ¿No tienes hambre?
// ¿No tienes sueño?
// ¿No tienes que estudiar?
// ¿No tienes que trabajar?
// ¿No tienes que hacer nada?
// Curiosamente todas las lineas anteriores las sugirió copilot
