import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <div className='container mx-auto px-4'>
      <Head>
        <title>About Us | Novelty Sweets</title>
      </Head>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Meet our leaders who handle the business
            </p>
          </div>
          <div class="flex flex-wrap -m-4 w-full mx-auto">
            <div class="p-4 w-full sm:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Amit Kumar Sahoo</h2>
                  <h3 class="text-gray-500 mb-3">Founder and CEO</h3>
                </div>
              </div>
            </div>
            <div class="p-4 w-full sm:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Smruti Sanjeet</h2>
                  <h3 class="text-gray-500 mb-3">Co-Founder and Chief Technology Officer(CTO)</h3>
                </div>
              </div>
            </div>
            <div class="p-4 w-full sm:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Shashank Shekhar Raj</h2>
                  <h3 class="text-gray-500 mb-3">Chief Marketing Officer(CMO)</h3>
                </div>
              </div>
            </div>
            <div class="p-4 w-full sm:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Akansha Satpathy</h2>
                  <h3 class="text-gray-500 mb-3">Chief Operating Officer(COO)</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default about