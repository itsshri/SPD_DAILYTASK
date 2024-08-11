import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import default styles
import Confetti from 'react-confetti'; // Import the Confetti component
import '../pages/css/Game.css'; // Import your custom CSS

const riddleSets = [
  {
    riddles: [
      "I'm tall when I'm young, and short when I'm old. What am I?",
      "The more you take, the more you leave behind. What am I?",
      "I speak without a mouth and hear without ears. I have no body, but I come alive when I bounce off walls. What am I?",
      "What has keys but can't open locks?",
      "What has a head, a tail, is brown, and has no legs?",
      "What is full of holes but still holds water?"
    ],
    answers: ["candle", "footsteps", "echo", "piano", "coin", "sponge"],
    hints: [
      "Think about the physical characteristics of something that burns.",
      "Consider something you leave behind when you walk.",
      "Think about how sound behaves in certain environments, especially when there are open spaces.",
      "This object is commonly used in music.",
      "You might use this to make a coin toss.",
      "Think about something that absorbs water but is porous."
    ]
  }
  // Add more sets as needed
];

const Game = () => {
  const [game, setGame] = useState('');
  const [riddle, setRiddle] = useState('');
  const [level, setLevel] = useState(1);
  const [result, setResult] = useState('');
  const [combinedResult, setCombinedResult] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (game === 'riddle') {
      initializeRiddleGame();
    }
  }, [game, level]);

  const startRiddleGame = () => {
    setGame('riddle');
    setLevel(1); // Start from the first level
    setResult('');
    setCombinedResult('');
    setShowConfetti(false); // Reset confetti display when starting a new game
  };

  const initializeRiddleGame = () => {
    const currentSet = riddleSets[0];
    if (currentSet.riddles[level - 1]) {
      setRiddle(currentSet.riddles[level - 1]);
    } else {
      // Handle case when no riddle is available for the current level
      setRiddle('');
      setCombinedResult('<p class="final-message">Congratulations!! You won!</p>');
    }
  };

  const showHint = () => {
    const currentSet = riddleSets[0];
    const currentHint = currentSet.hints[level - 1];
    toast.info(`Hint: ${currentHint}`);
  };

  const checkAnswer = () => {
    const playerName = document.getElementById('name').value;
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const currentSet = riddleSets[0];
    const correctAnswer = currentSet.answers[level - 1];

    if (userAnswer === correctAnswer) {
      if (level === currentSet.riddles.length) {
        // Last riddle completed
        setResult(`Congratulations, ${playerName}! Quiz Completed!`);
        setCombinedResult('<p class="final-message">Quiz Completed! You have answered all the riddles!</p>');
        setShowConfetti(true); // Show confetti effect
        setTimeout(() => {
          setShowConfetti(false); // Hide confetti effect after 5 seconds
        }, 5000); // Duration of the confetti effect
      } else {
        // Move to the next level
        setResult(`Congratulations, ${playerName}! You solved the riddle!`);
        setShowConfetti(true); // Show confetti effect

        setTimeout(() => {
          setShowConfetti(false); // Hide confetti effect after 5 seconds
          setLevel(prevLevel => prevLevel + 1); // Move to the next level
          initializeRiddleGame(); // Set up the next riddle
          document.getElementById('answer').value = ''; // Clear the answer input
        }, 5000); // Duration of the confetti effect
      }
    } else {
      setResult(`Sorry, ${playerName}. That's not the correct answer. Try again!`);
    }
  };

  const goBack = () => {
    setGame(''); // Reset the game state to go back to the initial state
    setResult('');
    setCombinedResult('');
    setShowConfetti(false);
  };

  return (
    <div id="game-container">
      {showConfetti && <Confetti />}
      <h1>R!DDLE</h1>
      <h2 className='c'>Powered by LittleLooms</h2>

      {game === '' && (
        <div className="button-container">
          <button id="riddle-button" onClick={startRiddleGame}>
            Tap to play!
          </button>
        </div>
      )}

      {game === 'riddle' && (
        <>
          <div className="back-button-container">
            <button id="back-button" onClick={goBack}>
              Back
            </button>
          </div>
          <div id="riddle-game">
            <div id="riddle-container">
              <p id="riddle">{riddle}</p>
              <p id="level">Level: {level}</p>
            </div>

            <form id="date-form">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="answer">Your Answer:</label>
              <input type="text" id="answer" name="answer" required />

              <div className="button-container">
                <button type="button" onClick={showHint}>
                  Hint
                </button>
                <button type="button" onClick={checkAnswer}>
                  Submit Answer
                </button>
              </div>
            </form>

            <div id="result" style={{ display: result ? 'block' : 'none' }}>
              <p id="result-message">{result}</p>
            </div>
          </div>
        </>
      )}

      <div id="combined-result" style={{ display: combinedResult ? 'block' : 'none' }}>
        <div id="combined-result-message" dangerouslySetInnerHTML={{ __html: combinedResult }} />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Game;
