import React, { Component } from "react";
import { connect } from "react-redux";
import FlashCard from "../components/FlashCard";
import { getQuiz } from "../actions/flashcard";
import { getRandomFlashCard } from "../actions/flashcard";
import { Container, Progress, Grid } from "semantic-ui-react";

// Which data does the quiz need:
// It needs all of the cards in this quiz set
// It needs the current card index
// it needs to calculate quiz progress
// mark for later revision
// mark as known = never be served the same card
// flag for review
// mark difficulty = 1-10
// progress current index/total

// Choose: category, number of questions, question difficulty

class Quiz extends Component {
  state = {
    totalCards: 0,
    flashcards: null,
    currentCard: 0
  };
  // state = {
  //   totalCards: this.props.flashcard.quiz.total
  //   //   flashcards: this.props.flashcard.quiz.flashcards
  // };

  componentWillMount() {
    this.props.getQuiz();
    console.log("quiz: ", this.props.flashcard);
  }

  handleClickNext = () => {
    if (this.state.currentCard <= this.props.flashcard.quiz.total) {
      this.setState({
        ...this.state,
        currentCard: this.state.currentCard + 1
      });
    } else {
      this.setState({
        ...this.state,
        currentCard: this.state.currentCard
      });
    }
  };

  handleClickBack = () => {
    if (this.state.currentCard <= this.props.flashcard.quiz.total) {
      this.setState({
        ...this.state,
        currentCard: this.state.currentCard - 1
      });
    }
  };

  handleClickFlip = () => {};

  handleMarkRight = () => {};

  handleMarkWrong = () => {};

  render() {
    if (this.props.flashcard.quiz === null) {
      return "Loading...";
    } else {
      let currentCard = this.state.currentCard;
      let card = this.props.flashcard.quiz.flashcards[currentCard];
      return (
        <Container>
          <Grid stackable>
            <Grid.Row columns={3}>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <FlashCard
                  handleClickNext={this.handleClickNext}
                  handleClickBack={this.handleClickBack}
                  term={card.term}
                  definition={card.definition}
                />
                <Progress
                  value={currentCard + 1}
                  total={this.props.flashcard.quiz.total}
                  progress="ratio"
                />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
          </Grid>
        </Container>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    flashcard: reduxState.flashcard
  };
}
const mapDispatchToProps = {
  getRandomFlashCard,
  getQuiz
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
