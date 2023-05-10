const SearchBar = () => {
    return (
        <div className="flex items-center w-full">
            <div className="flex rounded w-1/2 ">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none "
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-gray-700  rounded ">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </div>
    )
}

export default SearchBar;