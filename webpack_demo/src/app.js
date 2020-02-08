import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
  
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor(){
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi. My name is ${this.name}.`;
    }
}

const OldSyntax = new OldSyntax();
const getGreeting = OldSyntax.getGreeting;
console.log(getGreeting());

//-----------------

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi. My name is ${name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());