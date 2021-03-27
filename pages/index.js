
import { PageTitle} from 'components/shared';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


function Home({props}){
  return (
  <>
    <PageTitle text="Posts" />
      {props.data.map(data => (
        <div>
          <Link href={`//jsonplaceholder.typicode.com/posts/${data.id}`}>
            <a>{data.title}</a>
          </Link>
        </div>))}
  </>
    )
  }


Home.getInitialProps=async function()
{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
    return {
      props: {
                data,
              },
    }
}

export default Home
