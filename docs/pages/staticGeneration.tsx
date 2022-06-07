import React from "react";
import type { NextPage, GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";

interface IProps {
  data: any;
  opts: any[];
}

const GeneracionEstatica: NextPage<IProps> = function ({ data, opts }) {
  console.log(`Esto viene del servidor: ${data}`);
  return (
    <>
      <Head>
        <title>Static Generation</title>
      </Head>
      <header className={`w-100 flex-row`}>
        Hola soy una pagina Renderizada estaticamente
      </header>
      <section>
        <Image
          src={`/myImagen.jpg`}
          alt="Texto alternativo"
          layout="fill"
          objectFit="cover"
        />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async function (
  context
): Promise<GetStaticPropsResult<IProps>> {
  //los params son todo lo que esta despues del / en la url
  const { params } = context;

  //peticion que se realiza del lado del servidor
  const res: Response = await fetch(`https://.../data`);
  const data: any[] = await res.json();

  //Si no encuentra datos, dará una pagina 404
  if (!data) return { notFound: true };

  // el retorno de la ejecucion, con la data y la revalidacion de la pagina
  return {
    revalidate: 60, // la pagina se volvera a generar despues de un minuto
    props: { data, opts: [] },
  };
};

export default GeneracionEstatica;
