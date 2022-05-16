import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";


const PrivacyPolicy = ({ categories }) => {
    return (
        <Layout categories={categories}>

            <h1 className="text-3xl my-8 md:my-16 md:text-4xl lg:text-5xl uppercase text-center font-cool z-20 font-semibold">
                PRIVACY POLICY
            </h1>
            <div className="mb-14 ">
                <div className="max-w-[50rem] mx-auto">
                    <h1 className="text-xl mb-8">
                        Lovie Aurora respects your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </h1>
                    <h1 className="text-xl md:text-2xl  uppercase font-cool z-20 font-semibold">
                        1.	IMPORTANT INFORMATION AND WHO WE ARE
                    </h1>
                    <div className="flex flex-col  my-6">
                        <h1 className="text-2xl  z-20 font-semibold">
                            Purpose of this Privacy Policy
                        </h1>
                        <p className="text-sm my-2 text-gray-500">
                            This privacy policy aims to give you information on how we collect and process your personal data through your use of this website, including any data you may provide through this website when you sign up to our newsletter or purchase a product or service.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            This website is not intended for children and we do not knowingly collect data relating to children.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            It is important that you read this privacy policy together with any other privacy policy or fair processing policy we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data. This privacy policy supplements other notices and privacy policies and is not intended to override them.                        </p>

                    </div>
                    <div className="flex flex-col my-6">
                        <h1 className="text-lg md:text-xl z-20 font-semibold">
                            Controller
                        </h1>
                        <p className="text-sm my-2 text-gray-500">
                            We are the controller and responsible for your personal data (collectively referred to as "we", "us" or "our" in this privacy policy).
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            We have appointed a data privacy manager who is responsible for overseeing questions in relation to this privacy policy.                         </p>
                    </div>
                    <div className="flex flex-col my-6">
                        <h1 className="text-lg md:text-xl z-20 font-semibold">
                            Contact Details
                        </h1>
                        <p className="text-sm my-2 text-gray-500">
                            If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager at the email service@lovieaurora.com or use the live chat widget on our website.                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            You have the right to make a complaint at any time to the governing bodies. We would, however, appreciate the chance to deal with your concerns before you approach the governing bodies, so please contact us in the first instance.
                        </p>
                    </div>

                    <div className="flex flex-col my-6 ">
                        <h1 className="text-2xl  z-20 font-semibold">
                            Changes to the Privacy Policy and Your Duty to Inform Us of
                        </h1>

                    </div>
                    <div className="flex flex-col my-6 ">
                        <h1 className="text-lg md:text-xl z-20 font-semibold">
                            Changes
                        </h1>
                        <p className="text-sm my-2 text-gray-500">
                            We keep our privacy policy under regular review.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.
                        </p>
                    </div>
                    <div className="flex flex-col my-6 ">
                        <h1 className=" text-lg md:text-xl z-20 font-semibold">
                            Third-party Links

                        </h1>
                        <p className="text-sm my-2 text-gray-500">
                            This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                        </p>


                    </div>

                    <div className="flex flex-col">

                        <h1 className="my-6 text-xl md:text-2xl  uppercase font-cool z-20 font-semibold">
                            2.	THE DATA WE COLLECT ABOUT YOU
                        </h1>

                        <p className="text-sm my-2 text-gray-500">
                            Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            · Identity Data includes first name, maiden name, last name, username or similar identifier and date of birth.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Contact Data includes billing address, delivery address, email address and telephone numbers.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Financial Data includes bank account and payment card details.                    </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Profile Data includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Usage Data includes information about how you use our website, products and services.

                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
                        </p>
                    </div>
                    <div className="flex flex-col">

                        <h1 className="mt-2 text-lg md:text-xl  z-20 font-semibold">
                            If You Fail to Provide Personal Data

                        </h1>

                        <p className="text-sm my-2 text-gray-500">
                            Where we need to collect personal data by law, or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time.
                        </p>
                    </div>

                    <div className="flex flex-col mt-4">
                        <h1 className="my-6 text-2xl uppercase font-cool z-20 font-semibold">
                            3.	HOW IS YOUR PERSONAL DATA COLLECTED?
                        </h1>
                        <p className="text-md my-2 text-gray-600">
                            We use different methods to collect data from and about you including through:
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Direct interactions. You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you apply for our products or services, create an account on our website or subscribe to our service or publications, contact us.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Automated technologies or interactions. As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Third parties or publicly available sources. We will receive personal data about you from various third parties including the payment processors.
                        </p>

                    </div>

                    <div className="flex flex-col my-6">
                        <h1 className="mt-4 text-2xl uppercase font-cool z-20 font-semibold">
                            4.	HOW WE USE YOUR PERSONAL DATA
                        </h1>
                        <p className="text-md my-2 text-gray-600">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Where we need to perform the contract we are about to enter into or have entered into with you.                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            ·	Where we need to comply with a legal obligation.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
                        </p>
                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            Purposes for Which We Will Use Your Personal Data
                        </h1>
                        <p className="text-md my-2 text-gray-600">
                            We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below.
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            Purpose/Activity	Type of data	Lawful basis for processing including basis of legitimate interest

                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            To register you as a new customer	(a) Identity
                        </p>
                        <p className="text-sm my-2 text-gray-500">
                            (b) Contact	Performance of a contract with you
                        </p>
                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            To process and deliver your order including:
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            (a) Manage payments, fees and charges
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Collect and recover money owed to us	(a) Identity

                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Contact
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (c) Financial
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (d) Transaction
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (e) Marketing and Communications	(a) Performance of a contract with you
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Necessary for our legitimate interests (to recover debts due to us)
                        </p>


                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            To manage our relationship with you which will include:
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            (a) Notifying you about changes to our terms or privacy policy
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Contact
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (c) Profile
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (d) Marketing and Communications	(a) Performance of a contract with you
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Necessary to comply with a legal obligation
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (c) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)
                        </p>

                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            To enable you to partake in a prize draw, competition or complete a survey:
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            (a) Identity
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Contact
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (c) Profile
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (d) Usage
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (e) Marketing and Communications	(a) Performance of a contract with you
                        </p>

                        <p className="text-sm my-1 text-gray-600">
                            (f) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)
                        </p>

                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            (a) Identity
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Contact
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (c) Technical	(a) Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise)
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Necessary to comply with a legal obligation
                        </p>

                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            (a) Identity
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Contact
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (c) Profile
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (d) Usage
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (e) Marketing and Communications
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (f) Technical	Necessary for our legitimate interests (to study how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy)
                            To use data analytics to improve our website, products/services, marketing, customer relationships and experiences	(a) Technical                        </p>

                        <p className="text-sm my-1 text-gray-600">
                            (b) Usage	Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy)
                        </p>


                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            To make suggestions and recommendations to you about goods or services that may be of interest to you
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            (a) Identity
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (b) Contact
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (c) Technical
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (d) Usage
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (e) Profile
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            (f) Marketing and Communications	Necessary for our legitimate interests (to develop our products/services and grow our business)
                        </p>




                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            Promotional Offers From Us
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you (we call this marketing)
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            You will receive marketing communications from us if you have requested information from us or purchased goods from us and you have not opted out of receiving that marketing.
                        </p>
                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            Third-party Marketing
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            We will get your express opt-in consent before we share your personal data with any third party for marketing purposes.                        </p>
                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            Opting Out

                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            You can ask us or third parties to stop sending you marketing messages at any time by following the opt-out links on any marketing message sent to you or by contacting us at any time.
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            Where you opt out of receiving these marketing messages, this will not apply to personal data provided to us as a result of a product/service purchase, warranty registration, product/service experience or other transactions.
                        </p>
                        <h1 className="mt-2 text-lg md:text-xl md:text-2xl  z-20 font-semibold">
                            Cookies
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                        </p>

                        <h1 className="mt-2 text-lg md:text-xl md:text-xl z-20 font-semibold">
                            Change of Purpose

                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.
                        </p>
                    </div>

                    <div className="flex flex-col my-6">
                        <h1 className="mt-4 text-2xl uppercase font-cool z-20 font-semibold">
                            5.	DISCLOSURES OF YOUR PERSONAL DATA

                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            We may share your personal data with the parties set out below for the purposes set out in the table Purposes for which we will use your personal data above.
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
                        </p>

                    </div>

                    <div className="flex flex-col my-6">
                        <h1 className="mt-4 text-2xl uppercase font-cool z-20 font-semibold">
                            6.	INTERNATIONAL TRANSFERS
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            We share your personal data within our payment processors and with the third parties we collaborate with for production and delivery. This will involve transferring your data to other countries.

                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            Many of our external third parties are based at other countries so their processing of your personal data will involve a transfer of data at other jurisdictions.
                        </p>
                        <p className="text-md my-1 text-gray-600">
                            Whenever we transfer your personal data, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            ·	We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data.
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            ·	Where we use certain service providers, we may use specific contracts which give personal data the same protection.
                        </p>


                    </div>

                    <div className="flex flex-col my-6">
                        <h1 className="mt-4 text-2xl uppercase font-cool z-20 font-semibold">
                            7.	DATA SECURITY
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                        </p>
                    </div>

                    <div className="flex flex-col my-6">
                        <h1 className="mt-4 text-2xl uppercase font-cool z-20 font-semibold">
                            8.	DATA RETENTION
                        </h1>
                        <p className="text-md my-1 text-gray-800">
                            How Long Will You Use My Personal Data For?
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            By law we have to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they cease being customers for tax purposes.

                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            In some circumstances you can ask us to delete your data: see your legal rights below for further information.

                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            In some circumstances we will anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.

                        </p>



                    </div>

                    <div className="flex flex-col my-6">
                        <h1 className="mt-4 text-2xl uppercase font-cool z-20 font-semibold">
                            9.	YOUR LEGAL RIGHTS
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data. In particular you have the right to request access, correction or erasure of your personal date, object to processing of your personal data, and the right to withdraw consent.
                        </p>
                        <p className="text-sm my-1 text-gray-600">
                            If you wish to exercise any of the rights set out above, please contact us.
                        </p>
                        <h1 className="mt-2 text-lg md:text-xl  z-20 font-semibold">
                            What We May Need From You
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.                        </p>
                        <h1 className="mt-2 text-lg md:text-xl z-20 font-semibold">
                            Time Limit to Respond
                        </h1>
                        <p className="text-sm my-1 text-gray-600">
                            We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
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
}

export default PrivacyPolicy

export async function getStaticProps() {
    const api = process.env.NEXT_PUBLIC_API;
    // const categoryRes = await fetch(`${api}/categories`);
    const categoryData = []
    // const categoryData = await categoryRes.json();
    return {
        props: { categories: categoryData },
    };
}
