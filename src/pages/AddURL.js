// src/pages/AddURL.js
import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAuth } from '../context/AuthContext';
import { nanoid } from 'nanoid';

const AddURL = () => {
  const { user } = useAuth();
  const [urls, setUrls] = useLocalStorage(`urls_${user.username}`, []);
  const [originalUrl, setOriginalUrl] = useState('');
  const [title, setTitle] = useState('');

  const addUrl = () => {
    if (urls.length >= 5) {
      alert("URL limit reached");
      return;
    }

    const newUrl = {
      id: nanoid(),
      title,
      originalUrl,
      shortUrl: `https://short.ly/${nanoid(5)}`,
      createdAt: new Date(),
    };

    setUrls([...urls, newUrl]);
    setOriginalUrl('');
    setTitle('');
  };

  return (
    <div>
      <h1>Add New URL</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="url"
        placeholder="Original URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={addUrl}>Shorten</button>
    </div>
  );
};

export default AddURL;
