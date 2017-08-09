import React, { Component } from 'react';
let imgUrl = './assets/library.jpeg';

const styles = {
  nav: {
    margin: 0,
    padding: 0,

    height: '5vh',
    width: '100vw',

    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',

    background: 'rgba(0,0,0,1)',
    color: 'white',
    fontSize: '1.5vmin',
  },

  logo: {
    paddingLeft: '1rem',
  },

  signIn: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
  },

  form: {
    margin: 0,
    paddingRight: '1rem',

    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    marginLeft: '.25rem',
    height: '2vmin',
    width: '15vmin',

    fontSize: '1.5vmin',
  },

  jumbotron: {
    margin: 0,
    padding: 0,

    height: '45vh',
    width: '100vw',

    background: 'url(' + imgUrl + ')',
    backgroundSize: '100% 100%',
  },

  pages: {
    height: '50vh',
    width: '100vw',

    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  links: {
    height: '25vh',
    width: '50vw',
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div style={styles.nav}>
          <h1 style={styles.logo}>APIbrary</h1>
          <div style={styles.signIn}>
            <a style={{paddingRight: '.25rem', cursor: 'pointer',}} >Sign Up</a>
            <form style={styles.form}>
              Sign In:
              <input style={styles.input} type='text'   placeholder='username' />
              <input style={styles.input} type='password'   placeholder='pasword' />
            </form>
          </div>
        </div>
        <div style={styles.jumbotron}>
          <h1>APIbrary</h1>
        </div>
        <div style={styles.pages}>
          <a style={styles.links}>Browse</a>
          <a style={styles.links}>About</a>
          <a style={styles.links}>Sign Up</a>
          <a style={styles.links}>Check This OUt</a>
        </div>
      </div>
    );
  }
}

export default App;
