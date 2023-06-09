import React from "react";
import { Link } from "react-router-dom";

const RelatedBlogsList = ({ blog }) => {
  const { id, title, image, tags, createdAt } = blog || {};
  const tagsShow = tags?.map((tag, i) =>
    tags.length === i + 1 ? (
      <span key={tag}>#{tag}</span>
    ) : (
      <span key={tag}>#{tag}, </span>
    )
  );
  return (
    <div className="space-y-4 related-post-container">
      <div className="card">
        <Link to={`/blogs/${id}`}>
          <img src={image} className="card-image" alt={title} />
        </Link>
        <div className="p-4">
          <Link
            to={`/blogs/${id}`}
            className="text-lg post-title lws-RelatedPostTitle"
          >
            {title}
          </Link>
          <div className="mb-0 tags">{tagsShow}</div>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogsList;
