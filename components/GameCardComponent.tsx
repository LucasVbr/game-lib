import {Badge, Button, Card} from 'react-daisyui';
import {Game} from '../models/Game';

type Prop = {
  gameObject: Game
}
export default function GameCardComponent(props: Prop) {
  const {gameObject} = props;

  const handleClick = () => {
    window.location.href = `/game/${gameObject.id}`;
  };

  return (
      <Card onClick={handleClick}
            className={'transition hover:scale-105 hover:shadow-2xl hover:cursor-pointer '}>
        <Card.Image src={gameObject.thumbnail}
                    alt={`${gameObject.title} thumbnail`}/>
        <Card.Body>
          <Card.Title tag="h2">{gameObject.title}</Card.Title>
          <Card.Actions className={'flex gap-1 justify-end self-end'}>
            <Badge variant={'outline'}>{gameObject.genre}</Badge>
            <Badge variant={'outline'}>{gameObject.platform}</Badge>
          </Card.Actions>
        </Card.Body>
      </Card>
  );
}