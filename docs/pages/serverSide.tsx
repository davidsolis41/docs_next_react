import React from "react";
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsResult,
} from "next";
import Head from "next/head";
import Image from "next/image";

interface IProps {
  data: any[];
}

const LadoServidor: NextPage<IProps> = function ({ data }) {
  console.log(`Esto viene del servidor: ${data}`);
  return (
    <>
      <Head>
        <title>Server Side Rendering</title>
      </Head>
      <header className={`w-100 flex-row`}>
        Hola soy una pagina Renderizada del lado del servidor
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

export const getServerSideProps: GetServerSideProps = async function (
  context
): Promise<GetServerSidePropsResult<IProps>> {
  //el query es todo lo que esta despues del ? en la url
  let { query } = context;

  //peticion que se realiza del lado del servidor
  const res: Response = await fetch(`https://.../data`);
  const data: any[] = await res.json();

  //Si no encuentra datos, dará una pagina 404
  if (!data) return { notFound: true };

  // Pasamos la respuesta de la peticion a los props
  return { props: { data } };
};

export default LadoServidor;
