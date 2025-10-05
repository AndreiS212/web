import React from 'react';
import Cuplu from "../../components/Cuplu";

const NuntaRoxanaDragos = () => {
    const photos = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262054/nunta3-6_pwrjaz.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262055/nunta-3-9_ta4v9o.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262055/nunta3-7_cjijci.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta3-2_r5toae.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262051/nunta3-1_p4zcu7.jpg'
    ]
    return (
        <Cuplu name={"Roxana & Dragos"}
               header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262055/nunta-3-9_ta4v9o.jpg'}
               videoId={'1045287269'}
               photos={photos}
               thumbnail={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta-3-3_nczvvm.jpg'}
        />
    );
};

export default NuntaRoxanaDragos;
