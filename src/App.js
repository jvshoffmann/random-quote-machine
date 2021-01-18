import './App.css';
import React from "react"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quoteIndex: 0,
      quotes: []
    }
    // this.getRandomQuote = this.getRandomQuote.bind(this);
    // this.changeQuote = this.changeQuote.bind(this);
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
      console.log(this.quoteIndex);
      this.setState({
        quoteIndex,
        quotes: jsonData.quotes        
      })})
    }
   
    render(){
      if(this.state.quotes.length === 0)
        return null;
      else{
        return (<div>
          {this.state.quotes[this.state.quoteIndex].quote}<br/>
          author: {this.state.quotes[this.state.quoteIndex].author}
          <button className = "newQuote" onClick = {this.changeQuote}>Get new quote</button>
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
