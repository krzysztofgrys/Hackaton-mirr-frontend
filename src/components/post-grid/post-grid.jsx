import React, {useState} from 'react';
import Item from '../post-grid-item';

export default function PostGrid({posts}) {
    const [prevPosts, setPrevPosts] = useState(null);

    if (posts !== prevPosts) {
        setPrevPosts(posts);
    }
    const postsMap = posts.map((post, index) => <Item post={post} key={index} />);
    return (
        <div className="col-sm-12">
            <h1>Aktualne ogłoszenia</h1>
            {postsMap}
        </div>
    );
}
