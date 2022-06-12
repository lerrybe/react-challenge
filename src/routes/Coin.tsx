import { useParams } from 'react-router';

type Params = {
  coinId: string;
}

export default function Coin() {
  const { coinId } = useParams<Params>();
  return <h1>Coin: {coinId}</h1>;
};