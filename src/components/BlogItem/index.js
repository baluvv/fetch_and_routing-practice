import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetail} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetail

  return (
    <Link className="blog-item-link" to={`/blogs/${id}`}>
      <li className="blog-item">
        <img src={imageUrl} alt="topic pic" className="image" />
        <div className="container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt="avatar" className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
