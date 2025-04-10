import React, { useState, useEffect } from 'react';

const NewsComponent = () => {
    const [news, setNews] = useState(null);

    useEffect(() => {
        // Fetch the news data (replace '/news_data.json' with the correct path)
        const fetchNews = async () => {
            const response = await fetch('/chinese_openai_news_data_2025-04-10.json'); // Path to the saved JSON file
            const data = await response.json();
            setNews(data);
        };

        fetchNews();
    }, []);

    if (!news) {
        return <div>Loading...</div>;
    }

    return (
        // <div className="flex items-center justify-center min-h-screen mx-auto max-w-6xl px-4">
        <div
style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '72rem', // 6xl in Tailwind is 1152px = 72rem
    paddingLeft: '1rem', // 4 = 1rem
    paddingRight: '1rem'
}}
>
            

            <div>
            <h1>{news.title}</h1>
            <p><strong>Published:</strong> {news.date}</p>
            <a href={news.link} target="_blank" rel="noopener noreferrer">Read Full Article</a>
                <div 
                    dangerouslySetInnerHTML={{ __html: news.content_chinese }} // Render raw HTML here
                />
            </div>
        </div>
    );
};

export default NewsComponent;
