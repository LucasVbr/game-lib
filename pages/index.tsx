import Head from 'next/head'
import type {Game} from '../models/Game';
import {PrismaClient} from '@prisma/client';
import {Context} from 'vm';
import {useEffect} from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import GameCardComponent from '../components/GameCardComponent';

const prisma = new PrismaClient();
export async function getServerSideProps(context: Context) {
  const games = await prisma.game.findMany({
    take: 40
  });
  return {props: { games } }
}

type Props = { games: Game[] }
export default function Index(props: Props) {
  const { games } = props;

  useEffect(() => {
  }, [])

  return (
    <div>
      <Head>
        <title>GameLib | Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'container mx-auto'}>
        <HeaderComponent/>
        <div className={"grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl2:grid-cols-5 gap-10"}>
          {games.map((game: Game) => <GameCardComponent key={game.id} gameObject={game}/>)}
        </div>
      </div>

      <FooterComponent/>
    </div>
  )
}
