function SideBar() {
    return(
        <aside className="hidden md:block w-[20%] h-100% p-8 text-white bg-[#242424]">
          <h1 className="mb-14 text-white text-4xl font-bold">Liberius</h1>
          <ul>
            <li className="mb-3 text-lg border-b-2 w-2/3 cursor-pointer transition-transform duration-300 transform hover:translate-x-4">
              Installation
            </li>
            <li className="mb-3 text-lg cursor-pointer transition-transform duration-300 transform hover:translate-x-4">
              Template Engine
            </li>
            <li className="mb-3 text-lg cursor-pointer transition-transform duration-300 transform hover:translate-x-4">
              Route
            </li>
            <li className="mb-3 text-lg cursor-pointer transition-transform duration-300 transform hover:translate-x-4">
              Controller
            </li>
            <li className="mb-3 text-lg cursor-pointer transition-transform duration-300 transform hover:translate-x-4">
              Models
            </li>
            <li className="mb-3 text-lg cursor-pointer transition-transform duration-300 transform hover:translate-x-4">
              Migration
            </li>
          </ul>
        </aside>
    )
}

export default SideBar