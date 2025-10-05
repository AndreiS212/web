import React from 'react';
import Cuplu from "../../components/Cuplu";

const NuntaAndreeaAlin = () => {
    const photos = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262044/nunta1-10_yphh3i.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262043/nunta1-9_hc85kp.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262043/nunta1-7_ch75dp.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262041/nunta1-6_ttxwxt.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262040/nunta1-4_syl2po.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262039/nunta1-5_hn9ow1.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262039/nunta1-2_m6p3hf.jpg',
    ]
    return (
        <Cuplu name={"Andreea & Alin"}
               header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262042/nunta-1-8_zqartn.jpg'}
               videoId={'1095230919'}
               photos={photos}
               thumbnail={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262042/nunta-1-8_zqartn.jpg'}
        />
    );
};

export default NuntaAndreeaAlin;
