alert('Hello Golfers')

function frontNineStrokes() {
    let holeOne = document.getElementById('hole-1')
    let holeTwo = document.getElementById('hole-2')
    let holeThree = document.getElementById('hole-3')
    let holeFour = document.getElementById('hole-4')
    let holeFive = document.getElementById('hole-5')
    let holeSix = document.getElementById('hole-6')
    let holeSeven = document.getElementById('hole-7')
    let holeEight = document.getElementById('hole-8')
    let holeNine = document.getElementById('hole-9')

    frontNine = holeOne + holeTwo + holeThree + holeFour + holeFive + holeSix + holeSeven + holeEight + holeNine

    console.log('holeOne')
}

function holeOneSf() {
    const strokesOne = document.getElementById('holeOneStrokes')
    const parOne = document.getElementById('HoleOnePar')
    const strokeIndexMean = parOne - strokesOne - shotsGiven

}

class MyClass extends React.Component {
    myFunc() {
      alert('Stop it.  Stop hovering.');
    }
   
    render() {
      return (
        <div onHover={this.myFunc}>
        </div>
      );
    }
  }

  addEventListener(onHover, myFunc)

  function myFunction() {
    alert("Don't click me!");
  }