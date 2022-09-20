import Link from 'next/link';
import NavGlobal from '/components/nav-global';
import Footer from '/components/footer';

/* export async function getStaticPaths() {
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.md', ''),
      },
    }));
    return {
      paths,
      fallback: false,
    };
  }
 */
export default function Layout({ children }) {
  return (
    <div className='flex flex-col gap-1 min-h-screen bg-gradient-to-r from-sky-200 to-fuchsia-200 sm:gap-4'>
      <NavGlobal />
      <div className='flex grow p-2'>
        {/* define max width: max-w-3xl */}
        <main className='flex-1 py-6 px-2 sm:px-0 mx-auto max-w-4xl min-h-screen bg-white rounded-3xl'>
            <div className='mx-auto container'>
              {children}
            </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}