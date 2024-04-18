export const obtenerTareas = async () => {
    const response = await fetch(
        "https://raw.githubusercontent.com/pangar03/Clase-24/desarrollo/data.json"
    );
    const data = await response.json();
    return data;
};

// Path: utils.js