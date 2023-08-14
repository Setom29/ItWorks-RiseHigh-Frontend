import Post from './Post';
import { useState, useEffect } from 'react';

export default function Posts({posts}){
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const [sizeClass, setSizeClass] = useState(size.width < 375)

    useEffect(() => {
        const resize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', resize)
    }, [])
    useEffect(()=>{
        setSizeClass(size.width < 375)
    }, [size])

    return (
        <div  className={`posts ${sizeClass ? 'mobile' : ''}`} >
            <h1>Your screen size is: {size.width}x{size.height}</h1>
            {posts.map(el => <Post post={el}/>)}
        </div>

    )
}