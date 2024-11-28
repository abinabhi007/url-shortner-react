// src/pages/MyURLs.js
import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAuth } from '../context/AuthContext';

const MyURLs = () => {
  const { user } = useAuth();
  const [urls, setUrls] = useLocalStorage(`urls_${user.username}`, []);
  const [search, setSearch] = useState('');

  const filteredUrls = urls.filter((url) =>
    url.title.includes(search) || url.originalUrl.includes(search)
  );

  const deleteUrl = (id) => {
    setUrls(urls.filter((url) => url.id !== id));
  };

  return (
    <div>
      <h1>My URLs</h1>
      <input
        type="text"
        placeholder="Search by title or URL"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredUrls.map((url) => (
          <div key={url.id}>
            <h2>{url.title}</h2>
            <p>Original: {url.originalUrl}</p>
            <p>Shortened: {url.shortUrl}</p>
            <button onClick={() => navigator.clipboard.writeText(url.shortUrl)}>Copy</button>
            <button onClick={() => deleteUrl(url.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyURLs;
