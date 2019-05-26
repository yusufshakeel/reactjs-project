import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ButtonGame from './ButtonGame';

class Game extends React.Component {

    constructor() {
        super();

        console.log('constructor...');

        this.state = {
            randomNumber: 0,
            totalGuess: 3,
            currentGuessCount: 0,
            gameStatus: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        console.log(`Button # ${id} clicked!`);

        if (this.state.currentGuessCount === this.state.totalGuess) {
            this.setState({
                gameStatus: 'Game Over!'
            });
            return;
        }

        if (id === this.state.randomNumber) {
            this.setState(prevState => {
                return {
                    gameStatus: 'Correct guess! You Won!',
                    currentGuessCount: this.state.currentGuessCount + 1
                };
            });
        } else {
            this.setState({
                gameStatus: 'Wrong guess!',
                currentGuessCount: this.state.currentGuessCount + 1
            });

            if (this.state.currentGuessCount + 1 === this.state.totalGuess) {
                this.setState({
                    gameStatus: 'Game Over!'
                });
            }
        }
    }

    componentDidMount() {
        console.log('component did mount...');
        this.setState({randomNumber: parseInt((Math.random() * 8) + 1)});
    }

    getButtons() {
        const btnIds = [];
        for (let i = 1; i <= 9; i++) {
            btnIds.push(i);
        }
        const btns = btnIds.map((id)=>{
            return <ButtonGame key={id} handler={this.handleClick} value={id} />
        });
        return btns;
    }

    render() {
        console.log('render...');
        console.log(this.state);
        return (
            <Container>
                <Row>
                    <Col className="col-12">
                        <h1 className="text-center">Guess the Number</h1>
                    </Col>
                    <Col className="col-4 offset-4 text-center">
                        {this.getButtons()}
                    </Col>
                    <Col className="col-4 offset-4 text-center">
                        <h4>At guess {this.state.currentGuessCount} of {this.state.totalGuess}</h4>
                        <h5>Game status: {this.state.gameStatus}</h5>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Game;
