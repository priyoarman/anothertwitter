'use client';

import { useState, useEffect } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);
  useEffect(() => {
    fetch(`https://saurav.tech/NewsAPI/everything/cnn.json`)
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className='flex flex-col text-gray-800 space-y-3 bg-gray-50 border border-gray-200 rounded-xl pt-2'>
      <h4 className='font-bold text-xl px-4 pt-2'>Whats happening</h4>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.url}>
          <a href={article.url} target='_blank'>
            <div className='flex items-center justify-between px-4 py-2 space-x-1 hover:bg-cyan-50 transition duration-200'>
              <div className='space-y-0.5'>
                <h6 className='text-sm font-bold'>{article.title}</h6>
                <p className='text-xs font-medium text-gray-500'>
                  {article.source.name}
                </p>
              </div>
              <img src={article.urlToImage} width={70} className='rounded-xl' />
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={() => setArticleNum(articleNum + 3)}
        className='text-gray-700 font-semibold pl-4 pb-3 hover:text-cyan-500 cursor-pointer text-sm'
      >
        Load more
      </button>
    </div>
  );
}
