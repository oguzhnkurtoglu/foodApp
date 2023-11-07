const HeadlineCards = () => {
	return (
		<div className="max-w-[1640px] mx-auto p-4 pb-12 grid md:grid-cols-3 gap-6">
			{/* CARDS */}
			<div className="rounded-xl relative">
				{/* OVERLAY */}
				<div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
					<p className="font-bold text-2xl px-2 pt-4">
						Sun&apos;s Outi BOGO&apos;s Out
					</p>
					<p className="px-2">Through 8/26</p>
					<button className="border-white bg-white text-black absolute bottom-4 mx-2">
						Order Now
					</button>
				</div>
				<img
					className="max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl"
					src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
				/>
			</div>
			{/* CARDS */}
			<div className="rounded-xl relative">
				{/* OVERLAY */}
				<div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
					<p className="font-bold text-2xl px-2 pt-4">Best Desserts In Town</p>
					<p className="px-2">We Deliver Desserts Too</p>
					<button className="border-white bg-white text-black absolute bottom-4 mx-2">
						Order Now
					</button>
				</div>
				<img
					className="max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl"
					src="https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-gida-kahvalti-akcaagac-surubu-krepler.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
				/>
			</div>
			{/* CARDS */}
			<div className="rounded-xl relative">
				{/* OVERLAY */}
				<div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
					<p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
					<p className="px-2">Added Daily</p>
					<button className="border-white bg-white text-black absolute bottom-4 mx-2">
						Order Now
					</button>
				</div>
				<img
					className="max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl"
					src="https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-gida-restoran-kasik-icecekler.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
				/>
			</div>
		</div>
	)
}

export default HeadlineCards
