import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

  const {title} = bookmark;

  return (
    <div className='bg-white p-2 lg:p-4 my-3 rounded-md'>
        <h3 className='text-xs font-semibold'>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark
