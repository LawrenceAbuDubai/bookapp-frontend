import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBook';

import './BestBooks.css';

class BestBooks extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Jumbotron>
            <h1 id="bestbooks" class="text-center">best books</h1>
            <p id="collection" class="text-center">
             best books
            </p>
          </Jumbotron>
          <BestBooks />
        </Container>
      </>
    )
  }
}

export default BestBooks;