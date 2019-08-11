import React, { Fragment, Component } from 'react';
import ThisContactForm from './ThisContactForm';

export default class Contact extends Component {
    
    constructor(){
        super();
        this.state = {
            contant : {}
        }
    }

    ResetDefault (e) {
        if (e.target.value === 'Message...') {
            e.target.value = ''
        }
    }

    SubmitHandler (e){
        e.preventDefault();
        console.log('Submitting Contact Form')
    }


    render() {
      return (
          <Fragment>
              <ThisContactForm />

          </Fragment>

      )
  }
}





