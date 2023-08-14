export default function Post({post}){
    return (
        <div className="post">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-text">{post.body}</div>
        </div>
    )
}