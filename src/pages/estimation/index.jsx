import NavPage from "../../components/all/Nav-page";
import Head from "next/head";
import Link from "next/link";

export default function Estimation() {
  return (
    <NavPage current='estimation'>
      <Head>
        <title>{"Estimez votre bien – Barbiere Immo"}</title>
        <meta
          name='description'
          content='Estimez la valeur de votre bien immobilier en ligne ou prenez rendez-vous avec un agent Barbiere Immo.'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-white flex flex-col items-center px-6 py-12'>
        <h1 className='text-[2rem] md:text-[2.8rem] font-bold text-[#0b2528] text-center mb-4 mt-[-20px]'>
          Estimez votre bien
        </h1>
        <p className='text-[#646464] text-[17px] text-center max-w-xl mb-14'>
          Choisissez la formule qui vous convient le mieux pour connaître la
          valeur de votre bien.
        </p>

        <div className='flex flex-col md:flex-row gap-8 w-full max-w-6xl'>
          {/* Card Estimation en ligne */}
          <Link href='/estimation/en-ligne' passHref>
          <a
            className='group flex-1 bg-white rounded-[20px] shadow-[2px_3px_12px_rgba(76,73,85,0.10)] overflow-hidden flex flex-col cursor-pointer'
          >
            <div className='relative'>
              <img
                src='/assets/estimation en ligne.webp'
                alt='Estimation en ligne'
                className='w-full h-[220px] object-cover'
              />
              <div
                className='absolute inset-0'
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, white 100%)",
                }}
              />
            </div>
            <div className='px-8 pb-8 flex flex-col flex-1 mt-[-24px] relative'>
              <h2 className='text-[#0b2528] font-bold text-[1.6rem] md:text-[1.8rem] mb-5'>
                Estimation en ligne
              </h2>
              <p className='text-[#646464] text-[15px] mb-1 flex-1'>
                Obtenez une <strong>estimation sommaire et rapide</strong> de
                votre bien grâce à notre outil en ligne Propteo.
              </p>
              <p className='text-[#999] text-[13px] italic mb-6'>
                ⚠️ Le résultat est basé sur des données de marché automatisées.
                Il s'agit d'une fourchette indicative et non d'une expertise
                officielle.
              </p>
              <div className='flex items-center justify-center bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] text-white font-semibold text-[17px] rounded-full px-6 py-3'>
                <span className='relative flex items-center gap-2'>
                  Estimer en ligne
                  <span className='inline-block group-hover:animate-arrow-slide'>
                    →
                  </span>
                  <span className='absolute bottom-[-1px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-white' />
                </span>
              </div>
            </div>
          </a>
          </Link>

          {/* Séparateur */}
          <div className='flex md:flex-col items-center justify-center gap-3'>
            <div className='flex-1 h-[1px] md:h-full md:w-[1px] bg-[#ddd]' />
            <span className='text-[#aaa] font-semibold text-[14px] shrink-0'>
              ou
            </span>
            <div className='flex-1 h-[1px] md:h-full md:w-[1px] bg-[#ddd]' />
          </div>

          {/* Card Estimation professionnelle */}
          <Link
            href='/contact?message=Bonjour%2C+je+vous+contacte+pour+faire+une+expertise+%2F+estimation+professionnelle+de+mon+bien.'
            passHref
          >
            <a className='group flex-1 bg-white rounded-[20px] shadow-[2px_3px_12px_rgba(76,73,85,0.10)] overflow-hidden flex flex-col cursor-pointer'>
              <div className='relative'>
                <img
                  src='/assets/bureau.jpg'
                  alt='Estimation professionnelle'
                  className='w-full h-[220px] object-cover'
                />
                <div
                  className='absolute inset-0'
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, white 100%)",
                  }}
                />
              </div>
              <div className='px-8 pb-8 flex flex-col flex-1 mt-[-24px] relative'>
                <h2 className='text-[#0b2528] font-bold text-[1.6rem] md:text-[1.8rem] mb-5'>
                  Estimation professionnelle
                </h2>
                <p className='text-[#646464] text-[15px] mb-3 flex-1'>
                  Prenez rendez-vous avec l'un de nos agents pour une{" "}
                  <strong>visite sur place</strong> et une{" "}
                  <strong>expertise complète</strong> de votre bien.
                </p>
                <p className='text-[#999] text-[13px] italic mb-6'>
                  ✅ Résultat précis, personnalisé et sans engagement. Nos
                  experts vous accompagnent de A à Z.
                </p>
                <div className='flex items-center justify-center bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] text-white font-semibold text-[17px] rounded-full px-6 py-3'>
                  <span className='relative flex items-center gap-2'>
                    Prendre rendez-vous
                    <span className='inline-block group-hover:animate-arrow-slide'>
                      →
                    </span>
                    <span className='absolute bottom-[-1px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-white' />
                  </span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </NavPage>
  );
}
