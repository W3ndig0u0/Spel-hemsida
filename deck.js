var suits = ["Clubs", "Diamonds", "Hearts", "Spades" ];

var rank = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

var deck = [];

function makeDeck() {
  
  deck = [];

  //for loop för alla suits
  for( var i = 0; i < suits.length; i++ ) {

    //samma för ranks
    for( var j = 0; j < ranks.length; j++ ) {
      
      //skapa själva korten
      var card = {};
      card.suit = suits[i];
      card.rank = ranks[j];
      
      deck.push(card);
    }
  }
}
