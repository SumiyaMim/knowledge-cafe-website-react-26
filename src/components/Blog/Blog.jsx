import PropTypes from "prop-types";
import { BsBookmark } from 'react-icons/bs';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  // console.log(blog)
  const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

  return (
    <div>
      <img className="w-full my-8 rounded-md" src={cover} alt={`Cover picture of the title ${title}`}/>
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <img src={author_img} alt="" className="w-12" />
          <div className="ml-6">
            <h3 className="text-base font-bold">{author}</h3>
            <p className="text-sm font-medium text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-sm">{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className='text-sm'><BsBookmark></BsBookmark></button>
        </div>
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="text-xs text-gray-500 mr-2">
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button onClick={() => handleMarkAsRead(id, reading_time)} className="my-4 text-xs font-bold text-[#6047EC] underline">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
