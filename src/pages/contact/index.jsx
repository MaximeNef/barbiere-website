import { useState, useEffect } from "react";
import NavPage from "../../components/all/Nav-page";
import Container from "../../components/shared/container";
import Flex from "../../components/shared/flex";
import H1 from "../../components/shared/h1";
import { useRouter } from "next/router";
import Head from "next/head";
import MyImage from "../../components/shared/myimage";

export default function Contact() {
  const router = useRouter();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [description, setDescription] = useState("");
  const [bienUid, setBienUid] = useState("");
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [loading, setLoading] = useState(false);

  const isFormValid = nom !== "" && prenom !== "" && mail !== "" && telephone !== "" && description !== "";

  useEffect(() => {
    if (router && router.query) {
      if (router.query.bien) {
        setDescription(`Je vous contacte concernant le bien: ${router.query.bien}`);
      } else if (router.query.message) {
        setDescription(router.query.message);
      }
      if (router.query.uid) {
        setBienUid(router.query.uid);
      }
    }
  }, [router.query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        body: JSON.stringify({ nom, prenom, mail, telephone, description, bienUid }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const { error } = await res.json();
      setStatus(error ? "error" : "success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <NavPage current='contact'>
      <Head>
        <title>{"Barbiere-Immo "}</title>
        <meta
          name='Barbiere immobilier'
          content="François Barbiere et ses associés ont pour vocation de dénicher le biens de vos rêves. Maison , appartement , ect  vous retrouverez tout ce qu'il faut chez nous "
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Container className='relative mx-[-5vw] md:h-screen'>
        <className className='h-full w-full mx-[-20px] '>
          <MyImage
            source='/assets/contactgsm.webp'
            layout='fill'
            objectFit={"cover"}
          />
        </className>
        <Container className='flex flex-col z-20 bg-black/50 pb-20 md:min-h-screen md:items-center md:justify-center'>
          <div className='w-full md:w-1/2'>
            <H1 className='my-[20px] text-white'>{"Nous contacter"}</H1>

            {status === "success" ? (
              <div className='bg-[#f2fbfa] border-2 border-[#41B8B8] rounded-[10px] p-8 text-center'>
                <p className='text-[#41B8B8] text-[24px] font-semibold mb-2'>✓ Message envoyé !</p>
                <p className='text-[#333] text-[17px] mb-6'>
                  Votre message a bien été envoyé. Nous vous recontacterons dans les plus brefs délais.
                </p>
                <div className='flex flex-col md:flex-row gap-3 justify-center'>
                  <button
                    onClick={() => router.push("/")}
                    className='group bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-full px-6 py-3 text-white text-[17px] font-semibold'
                  >
                    <span className='relative flex items-center gap-2'>
                      Retourner à l'accueil
                      <span className='inline-block group-hover:animate-arrow-slide'>→</span>
                      <span className='absolute bottom-[-1px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-white' />
                    </span>
                  </button>
                  <button
                    onClick={() => router.push("/biens")}
                    className='group border-2 border-[#41B8B8] rounded-full px-6 py-3 text-[#41B8B8] text-[17px] font-semibold'
                  >
                    <span className='relative flex items-center gap-2'>
                      Parcourir nos biens
                      <span className='inline-block group-hover:animate-arrow-slide'>→</span>
                      <span className='absolute bottom-[-1px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9]' />
                    </span>
                  </button>
                </div>
              </div>
            ) : status === "error" ? (
              <div className='bg-red-50 border-2 border-red-400 rounded-[10px] p-8 text-center'>
                <p className='text-red-500 text-[24px] font-semibold mb-2'>Un problème est survenu</p>
                <p className='text-[#333] text-[17px] mb-4'>
                  L'envoi du message a échoué. Veuillez réessayer.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className='group bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-full px-6 py-3 text-white font-semibold'
                >
                  <span className='relative flex items-center gap-2'>
                    Réessayer
                    <span className='inline-block group-hover:animate-arrow-slide'>→</span>
                    <span className='absolute bottom-[-1px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-white' />
                  </span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} method='post' className='space-y-3'>
                <div className='flex gap-0'>
                  <div className='relative w-1/2'>
                    <input
                      type='text'
                      name='nom'
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      required
                      className='peer w-[calc(100%-16px)] h-[60px] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] focus:outline-none bg-[#f2fbfa]'
                    />
                    {!nom && <span className='absolute top-[23px] left-5 text-[#646464]/70 text-[19px] font-semibold pointer-events-none peer-focus:opacity-0'>Nom <span className='text-red-500 text-[11px] relative bottom-[4px]'>*</span></span>}
                  </div>
                  <div className='relative w-1/2'>
                    <input
                      type='text'
                      name='prenom'
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      required
                      className='peer w-[calc(100%-16px)] h-[60px] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] focus:outline-none bg-[#f2fbfa]'
                    />
                    {!prenom && <span className='absolute top-[23px] left-5 text-[#646464]/70 text-[19px] font-semibold pointer-events-none peer-focus:opacity-0'>Prénom <span className='text-red-500 text-[11px] relative bottom-[4px]'>*</span></span>}
                  </div>
                </div>
                <div className='relative'>
                  <input
                    type='email'
                    name='mail'
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                    className='peer w-[calc(100%-16px)] h-[60px] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] focus:outline-none bg-[#f2fbfa]'
                  />
                  {!mail && <span className='absolute top-[23px] left-5 text-[#646464]/70 text-[19px] font-semibold pointer-events-none peer-focus:opacity-0'>Email <span className='text-red-500 text-[11px] relative bottom-[4px]'>*</span></span>}
                </div>
                <div className='relative'>
                  <input
                    type='number'
                    name='telephone'
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    required
                    className='peer w-[calc(100%-16px)] h-[60px] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] focus:outline-none'
                  />
                  {!telephone && <span className='absolute top-[23px] left-5 text-[#646464]/70 text-[19px] font-semibold pointer-events-none peer-focus:opacity-0'>Téléphone <span className='text-red-500 text-[11px] relative bottom-[4px]'>*</span></span>}
                </div>
                <div className='relative'>
                  <textarea
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className='peer w-[calc(100%-16px)] h-[120px] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] focus:outline-none bg-[#f2fbfa] resize-none'
                  />
                  {!description && <span className='absolute top-[23px] left-5 text-[#646464]/70 text-[19px] font-semibold pointer-events-none peer-focus:opacity-0'>Message <span className='text-red-500 text-[11px] relative bottom-[4px]'>*</span></span>}
                </div>
                <Flex justify='center' className='mt-8 pb-4'>
                  <button
                    type='submit'
                    disabled={loading}
                    className='bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[10px] w-fit shadow-cardcta'
                  >
                    <h3 className='text-white mx-[22px] my-[11px] text-[20px] md:text-[24px] font-semibold leading-[26px] text-center flex flex-col justify-center'>
                      {loading ? "Envoi en cours..." : "Envoyer"}
                    </h3>
                  </button>
                </Flex>
              </form>
            )}
          </div>
        </Container>
      </Container>
    </NavPage>
  );
}
