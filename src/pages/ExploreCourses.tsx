
const ExploreCourses = () => {
  return (
    <div>
      <div className="searchBar bg-white p-8 h-fit border-b border-[#F7F7F7]">
        <div>
            <div className="input-container">
              <input type="text" placeholder="Search Course Name/Mentor" />
              <img src="/assets/icons/search-normal.svg" alt="" />
            </div>
            <div className="flex">
            <div className="input-container flex justify-center align-middle gap-2">
              <img src="/assets/icons/level.svg" alt="" />
              <h3 className="text-2xl m-0">Level</h3>
            </div>
            <div className="input-container flex justify-center align-middle gap-2">
              <img src="/assets/icons/category.svg" alt="" />
              <h3 className="text-2xl m-0">Category</h3>
            </div>
            <div className="input-container flex justify-center align-middle gap-2">
              <img src="/assets/icons/sort.svg" alt="" />
              <h3 className="text-2xl m-0">Sort</h3>
            </div>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreCourses