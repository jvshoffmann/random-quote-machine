import './App.css';
import React from "react"

function TwitterButton(props){
  
  let link = encodeURI("https://twitter.com/intent/tweet?text="+props.quote);
  console.log(link)
  return (
  <a 
    target = "_blank"
    className = "button"
    id = "tweet-quote"
    href = {link}
  >
    tweet quote
  </a>);
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quoteIndex: 0,
      quotes: []
    }
  }
  getRandomQuote(quotes){
    return Math.floor(Math.random()*quotes.length);    
 }
  changeQuote = () => {
    this.setState({
      ...this.state,
      quoteIndex: this.getRandomQuote(this.state.quotes)      
    })
  }
  componentDidMount(){
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(response=>response.json())
    .then((jsonData)=>{
      let quoteIndex = this.getRandomQuote(jsonData.quotes);
      this.setState({
        quoteIndex,
        quotes: jsonData.quotes
      })})
    }
    // createTweetLink(){
    //   return "twitter.com/intent/tweet?text="+this.state.quotes[this.state.quoteIndex].textContent
    // }
   
    render(){
      if(this.state.quotes.length === 0)
        return null;
      else{
        return (
        <div id = "quote-box">
          <div id = "text">
            {this.state.quotes[this.state.quoteIndex].quote}
          </div>
          <div id = "author">
            author: {this.state.quotes[this.state.quoteIndex].author}
          </div>
          <TwitterButton quote = {this.state.quotes[this.state.quoteIndex].quote}/>
          <button id = "new-quote" onClick = {this.changeQuote}>Get new quote</button>
          {/* <a target = "_blank" class = "button" id = "tweet-quote"onClick = "location.href = '#'" href = {this.createTweetLink}>Share on twitter</a> */}
        </div>
        )};      
    }
  
}






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
                     
//       </header>
//     </div>
//   );
// }

export default App;
