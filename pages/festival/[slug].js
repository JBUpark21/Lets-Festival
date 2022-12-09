import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Slider from 'react-slick';
import Styles from '../../styles/intro.module.css';
import Searchmap from '../../components/Searchmap';
import Roadmap from '../../components/Roadmap';

export default function FestivalScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const festival = data.festivals.find((x) => x.slug === slug);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!festival) {
    return <Layout title="Festival Not Found">Festival Not Found</Layout>;
  }

  return (
    <Layout>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{festival.name}</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <div className="absolute inset-0 h-full w-full object-cover">
                <div className={Styles.intro_main_slide}>
                  <Slider {...settings}>
                    <div className={Styles.intro_main_slideimgbox}>
                      <h3>
                        <img
                          className={Styles.intro_main_slideimg}
                          src={festival.image1}
                        ></img>
                      </h3>
                    </div>
                    <div className={Styles.intro_main_slideimgbox}>
                      <h3>
                        <img
                          className={Styles.intro_main_slideimg}
                          src={festival.image2}
                        ></img>
                      </h3>
                    </div>
                    <div className={Styles.intro_main_slideimgbox}>
                      <h3>
                        <img
                          className={Styles.intro_main_slideimg}
                          src={festival.image3}
                        ></img>
                      </h3>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <div className="overflow-x-auto">
                  <table className="w-full h-full divide-y-2 divide-gray-200 text-sm break-normal">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          기간
                        </td>
                        <td className=" px-4 py-2 text-gray-700">
                          {festival.period}
                        </td>
                      </tr>

                      <tr>
                        <td className=" px-4 py-2 font-medium text-gray-900">
                          주소
                        </td>
                        <td className=" px-4 py-2 text-gray-700">
                          {festival.address}
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          공식 사이트
                        </td>
                        <td className=" px-4 py-2 text-gray-700">
                          <a href={festival.site}>{festival.site}</a>
                        </td>
                      </tr>

                      <tr>
                        <td className=" px-4 py-2 font-medium text-gray-900">
                          문의전화
                        </td>
                        <td className=" px-4 py-2 text-gray-700">
                          {festival.tel}
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 font-medium text-gray-900">
                          설명
                        </td>
                        <td className=" px-4 py-2 text-gray-700">
                          {festival.description}
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          분류
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {festival.tag}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className={Styles.Map_title}>{festival.location} 로드맵</h1>
        <h2 className={Styles.Map_title_a}></h2>
        <div className="border-4 border-orange-400 ring-2 ring-orange-400 rounded-lg">
          <Roadmap></Roadmap>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <div className="absolute inset-0 h-full w-full object-cover">
                <Searchmap></Searchmap>
              </div>
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {festival.restaurant}
              </h2>
              <p className="mt-4 text-gray-600">
                {festival.restaurant} 에 대해서 알려드립니다.
              </p>
              <a
                href={`https://map.kakao.com/link/map/${festival.location},${festival.lat},${festival.lng}`}
                className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <span className="text-sm font-medium">지도 크게보기</span>
                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
