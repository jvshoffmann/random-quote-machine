import './App.css';
import React from "react"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quotes: []
    }
    // this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  getRandomQuote(){
    return Math.floor(Math.random()*this.state.quotes.length);    
   }
  componentDidMount(){
    let quoteIndex = this.getRandomQuote()
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(response=>response.json())
    .then((jsonData)=>{
      this.setState({
        quotes: jsonData.quotes,
        currentQuote: {
          quote: this.state.quotes[quoteIndex].quote,
          author: this.state.quotes[quoteIndex].author
        }
      })})
    }
   
    render(){
      if(this.state.quotes.length === 0)
        return null;
      else{
        return (<div>
          {this.state.currentQuote.quote}<br/>
          author: {this.state.currentQuote.author}
          <button className = "newQuote" onClick = {this.getRandomQuote()}>Get new quote</button>
        </div>)};      
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
