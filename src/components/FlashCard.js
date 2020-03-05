import React from "react";
import {
  Container,
  Card,
  Button,
  Icon,
  Divider,
  Popup
} from "semantic-ui-react";
import { StyledCard } from "./styledComponents";

const FlashCard = props => {
  return (
    <Container>
      <StyledCard centered color="grey" raised width="400px">
        <Card.Content extra>Category: JavaScript</Card.Content>
        <Card.Content>
          <Card.Header>{props.term}</Card.Header>
          <Card.Description>{props.definition}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Button.Group>
            <Popup
              content="previous card"
              trigger={
                <Button
                  icon
                  labelPosition="left"
                  onClick={props.handleClickBack}
                >
                  <Icon name="left arrow" />
                  Back
                </Button>
              }
            />
            <Button>Flip Card</Button>
            <Popup
              content="next card"
              trigger={
                <Button
                  icon
                  labelPosition="right"
                  onClick={props.handleClickNext}
                >
                  <Icon name="right arrow" />
                  Next
                </Button>
              }
            />
          </Button.Group>
        </Card.Content>
      </StyledCard>
      <Divider />
    </Container>
  );
};

export default FlashCard;
