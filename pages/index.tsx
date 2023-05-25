import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [chessBoard, setChessBoard] = useState([
		['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
		['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
		['', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', ''],
		['', '', '', '', '', '', '', ''],
		['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
		['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
	]);

	const [selected, setSelected] = useState({ x: -1, y: -1 });

	return (
		<>
			<Head>
				<title>Crabfish Chess Test</title>
			</Head>
			<main className='w-screen h-screen bg-black'>
				<Board board={chessBoard} selected={selected} setSelected={setSelected} />
			</main>
		</>
	);
}

function Square({ x, y, dark, board, selected, setSelected }: { x: number; y: number; dark: boolean; board: string[][]; selected: { x: number; y: number }; setSelected: Function }) {
	return (
		<div className={'w-[12.5vh] h-[12.5vh] flex justify-center items-center ' + (selected.x === x && selected.y == y ? 'bg-amber-900' : (dark ? 'bg-red-500' : 'bg-white')) } onClick={() => setSelected({ x, y })}>
			{board[y][x] !== '' ? (
				<Image src={`/pieces/${board[y][x]}.svg`} width={128} height={128} alt='Piece' className='w-full h-full' />
			) : (<></>)}
		</div>
	);
}

function Row({ y, board, selected, setSelected }: { y: number; board: string[][]; selected: { x: number; y: number }; setSelected: Function }) {
	return (
		<div className='flex flex-row w-[100vh] h-[12.5vh]'>
			{board[y].map((_, x) => (
				<Square key={`${y}${x}`} x={x} y={y} dark={(x + y) % 2 !== 0} board={board} selected={selected} setSelected={setSelected} />
			))}
		</div>
	);
}

function Board({ board, selected, setSelected }: { board: string[][]; selected: { x: number; y: number }; setSelected: Function }) {
	return (
		<div className='flex flex-col w-[100vh] h-[100vh]'>
			{board.map((_, y) => (
				<Row key={y} y={y} board={board} selected={selected} setSelected={setSelected} />
			))}
		</div>
	);
}
