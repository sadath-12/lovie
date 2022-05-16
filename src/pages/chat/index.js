import React from 'react'
import Chat from '../../components/Chat/Chat'
import Layout from "../../components/layout/Layout";

const index = ({ categories }) => {
    return (
        <Layout categories={categories}>
            <Chat />
        </Layout>
    );
}
export default index

export async function getStaticProps() {
    const api = process.env.NEXT_PUBLIC_API;
    const categoryRes = await fetch(`${api}/categories`);
    // const categoryData = []
    const categoryData = await categoryRes.json();
    return {
        props: { categories: categoryData },
    };
}
