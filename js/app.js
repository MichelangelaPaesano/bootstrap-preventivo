//la prima cosa da fare è recuperare tutti i campi del form dove l'utente inserisce i dati 
const form = document.getElementById ('preventivoForm')
const name = document.getElementById ('inputName')
const surname = document.getElementById ('inputSurname')
const email = document.getElementById ('inputEmail')
const lavoro = document.getElementById ('inputLavoro')
const note = document.getElementById ('inputNote')
const promotion = document.getElementById ('inputCode')
const formBusiness = document.getElementById ('prezzo')
const risultatoFinale = document.getElementById ('risultato')

//seconda cosa dare fare è andare a fare la funzione, ma con attenzione
//essendoci il form e quindi si deve fare button 
form.addEventListener ('submit', function (event) {
    event.preventDefault()
    //adesso recuperiamo i valori inseriti nel form 
    const inputName = name.value
    const inputSurname = surname.value
    const inputNote = note.value
    const inputCode = promotion.value
    const inputLavoro = lavoro.value

    //creo una variabile per le ore 
    const inputOre = 10

    //creo una variabile per il prezzo orario dei singoli lavori
    const prezziOrari = {
        frontend: 15.30,
        backend: 20.50,
        analisi: 33.60
    }

    let prezzoFinale;

    //qui creo il prezzo finale
    if (prezziOrari[inputLavoro]) {
        prezzoFinale = prezziOrari[inputLavoro] * inputOre
        console.log(`Il prezzo finale per il lavoro di ${inputLavoro} è: ${prezzoFinale}€`);
    } else {
        console.log('tipo di lavoro non valido')
    }

    //adesso i codici sconto e come applicarli 
    const codici = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
    
    if (codici.includes(inputCode)) {
        const sconto = prezzoFinale * 0.75;
        prezzoFinale -= sconto; 
    } else {
        alert('Questo sconto non è valido, il prezzo finale non subirà variazioni')
    }

    risultatoFinale.innerHTML = `${prezzoFinale.toFixed(2)}€`;
})