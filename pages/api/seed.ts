import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';
import { GameList } from '../../data/GameList';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  // await prisma.game.createMany({
  //   data: [...GameList]
  // }).then(r => res.status(200).json({ r }));
}