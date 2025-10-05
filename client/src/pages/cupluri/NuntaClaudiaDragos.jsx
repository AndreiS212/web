import React from 'react';
import Cuplu from "../../components/Cuplu";

const NuntaClaudiaDragos = () => {
    const photos = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262046/nunta2-4_ldnfyk.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262046/nunta2-6_kjanna.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262047/nunta2-7_mwyw3q.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262048/nunta2-5_mrw3xo.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262049/nunta2-11_djxrv0.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262049/nunta2-10_mdojea.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-9_srynvv.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-8_ibkaxo.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-14_dkuala.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-12_rwycep.jpg'
    ]

    return (
        <Cuplu name={"Claudia & Dragos"}
               header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-14_dkuala.jpg'}
               videoId={'1048483085'}
               photos={photos}
               thumbnail={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262046/nunta2-3_wu7vq8.jpg'}
        />
    );
};

export default NuntaClaudiaDragos;
