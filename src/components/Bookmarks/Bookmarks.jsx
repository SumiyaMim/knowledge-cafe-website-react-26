import PropTypes from 'prop-types'
import Bookmark from '../../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="lg:w-1/3 ">
      <div>
        <h3 className="mt-8 mb-6 text-base font-bold text-center bg-[#6047EC] bg-opacity-10 rounded-md p-4 border border-[#6047EC] text-[#6047EC]">Spent time on read : {readingTime} min</h3>
      </div>
      <div className='bg-gray-100 mb-8 rounded-md p-6'>
        <h1 className="text-base lg:text-lg font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
        {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )}
      </div>
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks
