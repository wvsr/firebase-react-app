import BlogCard from '../components/BlogCard'
export default function Home() {
  return (
    <>
      <article className='container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-5 p-3'>
        <BlogCard i='computer' />
        <BlogCard i='software' />
        <BlogCard i='coder' />
        <BlogCard i='programming' />
        <BlogCard i='javascript' />
        <BlogCard i='google' />
        <BlogCard i='facebook' />
        <BlogCard i='sky' />
        <BlogCard i='fruit' />
        <BlogCard i='man' />
      </article>
    </>
  )
}
