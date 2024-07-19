const Test = () => {
	return (
		<div className="relative h-full w-full bg-[url('/images/hero2.jpg')] bg-no-repeat bg-fixed bg-cover">
				<nav className="px-12 py-5">
					<img src="/images/logo.png" alt="Logo" className="h-24" />
				</nav>
				<div className="flex justify-center">
					<div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full"></div>
				</div>
		</div>
	)
}

export default Test