import { Inter } from 'next/font/google';
import { Head } from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Crabfish Chess Test</title>
			</Head>
			<main className='w-screen h-screen bg-black'>
				<div className='flex flex-col w-64 h-64'>
					<div className='flex flex-row w-64 h-8'>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
					</div>
					<div className='flex flex-row w-64 h-8'>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
					</div>
					<div className='flex flex-row w-64 h-8'>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
					</div>
					<div className='flex flex-row w-64 h-8'>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
					</div>
					<div className='flex flex-row w-64 h-8'>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
					</div>
					<div className='flex flex-row w-64 h-8'>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
					</div>
					<div className='flex flex-row w-64 h-8'>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
					</div>
					<div className='flex flex-row w-64 h-8'>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
						<div className='w-8 h-8 bg-red-500'></div>
						<div className='w-8 h-8 bg-white'></div>
					</div>
				</div>
			</main>
		</>
	);
}
