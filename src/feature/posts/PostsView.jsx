import { useEffect } from "react";
import { fetchPosts } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h3>Data Fetching Using Redux Toolkit</h3>
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>Can not Fetch Data Right Now</h3>}
      {posts &&
        posts.map((curElem) => (
          <div key={curElem.id}>
            <h3>{curElem.title.toUpperCase()}</h3>
            <p>{curElem.body}</p>
          </div>
        ))}
    </div>
  );
};

export default PostsView;
