/* Fetch the detail page of each Page */

/* 

- In /pages/[slug].js
- For other Post Type, save in: /pages/post-types-name/[slug].js

*/

import axios from 'axios';
 
const Page = ({ page }) => (
  <div className="page">
    <h1>{ page.title }</h1>
    <img src={ page.image } alt=""/>
  </div>
)
export async function getStaticPaths() {
 const res = await axios.get('https://your-api.com/wp/v2/pages');
 const pages = res.data;
 const paths = pages.map((page) => `/${page.slug}`);
 return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
 const res = await axios.get(`https://your-api.com/wp/v2/pages?slug=${params.slug}`);
 const page = res.data[0];
 return { props: { page } }
}
export default Page;



