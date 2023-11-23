import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPost } from '../api/api';

function PostList() {
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const addHandler = (e) => {
    e.preventDefault();
    if (newPost.title === '' || newPost.body === '') {
      setAlert(true);
    } else {
      createPost(newPost);
    //   console.log('Added post');
      setAlert(false);
      navigate('/');
    }
  };

  return (
    <div>
      <div className=''>
        <div className='text-center mx-auto text-4xl font-bold text-orange-600 pt-3 items-center'>
          <h1>Create Post</h1>
        </div>
        <div className='my-9 px-16 py-10 mx-auto max-w-sm rounded overflow-hidden shadow-lg bg-slate-200'>
          <form>
            <div className='mt-2'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                ref={inputRef}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                name='title'
                placeholder='  Title'
                value={newPost.title}
              />
            </div>
            <div className='mt-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Body</label>
              <textarea
                className='shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                onChange={(e) =>
                  setNewPost({ ...newPost, body: e.target.value })
                }
                name='body'
                placeholder='  Body'
                value={newPost.body}
              />
            </div>
            
            <Link to={alert ? '' : '/'}>
              <div className=' mt-5 flex justify-center'>
                <button
                    className='bg-orange-500 hover:bg-orange-700 text-white font-bold mt-3 py-2 px-4 border border-orange-700 rounded'
                    onClick={addHandler}
                >
                    Add Post
                </button>
              </div>
            </Link>
            {alert ? (
              <div className=' text-red-800 mt-2'>* All fields are mandatory</div>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostList;
