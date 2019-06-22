import React, { Fragment, Component } from "react";

class QuestionOne extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: "",
            count: [],
            word: [],
            Element: {}
        }

    }
    componentDidMount = () => {
        console.log("Component did mount");
        console.log("value: ", this.state.value);
    } 

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
        console.log("value: ", this.state.value);
    }

    handleSubmit = () => {
        console.log("Handle submit");

            console.log(" setState value: ", this.state.value)
            this.countNumberOFWords(this.state.value);
    
    }

    countNumberOFWords = (value) => {

        /**
         *  Given text input, output a list of words from most frequently used to least and 
            the number of times they appear in the paragraph. Assume there are no contractions 
            (can't, won't, etc...) and only basic punctuation (. , ! ? '), and treat words that 
            are capitalized the same as lower case (John == john).

            Example input: "Favorite is my favorite word!"

            Example output: 
            2. favorite
            1. is
            1. my
            1. word
         */


        /**
         * TODO:
         * Remove special character from "value". So probably value.split().replace(//stuff here).map();
         */

         const arrayOfWords = value.split(" ").map(w => {
            w = w.toLowerCase();
            console.log("w", w);
            
            //Remove contractions (can't, won't, etc...) and only basic punctuation (. , ! ? ').

            let removeContent = ["'", ".", ",",  "!", "?"];
            for (let i = 0; i< removeContent.length; i++){
                for(let j = 0; w.includes(removeContent[i]); j++){
                    w = w.replace(removeContent[i], "");
                }
            }

            return w
         }); // assuming words should be separated by spaces. Also, make all words lowercase
         console.log("arrayOfWords", arrayOfWords);
        
         const groupedTerms = arrayOfWords.reduce((words, word) => {
            if (word in words) {
                words[word]++;
              }
              else {
                words[word] = 1;
              }
              return words;
          }, {});

          // groupedTerms.sort(/**do stuff here to sort by count descending order */)

          console.log("groupedTerms",  groupedTerms);
          this.setState({
              Element: groupedTerms 
          });
          console.log("length", groupedTerms[Object.keys(groupedTerms)[0]]);
                   
    }
     

    render(){
        const Element = this.state.Element;

        var Obj = {};

        Obj = Object.keys(Element).map(function(key) {
            return <p value={key}> {Element[key]}. {key}</p>
        });

        return(
            <Fragment>
                Question One

                <p>1. Given text input, output a list of words from most frequently used to least and <br></br>
                the number of times they appear in the paragraph. Assume there are no contractions <br></br>
                (can't, won't, etc...) and only basic punctuation (. , ! ? '), and treat words that <br></br>
                are capitalized the same as lower case (John == john).
                <br></br>
                Favorite is my favorite word!
                <br></br>
                Enter a String: 
                <input type="text" onChange = {this.handleChange} name="value"></input> 
                <input type="button" onClick = {this.handleSubmit} value="submit"></input> 
                
                </p>
                {Obj}

                    
            </Fragment>
        );
    }
} 

export default QuestionOne;