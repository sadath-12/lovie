import AppLayout from "../../../components/layout/AppLayout";
import Logo from "../../../components/utils/Logo";

export default function orderId({ data, categories, stores }) {

    const widthOfLine = '90%'

    const detailLabel = [
        'Order No.',
        'Recipient Name',
        'Shipping Address',
        'Order Value',
        'Est. Delivery',
    ]
    const detailValue = [
        '#837430832742370',
        'Urban Leung',
        '971 Sherman Brock Cir, Newmarket,ON, Canada, L3X 0G7',
        '$343',
        '3rd-17th, 05, 2022',
    ]
    const dataForShipping = [
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]

    const place = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium.Nobis, laudantium.Nobis, laudantium.'
    return (
        <AppLayout categories={categories}>
            <div className="my-3 md:my-8 max-w-[1320px] mx-auto">
                <div className="flex w-full flex-col items-center">
                    <Logo />
                    <h1 className="my-4 text-xl md:text-2xl  text-center text-coolDarkerGreen  font-semibold">
                        Track your order
                    </h1>
                    <div className="w-full max-w-[1000px] flex w-full flex-col items-center">
                        <div className="max-w-[50rem] w-[90%] md:w-[100%]  relative my-4 bg-gray-300 p-[1.5px] md:p-[3px] ">
                            {/* circle */}
                            <div className={`absolute  top-[-100%] left-0 z-30 rounded-full h-[10px] w-[10px] md:h-[20px] md:w-[20px] bg-${widthOfLine > '0' ? 'coolOrange' : 'gray-400'} w-fit`}></div>
                            {/* circle */}
                            <div className={`absolute  top-[-100%] left-[33.3%] z-30 rounded-full h-[10px] w-[10px] md:h-[20px] md:w-[20px] bg-${widthOfLine >= '33.3%' ? 'coolOrange' : 'gray-400'} w-fit`}></div>
                            {/* circle */}
                            <div className={`absolute  top-[-100%] left-[66.6%] z-30 rounded-full h-[10px] w-[10px] md:h-[20px] md:w-[20px] bg-${widthOfLine >= '66.6%' ? 'coolOrange' : 'gray-400'} w-fit`}></div>
                            {/* circle */}
                            <div className={`absolute  top-[-100%] left-[100%] z-30 rounded-full h-[10px] w-[10px] md:h-[20px] md:w-[20px] bg-${widthOfLine == '100%' ? 'coolOrange' : 'gray-400'} w-fit`}></div>
                            {/* <div className={`absolute top-0 rounded-full bg-coolDarkerGreen p-[3px] z-10 min-w-[${widthOfLine}]`}></div> */}
                            <div className={`absolute top-0 rounded-full bg-coolDarkerGreen p-[1.5px] md:p-[3px] z-10 w-[${widthOfLine}]`}></div>
                        </div>
                        <div className="max-w-[55rem] my-4 text-gray-500 text-sm md:text-md flex items-center text-center justify-between w-full">
                            <p className="text-center">Order Placed</p>
                            <p className="text-center">Prepared</p>
                            <p className="text-center">Shipped</p>
                            <p className="text-center">Delivered</p>
                        </div>

                        <div className="flex flex-col rounded-md shadow-sm border  my-4 p-1 md:p-2 lg:p-6 w-full">
                            {detailValue.map((text, index) => (
                                <div className="flex py-1 w-full">
                                    <p className="text-sm  md:text-lg text-coolDarkerGreen flex-[0.4] md:flex-[0.3] font-semibold">{detailLabel[index]}</p>
                                    <div className="flex-[0.6] md:flex-[0.7] w-full text-sm md:text-lg">{text}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex w-full flex-col">
                            <h1 className="my-2 md:my-4 text-lg md:text-2xl text-coolDarkerGreen  font-semibold">
                                Shipping Status
                            </h1>
                            <div className="flex flex-col rounded-md shadow-sm border  my-2 md:my-4 p-2 lg:p-6 w-full">
                                {dataForShipping.map((cameToHere, index) => (
                                    <div className={`hover:bg-gray-100 cursor-pointer flex py-2 w-full items-start ${dataForShipping[index + 1] != null ? 'border-b' : ''}`}>
                                        <div className="px-2 md:px-4 py-2 flex flex-col justify-center mr-2 md:mr-4">
                                            <div className={`w-[6px] md:w-[10px] h-[6px] md:h-[10px] rotate-45 ${cameToHere ? 'bg-coolBlack' : 'border border-coolBlack'}`}></div>
                                        </div>
                                        <div className="flex-1 flex ">
                                            <p style={{ whiteSpace: 'nowrap' }} className="mr-2 text-sm md:text-lg text-gray-600 md:mr-4 ">
                                                12-04-2022
                                            </p>
                                            <p className="ml-4 hidden md:flex w-full uppercase">
                                                {place.slice(0, 100)}...
                                            </p>
                                            <p className="ml-4 text-sm flex md:hidden w-full uppercase">
                                                {place.slice(0, 50)}...
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}




export const getStaticPaths = async () => {

    const paths = [
        { params: { orderId: '#455633567744' } }
    ]
    return { paths, fallback: 'blocking' };
};
export async function getStaticProps() {
    const api = process.env.NEXT_PUBLIC_API

    const res = await fetch(`https://lovie-test.herokuapp.com/items`);
    const data = await res.json();

    const resC = await fetch(`https://lovie-test.herokuapp.com/categories`);
    const dataC = await resC.json();

    const resS = await fetch(`https://lovie-test.herokuapp.com/stores`);
    const dataS = await resS.json();
    return {
        props: { data: data, categories: dataC, stores: dataS },
    };
}
