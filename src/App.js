import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // relates to top level in website
      title: 'Rachel Gundy',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],

      // top level information for each page
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
      title: 'Let\'s Talk'
      }
  }

  render(){
    return (
      <div>Hello</div>

    );
  }
}

export default App;
