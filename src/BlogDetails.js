import { useParams,useHistory } from 'react-router-dom';
import useFetch from './fetch';
import BlogDataService from './Services/services';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: obj, error, isLoading} = useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();

    const deleteBlog = () => {
        BlogDataService.delete(id).then(()=>{history.push('/')}).catch(e => {console.log(e);});
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {obj &&
            (<article>
                <h2>{obj.title}</h2>
                <p>Writen by <b><i>{obj.author}</i></b></p>
                <div>{obj.body}</div>
                <button onClick={deleteBlog}>Delete</button>
            </article>)
            }
        </div>
     );
}
 
export default BlogDetails