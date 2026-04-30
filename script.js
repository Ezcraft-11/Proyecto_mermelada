
// 1. Cargar datos JSON dinámicamente en la caja de código
const ingredientes = {
    "producto": "EZCRAFT APPLE",
    "base": "500g Manzana Neta",
    "azucar": "250g",
    "extras": ["Canela", "Vainilla", "Limón"],
    "version": 1.0
};

document.getElementById('json-data').textContent = JSON.stringify(ingredientes, null, 2);

// 2. Función para resaltar pasos al hacer click
function highlightStep(element) {
    // Quitamos el resaltado de otros pasos
    document.querySelectorAll('.step').forEach(s => s.style.backgroundColor = 'white');
    // Aplicamos un color suave al paso seleccionado
    element.style.backgroundColor = '#fdf2d5';
}

// 3. Botón de "Optimización" que cambia el modo de visualización
const btn = document.getElementById('btn-surprise');
btn.addEventListener('click', () => {
    alert("¡Proceso de mermelada optimizado! El color ámbar ha sido verificado.");
    document.body.style.border = "10px solid #B5651D";
});

console.log("EZCRAFT Jam System Online...");
