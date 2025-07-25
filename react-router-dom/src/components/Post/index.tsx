import './style.css'
import { Outlet, useParams, useSearchParams  } from 'react-router-dom'
export const Post = () => {
    const params = useParams();
    const {id} = params;
    const [qs] = useSearchParams(); 

    return(
        <div>
            <h1>Post {`params: ${id}`}  {`QS: ${qs}`}</h1>
            <Outlet />
        </div>
    )
}