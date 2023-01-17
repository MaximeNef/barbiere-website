import Head from "next/head";
import NavPage from "../../components/all/Nav-page";
import Container from "../../components/shared/container";
import H1 from "../../components/shared/h1";
import H2 from "../../components/shared/h2";

export default function Deontologie() {
  return (
    <NavPage current={"Agence / Equipe"}>
      <Head>
        <title>{"Barbiere-Immo "}</title>
        <meta
          name='Barbiere immobilier'
          content="François Barbiere et ses associés ont pour vocation de dénicher le biens de vos rêves. Maison , appartement , ect  vous retrouverez tout ce qu'il faut chez nous "
        />
        <Link legacyBehavior rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Container>
        <H1>{"Déontologie"}</H1>
      </Container>
      <h2 className='mt-4  text-[20px]  leading-[25px] '>
        {
          "François Barbière et Stéphane Beaujot sont agents immobiliers agréés en Belgique."
        }
      </h2>
      <h3 className='mt-3 mb-2'>
        {"• François Barbière : "}
        <p className='ml-3'>{"Nr d’agréation n° 506259"}</p>
      </h3>
      <h3>
        {"• Stéphane Beaujot : "}
        <p className='ml-3'>{"Nr d’agréation n° 510059"}</p>
      </h3>
      <h2 className='mt-4  text-[20px]  leading-[25px] '>
        {
          "Ils respectent, ainsi que leurs collaborateurs, stagiaires et associés, le code déontologique de leur instance de contrôle :"
        }
      </h2>
      <h3 className='mt-3 mb-2'>
        {"L’Institut Professionnel des Agents Immobiliers (IPI) "}
        <p className='mt-2'>{"Rue du Luxembourg 16B, 1000 Bruxelles"}</p>
      </h3>
      <h3>
        {
          "qui peut être consulté sur le site de l’IPI :  https://www.ipi.be/news-tag/code-de-deontologie"
        }
      </h3>
    </NavPage>
  );
}
