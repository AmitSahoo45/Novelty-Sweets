import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Head from 'next/head'
import Image from 'next/image'

import { SweetStoreContext } from '../constants/context/ContextStore'
import { fetchSweets, selectAllSweets } from '../constants/features/sweets/SweetsSlice'

export default function Home({ items, images, ctaImage }) {
  const dispatch = useDispatch();
  const router = useRouter()
  const sweets = useSelector(selectAllSweets)
  const { setSweets } = useContext(SweetStoreContext)
  
  useEffect(() => {
    dispatch(fetchSweets())
    setSweets(sweets)
  }, []);

  return (
    <>
      <Head>
        <title>Home | Novelty Sweets</title>
      </Head>
      <section>
        <section className='flex flex-col py-4 gradient-bg-welcome sm:flex-row'>
          {/* Design the best UI for the landing page of Novelty Sweets */}
          <div className='flex items-center justify-center flex-[1_1_0%]'>
            <Image
              src="/assets/indian-sweet.png"
              alt="Indian sweet from Novelty Sweets in Bhubaneswar, Odisha"
              width={250} height={250} />
          </div>
          <div className='flex-[1_1_0%]'>
            <header>
              <h1 className='UnboundedFont flex flex-col leading-[2.4rem] text-center sm:text-left mt-5'>
                <span className='text-[40px]'>Novelty</span>
                <span className='text-[32px] ml-6'>Sweets</span>
              </h1>
            </header>
            <main className='text-center w-10/12 font-medium PoppinsFont sm:text-left mx-auto-sm'>
              <h2 className='leading-[1.2rem] mt-4 mb-1 text-[15px]'>Your Destination for Delicious and Unique Indian Sweets in Bhubaneswar</h2>
              <p className='leading-[0.8rem]'>
                <span className='text-[10px]'>
                  At Novelty Sweets, we are passionate about bringing the flavors of India to our customers in Bhubaneswar, Odisha. Our family owned business has been in the sweets industry for over 30 years, and we are committed to offering the highest quality Indian sweets in the city. From traditional favorites like gulab jamun and jalebi to more unique options like kulfi and barfi, we have something for everyone to enjoy.
                </span>
              </p>
              <button
                className="button-shopping align-middle mt-4"
                onClick={() => router.push('/products')}
              ><span>Shop</span></button>
            </main>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-red-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Top Selling Sweets</h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {items.map((item, index) => (
                <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                      alt="Indian sweet from Novelty Sweets in Bhubaneswar, Odisha"
                      className="object-cover object-center w-full h-full block"
                      layout='fill'
                    />
                  </div>
                  <h2 className="text-lg title-font text-gray-900 mt-3">{item.attributes.sweetName}</h2>
                  <p className="text-[12px] leading-[1.2rem] text-slate-400 mt-2">{item.attributes.description.substring(0, 70)}...</p>
                  <a onClick={() => router.push(`/sweet/${item.attributes.slug}`)} className="text-red-500 inline-flex items-center mt-1 text-[14px] hover:cursor-pointer">
                    Shop Now
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font gradient-bg-welcome">
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    src={`http://localhost:1337${images[0].attributes.url}`}
                    alt={images[0].attributes.caption}
                    className="object-cover object-center w-full h-full block"
                    width={500}
                    height={400}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    src={`http://localhost:1337${images[1].attributes.url}`}
                    alt={images[1].attributes.caption}
                    className="object-cover object-center w-full h-full block"
                    width={501}
                    height={400}
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <Image
                    src={`http://localhost:1337${images[2].attributes.url}`}
                    alt={images[2].attributes.caption}
                    className="object-cover object-center w-full h-full block"
                    width={601}
                    height={361} />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <Image
                    src={`http://localhost:1337${images[3].attributes.url}`}
                    alt={images[3].attributes.caption}
                    className="object-cover object-center w-full h-full block"
                    width={600}
                    height={410} />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    src={`http://localhost:1337${images[4].attributes.url}`}
                    alt={images[4].attributes.caption}
                    className="object-cover object-center w-full h-full block"
                    width={502}
                    height={302} />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    src={`http://localhost:1337${images[5].attributes.url}`}
                    alt={images[5].attributes.caption}
                    className="object-cover object-center w-full h-full block"
                    width={503}
                    height={303} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                src={`http://localhost:1337${ctaImage.url}`}
                alt={ctaImage.caption}
                height={500}
                width={400}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Anatomy of A Novelty Sweets Shop Mithai
              </h1>
              <p className="mb-8 leading-relaxed">
                Everything made in our shop is a product of love. Every bite is a little bit of the known, the unknown, and a whole lot of magic. We're constantly looking for ways to capture that eye-widening joy that comes from biting into a laddu or squishing a syrupy rasgulla. We're doing it our way by reimagining India's 'sweets' history.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  let pdt = await fetch(`http://localhost:1337/api/landing-page-contents?populate=*`,
    { method: 'GET', headers: { 'Content-Type': 'application/json' } })
  let items = await pdt.json()

  let pit = await fetch(`http://localhost:1337/api/landing-page-image?populate=*`,
    { method: 'GET', headers: { 'Content-Type': 'application/json' } })
  let images = await pit.json()

  let cta = await fetch(`http://localhost:1337/api/landing-page-cta?populate=*`,
    { method: 'GET', headers: { 'Content-Type': 'application/json' } })
  let ctaImage = await cta.json()

  return {
    props: {
      items: items.data,
      images: images.data.attributes.sweetImage.data,
      ctaImage: ctaImage.data.attributes.image.data.attributes
    }
  }
}

{/*                   <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="relative h-48 rounded overflow-hidden">
                      <Image
                        src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                        alt="Indian sweet from Novelty Sweets in Bhubaneswar, Odisha"
                        className="object-cover object-center w-full h-full block"
                        layout='fill'
                      />
                    </div>
                    <h2 className="text-lg title-font text-gray-900 mt-3">{item.attributes.sweetName}</h2>
                    <a onClick={() => router.push(`/sweet/${item.attributes.slug}`)} className="text-red-500 inline-flex items-center mt-1 text-[14px] hover:cursor-pointer">
                      Shop Now
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div> */}