/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
/*
    WA.room.area.onEnter('indice1').subscribe(() => {
        // const today = new Date();
        // const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("indice1Popup", "Je suis le Practice leader de la Practice DEVOPS, la lettre que tu recherches est la première de mon prénom !", []);
    })

    WA.room.area.onLeave('indice1').subscribe(closePopup)

    WA.room.area.onEnter('indice2').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice2Popup", "C'est l'indice 2", []);
    })

    WA.room.area.onLeave('indice2').subscribe(closePopup)

    WA.room.area.onEnter('indice3').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice3Popup", "C'est l'indice 3", []);
    })

    WA.room.area.onLeave('indice3').subscribe(closePopup)

    WA.room.area.onEnter('indice4').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice4Popup", "C'est l'indice 4", []);
    })

    WA.room.area.onLeave('indice4').subscribe(closePopup)

    WA.room.area.onEnter('indice5').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice5Popup", "C'est l'indice 5", []);
    })

    WA.room.area.onLeave('indice5').subscribe(closePopup)

    WA.room.area.onEnter('indice6').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice6Popup", "C'est l'indice 6", []);
    })

    WA.room.area.onLeave('indice6').subscribe(closePopup)

    WA.room.area.onEnter('indice7').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice7Popup", "C'est l'indice 7", []);
    })

    WA.room.area.onLeave('indice7').subscribe(closePopup)

    WA.room.area.onEnter('indice8').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice8Popup", "C'est l'indice 8", []);
    })

    WA.room.area.onLeave('indice8').subscribe(closePopup)

    WA.room.area.onEnter('indice9').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice9Popup", "C'est l'indice 9", []);
    })

    WA.room.area.onLeave('indice9').subscribe(closePopup)
*/
    

    /*WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
		if (time == 
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })*/

    // Obtenir la date et l'heure actuelles
    var maintenant = new Date();

    // Définir l'heure à laquelle tu souhaites afficher le calque
    var heureAffichage = new Date();
    heureAffichage.setHours(22); // Heure : 9 (exemple)
    heureAffichage.setMinutes(40); // Minutes : 0 (exemple)
    heureAffichage.setSeconds(0); // Secondes : 0 (exemple)

    WA.chat.sendChatMessage('Bienvenue ' + WA.player.name, " Mr Robot");
    //WA.chat.sendChatMessage(maintenant.getTime(), " Mr Robot");
    //WA.chat.sendChatMessage(heureAffichage.getTime(), " Mr Robot");

    function verifierHeure() {
        // Obtenir l'heure actuelle
        var maintenant = new Date();
      
        // Définir l'heure à laquelle tu souhaites déclencher l'action
        var heureAction = new Date();
        heureAction.setHours(23); // Heure : 9 (exemple)
        heureAction.setMinutes(40); // Minutes : 0 (exemple)
        heureAction.setSeconds(0); // Secondes : 0 (exemple)
      
        // Vérifier si l'heure actuelle correspond à l'heure d'action
        if (maintenant.getTime() === heureAction.getTime()) {
          // Déclencher ton action ici
          //console.log("Action déclenchée à l'heure précise !");
          WA.chat.sendChatMessage("Action déclenchée à l'heure précise !", " Mr Robot");
        }
      }
      
      // Vérifier l'heure toutes les secondes
      setInterval(verifierHeure, 1000);

    WA.ui.banner.openBanner({
        id: "banner",
        text: "Ca va commencer en salle 1",
        bgColor: "#051742",
        textColor: "#FF5252",
        closable: true,
        //timeToClose: 12000,
        link: {
            label: "Test",
            url: "https://workadventu.re"
        }
    });

    WA.ui.displayBubble()

    // Vérifier si l'heure actuelle est égale à l'heure d'affichage
    if (maintenant.getTime() === heureAffichage.getTime()) {
        // Afficher ton calque ou exécuter l'action souhaitée
        WA.chat.sendChatMessage("C'est l'heure !", "Mr Robot");
    }

    WA.room.area.onEnter('rs').subscribe(() => {
        currentPopup = WA.ui.openPopup("rsPopup", "Viens nous suivre sur les réseaux sociaux !", [{
            label: "Linkedin",
            className: "primary",
            callback: (popup) => {
                WA.openTab('https://www.linkedin.com/company/neosoft_'),
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }    
        },
        {
            label: 'Twitter',
            className: 'primary',
            callback: (popup) => {
                WA.openTab('https://twitter.com/neosoft_'),
                popup.close();
            }
        }]);

    })

    WA.room.area.onLeave('rs').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
