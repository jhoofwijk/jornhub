import { h, Component } from 'preact';
import '../bootstrap.css';
import '../font-awesome.css';
import '../App.css';

import { Header } from '../components/Header';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}
