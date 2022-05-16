

import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";

const cookiePolicy = ({ categories }) => {
    return (
        <Layout categories={categories}>
            <h1 className="text-3xl my-8 md:my-16 md:text-4xl lg:text-5xl uppercase text-center font-cool z-20 font-semibold">
                COOKIE POLICY
            </h1>
            <div className="mb-14 ">
                <div className="max-w-[50rem] mx-auto">
                    <h1 className="text-2xl text-gray-800 my-8 font-semibold">
                        Lovie Aurora uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                    </h1>
                    <h1 className="text-md text-gray-600  my-8">
                        A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
                    </h1>
                    <div className="flex flex-col my-8">
                        <h1 className="text-2xl z-20 font-semibold">
                            We use the following cookies:
                        </h1>
                        <p className="text-sm my-2 text-gray-500">
                            •	Strictly necessary cookies. These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            •	Analytical or performance cookies. These allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            •	Functionality cookies. These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            •	Targeting cookies. These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.                        </p>
                    </div>
                    <div className="flex flex-col my-8">
                        <h1 className="text-2xl z-20 font-semibold">
                            The cookies enable us to:
                        </h1>
                        <p className="text-sm my-2 text-gray-500">
                            •	Estimate our audience size and usage pattern.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            •	Speed up your searches.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            •	Recognise you when you return to our site.
                        </p>
                        <p className="text-sm my-2 text-gray-500">

                            •	Allow you to use our site in a way that makes your browsing experience more convenient, for example, by allowing you to store items in an electronic shopping basket between visits. If you register with us or complete our online forms, we will use cookies to remember your details during your current visit, and any future visits provided the cookie was not deleted in the interim.
                            Please note that the following third parties may also use cookies, over which we have no control.These named third parties may include, for example, advertising networks and providers of external services like web traffic analysis services.These third party cookies are likely to be analytical cookies or performance cookies or targeting cookies.
                        </p>
                        <p className="text-sm my-2 text-gray-500">

                            •	Google Analysitcs
                            You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies.However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our website. </p>
                        <p className="text-sm my-2 text-gray-500">

                            Except for essential cookies, all cookies will expire after 6 months.
                            This policy is governed by the law of Canada and you can bring legal proceedings in respect of it in the courts of Canada.
                        </p>
                    </div>





                </div>

                {/* CONTACT FORM */}
                <div className="max-w-[40rem] mx-auto">
                    <h3 className="font-cool font-semibold uppercase text-center text-4xl mt-14 mb-10">
                        Still need help?
                    </h3>
                    <ContactForm />
                </div>
            </div >
        </Layout >
    );
};

export default cookiePolicy;

export async function getStaticProps() {
    const api = process.env.NEXT_PUBLIC_API;
    // const categoryRes = await fetch(`${api}/categories`);
    const categoryData = []
    // const categoryData = await categoryRes.json();
    return {
        props: { categories: categoryData },
    };
}
