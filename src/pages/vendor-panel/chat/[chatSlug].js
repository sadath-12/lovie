import React from 'react'
import Chat from '../../../components/Chat/Chat';
import Layout from '../../../components/layout/Layout';

const chatSlug = ({ categories }) => {
    return (
        <Layout categories={categories}>
            <Chat />
        </Layout>
    );
}
export default chatSlug


export const getStaticPaths = async ({ params }) => {
    const users = [
        'someone', 'nick'
    ]
    const paths = [
        { params: { chatSlug: users.find(user => (user === 'nick')) } }
    ]
    return { paths, fallback: 'blocking' };
};

export async function getStaticProps() {
    const api = process.env.NEXT_PUBLIC_API;
    const categoryRes = await fetch(`${api}/categories`);
    // const categoryData = []

    const categoryData = await categoryRes.json();
    return {
        props: { categories: categoryData },

    };
}
