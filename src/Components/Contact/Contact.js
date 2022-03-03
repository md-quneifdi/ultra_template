import React from 'react';
import { ContactSection, ContactTitle, Span, Form, FormInput, InputText, InputEmail, InputSubject,
   TextArea, InputSubmit } from './ContactStyle.js';
import Footer from '../Footer/Footer';
const Contact = () => {
    return (
      <React.Fragment>
        <ContactSection>
              <div className="container">
                  <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                  <Form>
                      <FormInput>
                          <InputText type="text" placeholder="Your Name"/>
                          <InputEmail type="email" placeholder="Your Email"/>
                      </FormInput>
                      <InputSubject type="text" className="sub" placeholder="Your Subject"/>
                      <TextArea placeholder="Your Message"></TextArea>
                      <InputSubmit type="submit" value="Send Message"/>
                  </Form>
              </div>
          </ContactSection>
          <Footer /> 
      </React.Fragment>       
    );
}

export default Contact;
