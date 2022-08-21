import React from 'react'
import './Battlefield.css'

function Battlefield() {

  var view = {
    displayMessage: function (msg) {
      var messageArea = document.getElementById("messageArea");
      messageArea.innerHTML = msg;
    },

    displayHit: function (location) {
      var cell = document.getElementById(location);
      cell.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
      var cell = document.getElementById(location);
      cell.setAttribute("class", "miss");
    }
  };

  var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
      { locations: [0, 0, 0], hits: ["", "", ""] },
      { locations: [0, 0, 0], hits: ["", "", ""] },
      { locations: [0, 0, 0], hits: ["", "", ""] }
    ],

    // original hard-coded values for ship locations
    /*
      ships: [
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }
      ],
    */

    fire: function (guess) {
      for (var i = 0; i < this.numShips; i++) {
        var ship = this.ships[i];
        var index = ship.locations.indexOf(guess);

        // here's an improvement! Check to see if the ship
        // has already been hit, message the user, and return true.
        if (ship.hits[index] === "hit") {
          view.displayMessage("Oops, you already hit that location!");
          return true;
        } else if (index >= 0) {
          ship.hits[index] = "hit";
          view.displayHit(guess);
          view.displayMessage("HIT!");

          if (this.isSunk(ship)) {
            view.displayMessage("You sank my battleship!");
            this.shipsSunk++;
          }
          return true;
        }
      }
      view.displayMiss(guess);
      view.displayMessage("You missed.");
      return false;
    },

    isSunk: function (ship) {
      for (var i = 0; i < this.shipLength; i++) {
        if (ship.hits[i] !== "hit") {
          return false;
        }
      }
      return true;
    },

    generateShipLocations: function () {
      var locations;
      for (var i = 0; i < this.numShips; i++) {
        do {
          locations = this.generateShip();
        } while (this.collision(locations));
        this.ships[i].locations = locations;
      }
      console.log("Ships array: ");
      console.log(this.ships);
    },

    generateShip: function () {
      var direction = Math.floor(Math.random() * 2);
      var row, col;

      if (direction === 1) { // horizontal
        row = Math.floor(Math.random() * this.boardSize);
        col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
      } else { // vertical
        row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        col = Math.floor(Math.random() * this.boardSize);
      }

      var newShipLocations = [];
      for (var i = 0; i < this.shipLength; i++) {
        if (direction === 1) {
          newShipLocations.push(row + "" + (col + i));
        } else {
          newShipLocations.push((row + i) + "" + col);
        }
      }
      return newShipLocations;
    },

    collision: function (locations) {
      for (var i = 0; i < this.numShips; i++) {
        var ship = this.ships[i];
        for (var j = 0; j < locations.length; j++) {
          if (ship.locations.indexOf(locations[j]) >= 0) {
            return true;
          }
        }
      }
      return false;
    }
  };

  var controller = {
    guesses: 0,

    processGuess: function (guess) {
      var location = parseGuess(guess);
      if (location) {
        this.guesses++;
        var hit = model.fire(location);
        if (hit && model.shipsSunk === model.numShips) {
          view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
        }
      }
    }
  }


  // helper function to parse a guess from the user

  function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
      alert("Oops, please enter a letter and a number on the board.");
    } else {
      var firstChar = guess.charAt(0);
      var row = alphabet.indexOf(firstChar);
      var column = guess.charAt(1);

      if (isNaN(row) || isNaN(column)) {
        alert("Oops, that isn't on the board.");
      } else if (row < 0 || row >= model.boardSize ||
        column < 0 || column >= model.boardSize) {
        alert("Oops, that's off the board!");
      } else {
        return row + column;
      }
    }
    return null;
  }


  // event handlers

  function handleFireButton(event) {
    event.preventDefault();
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.toUpperCase();
  
    controller.processGuess(guess);

    guessInput.value = "";
  }

  function handleKeyPress(event) {
    //var fireButton = document.getElementById("fireButton");

    // in IE9 and earlier, the event object doesn't get passed
    // to the event handler correctly, so we use window.event instead.
    //e = e || window.event;
    if (event.key === 'Enter') {
      //fireButton.click();
      handleFireButton(event)
      return false;
    }
  }

  function handleGameStart(event) {
    event.preventDefault();
    alert("Start Guessing");
    // place the ships on the game board
    model.generateShipLocations();
  }

  // init - called when the page has completed loading

  return (
    <>
      <div id="board">
        <div id="messageArea"></div>
        <table>
          <tr>
            <td id="00"></td> <td id="01"></td> <td id="02"></td> <td id="03"></td>
            <td id="04"></td> <td id="05"></td> <td id="06"></td>
          </tr>
          <tr>
            <td id="10"></td> <td id="11"></td> <td id="12"></td> <td id="13"></td>
            <td id="14"></td> <td id="15"></td> <td id="16"></td>
          </tr>
          <tr>
            <td id="20"></td> <td id="21"></td> <td id="22"></td> <td id="23"></td>
            <td id="24"></td> <td id="25"></td> <td id="26"></td>
          </tr>
          <tr>
            <td id="30"></td> <td id="31"></td> <td id="32"></td> <td id="33"></td>
            <td id="34"></td> <td id="35"></td> <td id="36"></td>
          </tr>
          <tr>
            <td id="40"></td> <td id="41"></td> <td id="42"></td> <td id="43"></td>
            <td id="44"></td> <td id="45"></td> <td id="46"></td>
          </tr>
          <tr>
            <td id="50"></td> <td id="51"></td> <td id="52"></td> <td id="53"></td>
            <td id="54"></td> <td id="55"></td> <td id="56"></td>
          </tr>
          <tr>
            <td id="60"></td> <td id="61"></td> <td id="62"></td> <td id="63"></td>
            <td id="64"></td> <td id="65"></td> <td id="66"></td>
          </tr>
        </table>
        <form>
          <input type="text" id="guessInput" placeholder="A0" onKeyPress={(event) => handleKeyPress(event)}/>
          <input type="button" id="fireButton" value="Fire!" onClick={(event) => handleFireButton(event)} />
          <input type="button" id="startButton" value="Start! " onClick={(event)=> handleGameStart(event)}/>
        </form>
      </div>
    </>
  )
}

export default Battlefield