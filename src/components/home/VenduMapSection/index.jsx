import Link from "next/link";
import Container from "../../shared/container";
import MyImage from "../../shared/myimage";
import Flex from "../../shared/flex";

/* ─── Card bien vendu (mini) ────────────────────────────────── */
function CardVenduMini({ page, href }) {
  const p = page.data.slices[0].primary;
  const bannerSrc =
    page.type === "location"
      ? "/assets/bannerloué.svg"
      : "/assets/VenduBanner.svg";

  return (
    <Link href={href} passHref>
      <Container className='rounded-[20px] shadow-cardinfo flex-shrink-0 mx-2 w-[340px] cursor-pointer'>
        <Container className='relative'>
          <Container className='absolute z-10 top-[-2px]'>
            <MyImage source={bannerSrc} h={98} w={98} />
          </Container>
          <MyImage
            source={p.Image_bien?.url}
            className='rounded-t-[20px]'
            w={340}
            h={230}
            sizes='(max-width: 400px) 100vw, (max-width: 200px) 50vw, 33vw'
            objectFit='cover'
          />
        </Container>
        <Container className='p-3 h-[150px]'>
          <Flex justify='between'>
            <Container className='text-xl font-bold overflow-hidden h-8'>
              {p.nom_bien?.[0]?.text}
            </Container>
          </Flex>
          <Flex justify='start'>
            <MyImage source='/assets/pin.svg' h={16} w={12} />
            <Container className='ml-2 font-light text-[15px] leading-[18px] my-auto'>
              {p.adresse_bien?.[0]?.text}
            </Container>
          </Flex>
          <Container className='w-full h-[1px] bg-slate-200 mt-[7px]' />
          <Flex justify='between' className='mt-[14px]'>
            <Container>
              <Flex align='center'>
                {p.Superficie_bien?.[0]?.text && (
                  <MyImage source='/assets/superficie.svg' h={20} w={20} />
                )}
                <p className='ml-2 font-light text-[15px] leading-[18px]'>
                  {p.Superficie_bien?.[0]?.text}
                  {p.Superficie_bien?.[0]?.text ? "m²" : ""}
                </p>
              </Flex>
            </Container>
            <Container>
              <Flex align='center'>
                {p.sdb_bien?.[0]?.text && (
                  <MyImage source='/assets/Bathroom.svg' h={20} w={20} />
                )}
                <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
                  {p.sdb_bien?.[0]?.text}
                </p>
              </Flex>
            </Container>
            <Container>
              <Flex align='center'>
                {p.chambre_bien?.[0]?.text && (
                  <MyImage source='/assets/Bedroom.svg' h={19} w={28} />
                )}
                <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
                  {p.chambre_bien?.[0]?.text}
                </p>
              </Flex>
            </Container>
          </Flex>
        </Container>
      </Container>
    </Link>
  );
}

/* ─── Section principale ────────────────────────────────────── */
export default function VenduMapSection({
  venduPages = [],
  venduLocations = [],
}) {
  const allVendus = [
    ...venduPages.map((p) => ({ page: p, href: `/a-vendre/${p.uid}` })),
    ...venduLocations.map((p) => ({ page: p, href: `/a-louer/${p.uid}` })),
  ];

  // Dupliquer pour le scroll infini
  const items = allVendus.length > 0 ? [...allVendus, ...allVendus] : [];
  const duration = items.length * 3.5;

  return (
    <section className='mt-16 md:mt-20 mb-0 overflow-hidden relative'>
      {/* Titre — flux normal sur mobile, absolute sur desktop */}
      <h2 className='text-[1.5rem] md:text-[4rem] font-bold md:absolute w-full md:w-[52%] leading-[1.2] text-[#0b2528] mb-4 md:mb-0'>
        Et si le prochain bien vendu était le vôtre ?{" "}
      </h2>

      {/* Carte mobile — sous le titre, au-dessus du slider */}
      <div
        className='md:hidden w-full rounded-[16px] overflow-hidden'
        style={{ height: 280 }}
      >
        <iframe
          src='/map-belgique.html'
          className='w-full h-full border-0'
          title='Carte des biens vendus'
        />
      </div>

      {/*
        Layout desktop :
        - Le slider occupe toute la largeur (z-index 1)
        - La carte est positionnée en absolute sur la droite (z-index 2)
          → les cards passent "sous" la carte
        - Un dégradé blanc sur le bord gauche de la carte assure la transition
      */}
      <div className='relative md:min-h-[320px] mt-4 md:mt-0'>
        {/* ── Slider infini ── */}
        <div
          className='md:absolute overflow-hidden py-3 md:bottom-0'
          style={{ zIndex: 1 }}
        >
          {/* Dégradé bord gauche */}
          <div
            className='absolute left-0 top-0 bottom-0 w-4 pointer-events-none'
            style={{
              background: "linear-gradient(to right, white 0%, transparent 100%)",
              zIndex: 10,
            }}
          />
          {/* Dégradé bord droit */}
          <div
            className='absolute right-0 top-0 bottom-0 w-4 pointer-events-none'
            style={{
              background: "linear-gradient(to left, white 0%, transparent 100%)",
              zIndex: 10,
            }}
          />

          {items.length > 0 ? (
            <div
              className='flex items-end'
              style={{
                animation: `venduScroll ${duration}s linear infinite`,
                width: "max-content",
                paddingTop: "8px",
                paddingBottom: "10px",
              }}
            >
              {items.map(({ page, href }, i) => (
                <CardVenduMini
                  key={`${page.uid}-${i}`}
                  page={page}
                  href={href}
                />
              ))}
            </div>
          ) : (
            <p className='text-[#aaa] text-[15px] pl-4 py-12'>
              Aucun bien vendu pour le moment.
            </p>
          )}
        </div>

        {/* ── Carte Belgique (desktop uniquement) ── */}
        <div
          className='hidden md:block relative w-[60%] rounded-l-[24px] ml-[auto]'
          style={{
            zIndex: 2,
            aspectRatio: "1000 / 740",
            background: "linear-gradient(to right, transparent 0%, white 50%)",
          }}
        >
          <iframe
            src='/map-belgique.html'
            className='w-full h-full border-0'
            style={{ background: "transparent" }}
            scrolling='no'
            allowTransparency='true'
            title='Carte des biens vendus'
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes venduScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
