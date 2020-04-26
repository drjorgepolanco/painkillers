import { useRouter } from 'next/router';
import Link          from 'next/link';
 
const Post = () => {
 const router = useRouter()
 const { id } = router.query
 
 return (
   <>
     <ul>
       <li>
         <Link href='/post/[id]/[comment]' as={`/post/${id}/first-comment`}>
           <a>First comment</a>
         </Link>
       </li>
       <li>
         <Link href='/post/[id]/[comment]' as={`/post/${id}/second-comment`}>
           <a>Second comment</a>
         </Link>
       </li>
     </ul>
   </>
 )
}
 
export default Post;



/* Dynamic Routing */

// https://github.com/zeit/next.js/tree/canary/examples/dynamic-routing


// This example shows how to do dynamic routing in Next.js. It contains two dynamic routes:

// pages/post/[id]/index.js
  // e.g. matches /post/my-example (/post/:id)

// pages/post/[id]/[comment].js
  // e.g. matches /post/my-example/a-comment (/post/:id/:comment)