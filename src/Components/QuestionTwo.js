import React, { Fragment, Component } from "react";

var cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jacks", "Queen", "King"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();

class QuestionTwo extends Component{

    constructor(props){
        super(props);
        this.state ={
            data: []
        }
    }
    
getDeck = () =>
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

 shuffle= () =>

{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

renderDeck= () =>

{
    var result = []
	for(var i = 0; i < deck.length; i++)
	{
        var suit  = deck[i];
        // console.log("suit.className", suit);
        if(i<2){
            result.push(suit);
        }
    }
    // result.push(suit);
    // console.log("result : ", result);
    this.setState({data: result});
    for(let i = 0 ; i< result.length ; i++){
        console.log(`${result[i].Value} of ${result[i].Suit}`);
        // Element = Element + <p value={result}>{`${result[i].Value} of ${result[i].Suit}`}</p>;
    }
}

    handleClick = () => {
        console.log("handle click");

        deck = this.getDeck();
        this.shuffle();
        this.renderDeck();
    }
    componentDidUpdate(){
        console.log("component did update");
        console.log("this.state.data", this.state.data);
    }
    render(){

        const data = this.state;
        return(
            <Fragment>
                Question Two

                <p>
                Create a standard deck of 52 playing cards. Shuffle the deck, and draw the top two cards. Output the two cards. 
                </p>
                <button onClick={this.handleClick}>Click To Get Top Two Cards</button>

                {this.state.data.length != 0 ? this.state.data.map(res => {
                   return  <p key = {res.Suit+"."+res.Value}>{res.Value} of {res.Suit}</p>
                }) : null}
                
            </Fragment>
        );
    }
} 

export default QuestionTwo;