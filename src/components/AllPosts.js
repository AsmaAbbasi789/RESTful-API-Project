import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, deletePost } from '../api/api';

function AllPosts(props) {
  const [posts, setPosts] = useState([]);


  const fetchPosts = () => {
    getAllPosts().then((response) => setPosts(response.data));
  };

//   console.log("All Posts:", posts);

  useEffect(() => {
    fetchPosts();
  }, []);

  const deleteHandler = (postId) => {
    deletePost(postId).then(() => fetchPosts());
  };


  return (
    <>
      <div className='px-5 mx-auto'>
        <div className='text-center mx-auto text-4xl font-bold text-blue-500 pt-3'>All Posts</div>
        <div className='flex justify-end mr-9'>
          <Link to='/addPost'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-2 px-4 border border-blue-700 rounded">
              New Post
            </button>
          </Link>
        </div>
        <div className='rounded shadow-sm mx-auto px-4 py-5 m-5 bg-slate-50'>
          {posts.length === 0 ? <div className='text-2xl'>No post yet</div> : <div></div>}
          {posts.map((post) => (
            <div key={post.id} className='flex flex-col md:flex-row mt-8 items-center justify-between max-w-full'>
              <div className='max-w-[80%] md:max-w-[60%] lg:max-w-[70%] xl:max-w-[80%] mb-3 md:mb-0'>
                <strong>{post.title}</strong> - {post.body}
              </div>
              <div className='ml-3 space-x-5  max-w-[80%] md:max-w-[40%] lg:max-w-[30%] xl:max-w-[20%]'>
                <Link to={`/${post.id}`}>
                  <button className='bg-green-500 hover:bg-green-600 text-white font-bold   w-24 h-10 border border-green-700 rounded-3xl mb-2 md:mb-0 md:mr-2'>
                    Edit
                  </button>
                </Link>
                <button
                  className='bg-red-500 hover:bg-red-600 text-white font-bold w-24 h-10 border border-red-700 rounded-3xl'
                  onClick={() => deleteHandler(post.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllPosts;
