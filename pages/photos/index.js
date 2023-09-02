import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Photos.module.css";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();

    return {
        props: { photos: data }
    }
}

const Photos = ({ photos }) => {
    return ( 
        <>
            <Head>
                <title>Photo Album | Photos</title>
                <meta name="keywords" content="photos, images, pictures" />
            </Head>
            <div>
                <h1>All Photos</h1>
                {photos.map(photo => (
                    <Link href={`/photos/${photo.id}`} key={photo.id}>
                    <div className={styles.single}>
                        <h3>{photo.title}</h3>
                    </div>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Photos;