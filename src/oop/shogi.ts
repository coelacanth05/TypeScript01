type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Player = "first" | "second";

class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  distanceFrom(position:Position,player:Player) {
    if(player === 'first'){
      return {
        suji:Math.abs(x:position.suji - this.suji),
        dan:Math.abs(x:Number(position.dan) - Number(this.dan))
      }
    } else {
      return {
        suji:Math.abs(x:position.suji - this.suji),
        dan:-(Math.abs(x:Number(position.dan) - Number(this.dan)))
      }
    }
  }
}

abstract class Piece {
  protected position: Position;
  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan);
  }
  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position, player: Player): boolean;
}

class Osho extends Piece {
  canMoveTo(position:Position,player:Player):boolean {
    const distance = this.position.distanceFrom(position,player)
    return (distance.suji < 2 && distance.dan < 2)
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makepieces() {
    return [
      new Osho(player:'first',suji:5,dan:'1'),
      new Osho(player:'second',suji:5, dan:'9')
    ]
  }
}
