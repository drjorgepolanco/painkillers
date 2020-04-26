/* Links: internal, no page refresh */

import Link from 'next/link';

// Page
<Link href='/[slug]' as={`/${slug}`}>
  <a>{ title }</a>
</Link>


// Post
<Link href='/posts/[slug]' as={`/posts/${slug}`}>
  <a>{ title }</a>
</Link>


// Post Comments
<Link href='/posts/[id]/[comment]' as={`/posts/${id}/second-comment`}>
  <a>Second comment</a>
</Link>