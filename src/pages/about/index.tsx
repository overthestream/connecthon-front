import Layout from '../../layouts/Layout';
import BusinessSchool from './_business';
import DevKor from './_devkor';
import Dijo from './_designer';
import useAutoScroll from '../../hooks/useAutoScroll';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutUs = () => {
    const organizationTab = {
        0: useAutoScroll(),
        1: useAutoScroll(),
        2: useAutoScroll(),
    };
    return (
        <>
            <Head>
                <title>KU HACKATHON</title>
                <link rel="icon" href="/symbol-2d.svg" />
            </Head>
            <Header />
            <div className="flex flex-col justify-center items-center pt-[8rem] bg-ourWhite relative w-[80%] md:pt-[13rem] mx-auto">
                <div className="text-center">
                    <h4 className="font-impact text-sm md:text-3xl ">2022 KU SUMMER HACKATHON's</h4>
                    <h1 className="font-impact text-2xl mt-1 md:text-7xl md:mt-3 ">The Management Team</h1>

                    <div className="mt-[2rem] md:mt-[8rem]">
                        <h3 className="text-md text-[#2087FF] font-semibold tracking-wide md:text-xl">청춘들의 여름 항해를 도울 운영진</h3>
                        <p className="text-[0.6rem] leading-4 mt-5 md:mt-[4rem] md:text-lg">청춘들의 성공적인 여름 항해를 돕기 위한 각 분야의 운영진 입니다.</p>
                        <p className="text-[0.6rem] md:text-lg leading-4 ">청춘들의 성공적인 항해를 진심으로 응원할, 고려대학교 최고의 </p>
                        <p className="text-[0.6rem] md:text-lg leading-4">PLANNER / DEVELOPER / DESIGNER 를 소개합니다.</p>
                    </div>
                    <img src="/organization-bg.svg" alt="organization-background " className="md:w-[45rem] absolute top-[15rem] left-[-6rem] md:top-[60rem] md:left-[-15rem]" />
                    <div className="w-[80%] md:my-[25rem] md:mx-[10rem] lg:mx-[15rem] relative">
                        <img
                            src="/business-org.svg"
                            alt="business-text"
                            className="w-[12rem] md:w-[22rem] absolute top-[4rem] left-[-1rem] md:top-[3rem] md:left-[-12rem] grayscale-[95%] hover:grayscale-0 hover:md:w-[25rem] duration-200"
                            onClick={organizationTab[1].onElement}
                        />
                        <img
                            src="/devkor-org.svg"
                            alt="devkor-text"
                            className="w-[12rem] md:w-[22rem] absolute top-[14rem] left-[5rem] md:top-[15rem] md:left-[12rem] grayscale hover:grayscale-0 hover:md:w-[25rem] duration-200"
                            onClick={organizationTab[0].onElement}
                        />
                        <img
                            src="/designer-org.svg"
                            alt="designer-text"
                            className="w-[13rem] ml-auto mr-0 md:w-[26rem] absolute top-[22rem] left-[-1rem] md:top-[30rem] md:left-[-6rem] grayscale hover:grayscale-0 hover:md:w-[30rem] duration-200"
                            onClick={organizationTab[2].onElement}
                        />
                    </div>
                </div>
                <div className="bg-[#1D1D1D] opacity-85 mt-[50rem] md:mt-[100rem]">
                    <div className="text-center p-1">
                        <h2 className="font-impact text-ourWhite text-2xl mt-[10rem] md:text-3xl ">Who We Are?</h2>
                        <h4 className="mt-3 text-ourWhite md:text-lg">2022 KU SUMMER HACKATHON 운영진 소개</h4>
                    </div>
                    <div className=" md:pb-[20rem]">
                        <div ref={organizationTab[1].element} className="mt-[2rem] pb-[4rem] ml-5 pt-[10rem] md:mt-[9rem] md:pt-[15rem]">
                            <BusinessSchool />
                        </div>
                        <div ref={organizationTab[0].element} className="flex justify-end mr-3 pt-[15rem] md:mt-[20rem] md:pt-[10rem]">
                            <DevKor />
                        </div>
                        <div ref={organizationTab[2].element} className="pt-[15rem] md:mt-[20rem] ml-5 md:pt-[15rem]">
                            <Dijo />
                        </div>
                    </div>
                    <div className="w-[25rem] mx-auto mt-[25rem] md:w-[70%]">
                        <h4 className="text-ourWhite text-[1.1rem] text-center md:text-[1.25rem]">
                            <span className="text-ourWhite font-impact md:text-[1.25rem]">2022 KU SUMMER HACKATHON MANAGEMENT </span>
                            운영진이
                        </h4>
                        <h4 className="text-ourWhite text-center pb-[25rem] text-[1.1rem] md:text-[1.25rem] pt-1"> 청춘들의 성공적인 항해를 진심으로 응원합니다.</h4>
                    </div>
                </div>
            </div>
            <Footer theme="dark" />
        </>
    );
};

export default AboutUs;