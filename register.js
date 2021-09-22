//se valida si el navegador cuenta con un serviceworker, para registrarlo
if("serviceWorker" in navigator){
    //Registramos el service worker
    navigator.serviceWorker.register("./sw.js");
}