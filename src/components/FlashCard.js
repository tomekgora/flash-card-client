import React from "react";
import { Container, Card, Button, Icon, Divider } from "semantic-ui-react";
import { StyledCard } from "./styledComponents";
const FlashCard = props => {
  return (
    <Container>
      <StyledCard centered color="grey" raised width="400px">
        <Divider />
        <Card.Content>
          <Card.Header>Question</Card.Header>
          <Card.Description>
            Javascript is a language bla bla bla lorem ipsum dolor bladi bla b
            lba lba
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Button icon labelPosition="left">
              <Icon name="left arrow" />
              Back
            </Button>
            <Button>Flip Card</Button>
            <Button icon labelPosition="right">
              <Icon name="right arrow" />
              Next
            </Button>
          </div>
        </Card.Content>
      </StyledCard>
    </Container>
  );
};

export default FlashCard;
