import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost, updatePost } from '../api/api';

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({ title: '', body: '' });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    getPost(postId).then((response) => setPost(response.data));
  }, [postId]);

  const handleUpdate = () => {
    updatePost(postId, post).then(() => {
        navigate('/');
    });
  };

  return (
    <>
     <div className='text-center mx-auto text-4xl font-bold text-pink-600 pt-3 items-center'>
      <h2>Edit Post</h2>
    </div>
    <div className='my-9 px-16 py-10 mx-auto max-w-sm rounded overflow-hidden shadow-lg bg-slate-200'>
     <div className='mt-8'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
        <input
            type="text"
            value={post.title}
            ref={inputRef}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </div>
      <br />
      <div>
      <label className='block text-gray-700 text-sm font-bold mb-2'>Body</label>
        <textarea
            value={post.body}
            className='shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
      </div>
      <br />
      <div className='flex justify-center'>
        <button className='bg-pink-500 hover:bg-pink-700 text-white font-bold mt-3 py-2 px-4 border border-pink-700 rounded' onClick={handleUpdate} >Update </button>
      </div>
    </div>
    </>
  );
};

export default EditPost;
