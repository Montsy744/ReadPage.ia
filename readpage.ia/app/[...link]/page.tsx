import React from "react";
import Chat from "../components/Chat";

interface pageProps {
  params : {
    link? : string | string[];
  }
}

function reconstructUrl({url} : {url : string[]}) {
  const decodedComponents = url.map(component => decodeURIComponent(component));
  return decodedComponents.join('/');
}

const Page = ({ params }: PageProps) => {
  
  if (!params.link || params.link.length === 0) {
    return <div>Erreur : Aucun lien fourni</div>;
  }

  const linkArray = Array.isArray(params.link) ? params.link : [params.link];; // si c'est un tableau, on le garde sinon on le met dans un tableau
  const decodedLink = reconstructUrl({url : linkArray}); //on reconstruit l'url

  return (
    <Chat decodedLink={decodedLink}></Chat>
  )
}

export default Page
  
