import React, {useState} from 'react';
import Item from '../post-grid-item';

export default function PostGrid({posts}) {
    const [prevPosts, setPrevPosts] = useState(null);

    if (posts !== prevPosts) {
        setPrevPosts(posts);
    }
    const postsMap = posts.map((post, index) => <Item post={post} key={index} />);
    return (
        <div className="row">
            <h1 className="w-100">Aktualne ogłoszenia</h1>
            {postsMap}
        </div>
    );
}
