function Home() {
    return (
        <div className="w-screen h-screen bg-gray-100">
            <nav className="p-3 w-screen flex justify-between items-center bg-[#242424] text-white">
                <h1 className="text-2xl font-bold">Liberius</h1>
                <a href="/docs" className="border-gray-200 hover:scale-110 transition-all rounded-md border-[2px] p-2">Documentation</a>
            </nav>

            <main className="w-screen h-[500px] flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Liberius</h1>
                    <p className="mt-4 text-lg w-96">Light php Framework collaborate with javascript runtime NODEJS. CLI based on javascript</p>
                    <a href="/docs" className="inline-block mt-4 border-black hover:scale-110 transition-all hover:rounded-md border-[2px] p-2">Get Started</a>
                </div>
            </main>
        </div>
    )
}

export default Home