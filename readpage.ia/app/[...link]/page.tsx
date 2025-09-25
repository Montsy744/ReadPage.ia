import React from "react";
import Chat from "../components/Chat";
import { cookies } from "next/headers";

interface pageProps {
  params : {
    link? : string | string[];
  }
}

function reconstructUrl({url} : {url : string[]}) {
  const decodedComponents = url.map(component => decodeURIComponent(component));
  return decodedComponents.join('/');
}

const Page = async ({ params }: pageProps) => {

  const sessionCookies = (await cookies()).get('sessionId')?.value;
  
  if (!params.link || params.link.length === 0) {
    return <div>Erreur : Aucun lien fourni</div>;
  }

  const linkArray = Array.isArray(params.link) ? params.link : [params.link];; // si c'est un tableau, on le garde sinon on le met dans un tableau
  const decodedLink = reconstructUrl({url : linkArray}); //on reconstruit l'url

  const sessionId = (decodedLink + "__" + sessionCookies).replace(/\//g, "");
  return (
    <Chat decodedLink={decodedLink}></Chat>
  )
}

export default Page
  
