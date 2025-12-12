import React from 'react';
import Cuplu from "../../components/Cuplu";

const NuntaRoxanaDragos = () => {
    const photos1 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262055/nunta-3-9_ta4v9o.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262054/nunta3-6_pwrjaz.jpg']
    const photos2 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta-3-5_sd0kny.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta3-4_cevogz.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta3-2_r5toae.jpg']
    const photos3 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1759669216/nunta3-8_weqbqk.jpg']
    const photos4 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta-3-3_nczvvm.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262051/nunta3-1_p4zcu7.jpg']
    const photos5 = []
    const photos6 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262055/nunta3-7_cjijci.jpg']
    return (
        <Cuplu name={"Roxana & Dragos"}
               header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262055/nunta-3-9_ta4v9o.jpg'}
               photos1={photos1}
               photos2={photos2}
               photos3={photos3}
               photos4={photos4}
               photos6={photos6}
        />
    );
};

export default NuntaRoxanaDragos;
