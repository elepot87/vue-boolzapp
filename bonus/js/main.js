const app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
    currentContact: 0, //index contatto
    currentMessage: null, //index messaggio
    newMessageText: "",
    search: "",
  },

  methods: {
    activateChat(index) {
      this.currentContact = index;
    },
    sendMessage() {
      if(this.newMessageText.length > 0) {
        this.contacts[this.currentContact].messages.push({
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: this.newMessageText,
        status: "sent",
      },);
      this.newMessageText='';
      this.autoAnswer();
      }
    },
    autoAnswer(){
      setTimeout(()=> {
        this.contacts[this.currentContact].messages.push({
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: 'aiuto',
          status: "received",
        },);
      }, 1000);
    },
    // funzione per impostare l'index del messaggio al click
    setIndexMessage(index) {
      this.currentMessage = index;
    },
    // funzione per rimuovere l'index del messaggio al mouseleave
    removeIndexMessage() {
      this.currentMessage = null;
      return this.currentMessage;
    },
    // funzione per cancellare il messaggio selezionato 
    deleteMessagge(){
      console.log('click delete');
      this.filteredContacts[this.currentContact].messages.splice(this.currentMessage, 1);
    }
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
});
