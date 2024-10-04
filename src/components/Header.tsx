/* eslint-disable */

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div>
          <div className="text-xl font-bold">OTT Review</div>
        </div>
        <div className="items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md border border-gray-400"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md">
            Login
          </button>
          {/* <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md">
            Sign Up
          </button> */}
        </div>
        <div>
          <select className="px-3 py-1 border border-gray-400 rounded-md">
            <option value="all">All Platforms</option>
            <option value="netflix">Netflix</option>
            <option value="disney">Disney+</option>
            <option value="amazon">Amazon Prime</option>
          </select>
        </div>
      </header>
    </>
  );
};

export default Header;
