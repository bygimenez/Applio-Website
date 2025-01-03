"use client";
export default function AppProduct() {
	return (
		<main className="w-full min-h-screen bg-gradient-to-b from-[#ffffffA3]/[30%] to-transparent">
			<section className="w-full h-[70svh] rounded-xl flex flex-col justify-center items-center relative mb-14">
			<div className="grid grid-cols-3 md:grid-cols-3 gap-4 w-full h-full">
					<div className='col-span-3 row-span-2 rounded-xl w-full h-full'>
						<div
							className="pt-6 flex flex-col w-full h-full justify-center items-center relative overflow-visible"
							style={{
								background:
									'radial-gradient(180% 130% at 50% 10%, #110F0F 40%, rgba(0,0,0,0), rgba(0, 0, 0, 0) 100%)', 
							}}
						>
							<h1 className="text-[100px] font-bold title max-md:text-6xl">Applio App</h1>
							<div className="flex flex-col gap-0">
							<h2 className="text-sm text-neutral-300 max-md:text-xs text-center max-w-xs">The easiest voice cloning tool, now in app.</h2>
							<h2 className="text-sm text-neutral-300 mb-4 max-md:text-xs text-center max-w-xs">Made to be simple, fast, and light. </h2>
							</div>
							<a
								href="#join-beta"
								className="z-50 text-sm px-6 py-1 bg-white text-black rounded-xl font-semibold cursor-pointer hover:shadow-xl hover:shadow-[#111111] slow"
							>
								Join Alpha
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className="flex flex-col justify-center items-center my-16">
				<img
					className="rounded-2xl"
					src="https://i.imgur.com/lpROW4u.png"
					alt="app-screenshot"
				/>
				<h3 className="mt-2 text-neutral-300 italic text-xs">
					*Pre-release images. Final product may vary.
				</h3>
			</div>

			<div
				className="my-10 w-full max-w-5xl justify-center m-auto max-md:px-4"
				id="timeline"
			>
				<h1 className="font-semibold text-4xl">What to expect</h1>
				<div className="mt-4 w-full flex items-center mx-auto">
					<div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 justify-center items-start m-auto">
						<div
							className='flex flex-col gap-2 items-start justify-center border border-white/20 rounded-xl p-4 w-full transition-all'
						>
							<h3 className="text-xl font-semibold text-neutral-200">
								Simple installation
							</h3>
							<p className="text-sm text-neutral-300">
								A simple installation, integrated within the application, and
								with 2 simple steps: download and run.
							</p>
						</div>

						<div
							className='flex flex-col gap-2 items-start justify-center border border-white/20 rounded-xl p-4 w-full transition-all'
						>
							<h3 className="text-xl font-semibold text-neutral-200">
								Applio's ecosystem
							</h3>
							<p className="text-sm text-neutral-300">
								With all the models in our database ready for download. Click on
								a model and it will download and unzip automatically.
							</p>
						</div>

						<div
							className='flex flex-col gap-2 items-start justify-center border border-white/20 rounded-xl p-4 w-full transition-all'
						>
							<h3 className="text-xl font-semibold text-neutral-200">
								Auto Update
							</h3>
							<p className="text-sm text-neutral-300">
								Every time you open the application we check for you if there is
								a new update and apply it without you doing anything!
							</p>
						</div>
						<div
							className='flex flex-col gap-2 items-start justify-center border border-white/20 rounded-xl p-4 w-full transition-all'
						>
							<h3 className="text-xl font-semibold text-neutral-200">
								Share with friends
							</h3>
							<p className="text-sm text-neutral-300">
								Thanks to Discord Rich Presence your friends will be able to see
								if you are downloading a model, using it or training it.
							</p>
						</div>

						<div
							className='flex flex-col gap-2 items-start justify-center border border-white/20 rounded-xl p-4 w-full transition-all'
						>
							<h3 className="text-xl font-semibold text-neutral-200">
								Your data is yours
							</h3>
							<p className="text-sm text-neutral-300">
								We will never store any information about you, everything is
								anonymous and if you give us permission.
							</p>
						</div>

						<div
							className='flex flex-col gap-2 items-start justify-center border border-white/20 rounded-xl p-4 w-full transition-all'
						>
							<h3 className="text-xl font-semibold text-neutral-200">
								Customize to your liking
							</h3>
							<p className="text-sm text-neutral-300">
								You can customize everything to your liking, how about an Anime
								inspired theme or how about an Acat inspired theme?
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex h-fit items-center justify-center p-4 mt-24">
				<div className="relative w-full max-w-4xl">
					<div className="relative h-24">
					<div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-neutral-700" />
					<div
						className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 transform rounded-full bg-neutral-600"
						aria-hidden="true"
					/>
					<div className="absolute left-1/4 top-1/2 h-6 w-6 -translate-y-1/2 transform rounded-full bg-white">
						<div className="absolute inset-0 animate-pulse rounded-full bg-white opacity-75 blur-sm" />
						<div className="absolute inset-0 animate-pulse rounded-full bg-white opacity-50 blur-md" />
					</div>
					<p className="absolute left-1/4 top-16 mt-2.5 text-neutral-400 text-[10px] transform -translate-x-1/4">25 Nov 2024</p>
					<div className="absolute left-1/4 top-24 text-white transform -translate-x-1/2 pl-32">
						<h3 className="text-sm font-semibold text-start">Alpha Release</h3>
						<p className="text-xs text-neutral-300 text-start max-w-[150px]">
						First public version. Available for <a className="underline text-neutral-200 cursor-pointer hover:text-white slow" href="https://ko-fi.com/iahispano/tiers" target="_blank" rel="noreferrer">supporters</a> and selected users.
						</p>
					</div>
					{[2, 3, 4].map((_, index) => (
						<div
						key={index}
						className="absolute top-1/2 h-3 w-3 -translate-y-1/2 transform rounded-full bg-neutral-600"
						style={{ left: `calc(${25 * (index + 2)}% - 6px)` }}
						aria-hidden="true"
						/>
					))}
					</div>
				</div>
			</div>

			<div
				className="bg-gradient-to-t from-transparent via-white/20 to-transparent w-full h-[30svh] mt-44"
				id="join-beta"
			>
				<div className="max-w-5xl w-full h-full flex justify-center items-center m-auto max-md:px-4">
					<div className="flex max-md:flex-col md:justify-between max-md:justify-center w-full items-center mx-auto">
						<div className="flex flex-col mt-auto h-full justify-center">
						<h1 className="text-4xl font-semibold max-md:text-center">
						Join the Alpha Waitlist
						</h1>
						<h2 className="text-neutral-300 text-xs">
						We're currently accepting sign-ups for our exclusive alpha. Click the button to join the waitlist.
						</h2>
						</div>
						<div className="flex flex-col mt-auto h-full justify-center max-md:mt-12">
							<a
								className="bg-white slow enabled:hover:shadow-lg disabled:bg-white/30 enabled:hover:shadow-white disabled:bg-opacity-40 enabled:text-black disabled:text-white rounded-xl px-6 py-2 w-full max-w-md"
								type="button"
								href="https://tally.so/r/312aLQ"
								target="_blank"
								rel="noreferrer"
							>
								<p className="text-sm font-medium text-black hover:shadow-xl hover:shadow-white slow">Reserve your spot</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
