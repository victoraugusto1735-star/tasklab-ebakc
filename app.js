const addBtn = document.querySelector('.add-button');

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('Service Worker Registration Failed: ', err));
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    botaoAdicionar.style.display = 'block';
});

addBtn.addEventListener('click', () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
        console.log(choice.outcome);
        deferredPrompt = null;
        botaoAdicionar.style.display = 'none';
    });
});
        
