import Image from "next/image";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();

    const paths = data.map(photo => {
        return {
            params: { id: photo.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await res.json();
    
    return {
        props: { photo: data }
    }
}

const Images = ({ photo }) => {
    return ( 
        <div>
            <h1>{photo.title}</h1>
            <Image src={photo.url} alt={photo.title} width={150} height={100} />
        </div>
     );
}
 
export default Images;