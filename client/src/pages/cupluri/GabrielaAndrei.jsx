import React from 'react';
import Cuplu from "../../components/Cuplu";

const GabrielaAndrei = () => {
    const photos1= ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262039/lovestory1-19.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262037/lovestory1-16_y7fpsf.jpg']
    const photos2= ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262037/lovestory1-16_y7fpsf.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262037/lovestory-1-17_zqsrzs.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262036/lovestory1-10_t6rux6.jpg']
    const photos3= ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262036/lovestory-1-12_emirpr.jpg']
    const photos4= ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262035/lovestory1-9_yenlsw.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262035/lovestory1-12_dlxmc8.jpg']
    const photos5= ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262034/love1-22_rcy1ym.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262033/love1-21_bqzseh.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262033/love1-15_houjab.jpg']
    const photos6= ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262032/love1-20_nsq5ld.jpg']

    // const photos = [
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262031/love1-16_phjcp0.jpg',
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262031/love1-18_tg2lqs.jpg',
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262031/love1-13_xtfnmm.jpg',
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262030/love1-9_bl0rqj.jpg',
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262029/love1-5_gp9kcy.jpg',
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262029/love1-7_e9fcjg.jpg',
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262028/love1-6_j8wc81.jpg',
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262027/love1-3_wfk48x.jpg',
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262026/love1-2_ntnqb5.jpg',
    //     'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262026/love1-4_lqudyr.jpg'
    // ]

    return (
        <Cuplu name={"Gabriela & Andrei"}
               persoana="lor"
               header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262026/love1-2_ntnqb5.jpg'}
               photos1={photos1}
               photos2={photos2}
               photos3={photos3}
               photos4={photos4}
               photos5={photos5}
               photos6={photos6}
        />
    );
};

export default GabrielaAndrei;
