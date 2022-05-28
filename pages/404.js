import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function Custom404() {
  return (
    <Layout title='Page Not Found | Othmane Lamnabhi'>
      <section className='bg-custom-light-pattens-blue px-8 pt-8 text-center dark:bg-custom-dark-motorcycle-black'>
        <div className='block'>
          <h1 className='mb-4 font-Montserrat text-7xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one'>
            404
          </h1>
          <p className='font-Montserrat text-base font-normal text-custom-light-shuttle-gray dark:text-custom-dark-gull-gray'>
            Page Not Found
          </p>
          <Link href={"/"}>
            <a className='group mt-5 inline-block rounded-sm bg-custom-light-dodger-blue px-8 py-4 font-bold text-custom-dark-off-by-one duration-300 ease-out hover:scale-105 dark:bg-custom-dark-3-days-ecchymose space-x-1'>
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className='mr-2 duration-200 ease-out group-hover:-translate-x-1'
              />
              <span>Back to Homepage</span>
            </a>
          </Link>
        </div>
        <div className='mt-8 sm:mx-auto sm:w-2/3'>
          <Image
            src='/images/othmane_lamnabhi_headshot_hq_404.png'
            alt='Picture of Othmane Lamnabhi'
            width={2981}
            height={3039}
            layout='responsive'
            priority
            placeholder='empty'
            sizes='50vw'
          />
        </div>
      </section>
    </Layout>
  );
}
