import React from "react";
import "./App.css";
import axios from "axios";
import NumberFormat from "react-number-format";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    const API =
      "b35f91843a186b4219e36446d9bc47366b8e23545c7a41002bc74682d5e36f14";
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XMR,ZEC,NEO&tsyms=USD&api_key=${API}`
      )
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Simple CryptoInfo React App</h1>
        {Object.keys(this.state.cryptos).map(key => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right">
              {/* {this.state.cryptos[key].USD} */}
              <NumberFormat
                value={this.state.cryptos[key].USD}
                displayType={"text"}
                decimalprecision={2}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
