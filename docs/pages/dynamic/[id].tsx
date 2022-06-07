import React from "react";
import Head from "next/head";
import Image from "next/image";
import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
} from "next";

interface IProps {
  datos: any[];
}

const Dynamic: NextPage<IProps> = function ({ datos }) {
  return (
    <>
      <Head>
        <title>Incremental Static Generation</title>
      </Head>
      <header className={`w-100 flex-row`}>
        Hola soy una pagina con Renderización Estatica Incremental
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

//esta funcion construira las paginas dinamicas que le digamos
//las hará en el momento de compilacion y será incremental
export const getStaticPaths: GetStaticPaths = async function () {
  const res: Response = await fetch("https://.../products");
  const products: any[] = await res.json();

  //Todos productos que esten aqui, se generarán al compilar
  const paths = products.map((product: any) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async function (
  context
): Promise<GetStaticPropsResult<IProps>> {
  //los params son los argumentos de la url despues de /
  const { params } = context;

  //peticion que se realiza del lado del servidor
  const res: Response = await fetch(`https://.../data/${params?.id}`);
  const datos: any[] = await res.json();

  //devolvera una pagina 404 si la condicion se cumple
  if (!datos) return { notFound: true };

  // el retorno de la ejecucion, con la data y la revalidacion de la pagina
  return {
    revalidate: 60, // la pagina se volvera a generar despues de un minuto
    props: { datos },
  };
};

export default Dynamic;
