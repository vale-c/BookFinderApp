import React, { Component } from 'react';
import {Grid, Row, Col, Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap';


class Books extends Component {
  render() {
    let bookItems;
    if(this.props.books){
      bookItems = this.props.books.map(book => {

        let id = book.id;
        // console.log(id);

        let title = book.volumeInfo.title;
        let categories = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let publishedDate = book.volumeInfo.publishedDate;
        let pageCount = book.volumeInfo.pageCount;
        let averageRating = book.volumeInfo.averageRating;
        let description = book.volumeInfo.description;
        let buyLink = book.saleInfo.buyLink;

        if (book.volumeInfo.imageLinks){
          var thumbnail = book.volumeInfo.imageLinks.thumbnail
        }

        return (
        <Panel accordion="true" key={id} eventKey={id}>
           <Panel.Heading>
              <Panel.Title toggle>{title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
            <Grid>
              <Row>
                <Col xs={3} md={3} lg={3}>
                  <img src={thumbnail} role="presentation" method="post"/>
                </Col>
                <Col xs={8} md={8} lg={8}>
                  <ListGroup>
                    <ListGroupItem style={{color: "EEEEEE"}}><strong>Categories: </strong>{categories}</ListGroupItem>
                    <ListGroupItem style={{color: "EEEEEE"}}><strong>Author(s): </strong>{authors}</ListGroupItem>
                    <ListGroupItem style={{color: "EEEEEE"}}><strong>Publisher: </strong> {publisher}</ListGroupItem>
                    <ListGroupItem style={{color: "EEEEEE"}}><strong>Publish Date: </strong>{publishedDate}</ListGroupItem>
                    <ListGroupItem style={{color: "EEEEEE"}}><strong>Page Count: </strong>{pageCount}</ListGroupItem>
                    <ListGroupItem style={{color: "EEEEEE"}}><strong>Average Rating: </strong><span className="rating">{averageRating}</span></ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={11} md={11} lg={11}>
                  <h4 style={{ marginBottom: "20px"}}>Book description</h4>
                   <span className="bookDescription" style={{lineHeight:"30px"}}>{description}</span>
                  <hr />
                  <Button href={buyLink} bsStyle="primary">Buy Now</Button>
                </Col>
              </Row>
            </Grid>
           </Panel.Body>
         </Panel>
         
        )
      });
    }
    return (
      <div>
          {bookItems}
      </div>
    );
  }
}

export default Books;
