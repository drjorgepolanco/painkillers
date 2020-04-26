Links: internal, no page refresh

<Link href='/[slug]' as={`/${post.meta.slug}`}>
  <a>{post.title}</a>
</Link>

 






Page (Static Query)
import wp from '../api/wp';
import Layout from '../components/global/layout';
 
const Page = (props) => {
 const { page } = props;
 return (
   <Layout>
     <div className="page">
       <h1>{ page.title.rendered }</h1>
       <img src={ page.image.url } alt=""/>
     </div>
   </Layout>
 )
}
export async function getStaticPaths() {
 const res = await wp.get('/wp/v2/pages');
 const pages = res.data;
 const paths = pages.map((page) => `/${page.slug}`);
 return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
 const res = await wp.get(`/wp/v2/pages?slug=${params.slug}`);
 const page = res.data[0];
 return { props: { page } }
}
export default Page;



