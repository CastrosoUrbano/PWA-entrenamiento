if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker registrado', reg))
        .catch(err => console.error('Error registrando Service Worker', err));
}

function registrarProgreso() {
    let log = document.getElementById("log");
    let entry = document.createElement("p");
    entry.textContent = "Entrenamiento registrado: " + new Date().toLocaleString();
    log.appendChild(entry);
}