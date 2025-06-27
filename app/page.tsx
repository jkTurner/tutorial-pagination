'use client'
import { useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grape",
  "Strawberry",
  "Watermelon",
  "Pineapple",
  "Mango",
  "Kiwi",
  "Cherry",
  "Peach",
  "Pear",
  "Plum",
  "Lemon",
  "Lime",
  "Raspberry",
  "Blueberry",
  "Blackberry",
  "Pomegranate",
  "Fig",
  "Apricot",
  "Cantaloupe",
  "Dragon fruit",
  "Passion fruit"
]

export default function Home() {

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;
	const totalPages = Math.ceil(fruits.length / itemsPerPage);
	const startingIndex = (currentPage - 1) * itemsPerPage; // first page starts at index 0, second age starts at index 4 etc...
	const currentShowing = fruits.slice(startingIndex, startingIndex + itemsPerPage); // from starting index + 4 will be the fruits we want to display

	const goToNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
	const goToPrev = () => setCurrentPage(prev => Math.max(prev -1, 1));

	return (
		<div className="flex flex-col gap-4 p-8">
			<h1 className="font-semibold text-lg">Pagination Tutorial</h1>
			{currentShowing && (
				<div className="flex gap-4">
					{currentShowing.map((fruit) => (
						<span 
							key={fruit}
							className="bg-slate-600 py-2 px-4 rounded-md"
							>{fruit}</span>
					))}
				</div>
			)}
			{fruits.length > 0 && (
				<div className="flex items-center gap-4">
					<button
						onClick={goToPrev}
						disabled={currentPage === 1}
						className="bg-sky-600 text-sm py-2 px-4 cursor-pointer rounded-md disabled:opacity-50"
						>Prev</button>
					<span>Page {currentPage} of {totalPages}</span>
					<button
						onClick={goToNext}
						disabled={currentPage === totalPages}
						className="bg-sky-600 text-sm py-2 px-4 cursor-pointer rounded-md disabled:opacity-50"
						>Next</button>
					<div className="flex gap-2 items-center">
						Go to page: 
						<input 
							type="number" 
							value={currentPage} 
							onChange={e => setCurrentPage(Number(e.target.value))}
							min={1}
							max={totalPages}
							className="bg-slate-400 text-slate-800 p-2 "
							/>
					</div>
				</div>
			)}
		</div>
	);
}
