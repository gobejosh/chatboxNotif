const chatboxElt = document.getElementById("chatbox");
const notificationSound = new Audio("https://www.myinstants.com/media/sounds/cannard.mp3");
const inputElt = document.getElementById("message");
const windowURL = "URL DE LA CHATBOX";
const easterEgg = new Audio("https://www.myinstants.com/media/sounds/puissance-et-gloire.mp3");

//Vérifie si la fenêtre chatbox est cachée
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        //Créé un objet observant la chatbox
        let observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                //Vérifie si des enfants sont générés
                if (mutation.addedNodes
                    && document.visibilityState === "hidden"
                    && window.location.href == windowURL) {
                    document.title = "NOUVEAUX MESSAGES";
                    notificationSound.play();
                };
            });
        });
        //Paramètres à observer
        observer.observe(chatboxElt, {
            childList: true
        });

    } else {
        //Remet à zéro la chatbox si affichée
        document.title = "ChatBox";
        delete MutationObserver;
    };
});

//Easter Egg
inputElt.addEventListener("change", () => {
    if (inputElt.value == "/PUISSANCE") {
        easterEgg.play();
    };
})
