import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [isPosting, setPosting] = useState(false);
    const history = useHistory();
    const src="";

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const post={title,body,author,src};
        setPosting(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(post)
        }).then(()=> {console.log("Posted Successfully !!!");setPosting(false);history.push('/');})
    }

    return ( 
        <div className="create">
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title : </label>
                <input
                type="text"
                value={title}
                required
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Content : </label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setContent(e.target.value)}
                />
                <label>Author : </label>
                <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} required />
                {!isPosting && <button>Post</button>}
                {isPosting && <button disabled>Posting...</button>}
            </form>
        </div>
     );
}
 
export default Create;