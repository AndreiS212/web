import React from 'react';
import Cuplu from "../../components/Cuplu";

const NuntaAndreeaAlin = () => {
    const photos1 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262043/nunta1-7_ch75dp.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262042/nunta-1-8_zqartn.jpg']
    const photos2 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262041/nunta1-6_ttxwxt.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262040/nunta1-4_syl2po.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262039/nunta1-5_hn9ow1.jpg']
    const photos3 = []
    const photos4 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262039/nunta1-2_m6p3hf.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262039/nunta1-5_hn9ow1.jpg']
    const photos5 = []
    const photos6 = []
    return (
        <Cuplu name={"Andreea & Alin"}
               header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262043/nunta1-9_hc85kp.jpg'}
               photos1={photos1}
               photos2={photos2}
               photos4={photos4}
        />
    );
};

export default NuntaAndreeaAlin;
