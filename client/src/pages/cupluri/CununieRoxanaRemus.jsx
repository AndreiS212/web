import React from 'react';
import Cuplu from "../../components/Cuplu";

const CununieRoxanaRemus = () => {
    const photos = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262022/cc1-5_l7bvjg.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cc1-8_fsdn4s.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cununie1_amizrl.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-6_bzoz8k.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-11_lx8och.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262020/cc1-7_a5kzbp.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/cc1-3_gxc5wo.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/cc1-4_ewnalv.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262018/cc1-2_fy9lsk.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262018/cc1-1_camfa9.jpg'
    ]
    return (
        <Cuplu
            name={"Roxana & Remus"}
            header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-10_sybzec.jpg'}
            videoId={'1087340348'}
            photos={photos}
            thumbnail={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cununie1_amizrl.jpg'}
        />
    );
};

export default CununieRoxanaRemus;
