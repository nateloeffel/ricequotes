import Image from "next/image";

const Quote = ({ quote, date }) => {

	return (
		<section className="bg-base-100 w-full h-full flex items-center justify-center flex-col">
			<div className="flex items-center justify-center mt-8">
				<h1 className="text-3xl font-bold">Quote of the Day</h1>
			</div>
			<div className="flex flex-col items-center justify-center w-11/12 h-full mt-2 border-2 border-base-300 rounded-lg">
				<div className="text-base leading-relaxed  max-w-md mx-auto text-center">
					<p>
						{quote}
					</p>
				</div>
				<div className="flex justify-center items-center mt-1">
					<div>
						<p className="font-semibold text-sm"> Rhys Kopecky - {date}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Quote;
