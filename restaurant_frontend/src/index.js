import { Navbar, Home, Footer, Menu, Location, ContactUs, AboutUs, loginComponents} from './components/index';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import $ from 'jquery'
let slideIndex = 0;

/*Component to handle rendering the current page */
class LoadPage extends React.Component{
  render(){
      /*NOTE: REMEMBER A COMPONEMNT RERENDERS WHENEVER A STATE IS CHANGED */
      let Current = this.props.current;
      return(
          <Current></Current>
      );
  }
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      pages: [Home, Menu, Location, AboutUs, ContactUs, loginComponents.Login],
      current: Home
    }
  }
  //Method to handle dynamic navbar
  LoadNavbar(){
    //Display every nav item
    $('#home').removeClass('hide');
    $('#menu').removeClass('hide');
    $('#location').removeClass('hide');
    $('#contact').removeClass('hide');
    $('#about').removeClass('hide');
    $('#Login').removeClass('hide');


    //then use an if statement to filter them
    if(this.state.current === Home){
      $('#home').addClass('hide');
    }
    else{
      $('#home').removeClass('hide');
      if(this.state.current === Menu)
      {
        $('#menu').addClass('hide');
      }
      else if(this.state.current === Location)
      {
        $('#location').addClass('hide');
      }
      else if(this.state.current === ContactUs)
      {
        $('#contact').addClass('hide');
      }
      else if(this.state.current === AboutUs)
      {
        $('#about').addClass('hide');
      }
      else if(this.state.current === AboutUs)
      {
        $('#login').addClass('hide');
      }
    }
  }
  //method to handle changing current index
  renderPage(i){
    LoadSlideIndex(i);
    this.setState({
      current: this.state.pages[slideIndex],
    });
  }
  render(){
    this.LoadNavbar();
    return (
      <div>
        <Navbar onClick={(i)=>{this.renderPage(i)}}/>
        <LoadPage current={this.state.current}/>
        <Footer />
      </div>
    );
  }
}

//On click function to change current component
function LoadSlideIndex(i)
{
    if(i === "Home")
    {
        slideIndex = 0;
    }
    else if(i === "Menu")
    {
        slideIndex = 1;
    }
    else if(i === "Location")
    {
        slideIndex = 2;
    }
    else if(i === "About"){
        slideIndex = 3;
    }
    else if(i === "ContactUs")
    {
        slideIndex = 4;
    }
    else if(i === "Login")
    {
        slideIndex = 5;
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



