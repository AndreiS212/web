import React from 'react';
import Cuplu from "../../components/Cuplu";

const CununieRoxanaRemus = () => {
    const photos1 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-6_bzoz8k.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/cc1-4_ewnalv.jpg' ]
    const photos2 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262018/cc1-1_camfa9.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cc1-8_fsdn4s.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cununie1_amizrl.jpg']
    const photos3 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262022/cc1-5_l7bvjg.jpg']
    const photos4 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-11_lx8och.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/cc1-3_gxc5wo.jpg']
    const photos5 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-10_sybzec.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cununie1_amizrl.jpg', 'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262018/cc1-2_fy9lsk.jpg']
    const photos6 = ['https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262022/cc1-5_l7bvjg.jpg']
    return (
        <Cuplu
            name={"Roxana & Remus"}
            persoana="lor"
            header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-10_sybzec.jpg'}
            storyVideoId={'1124747422'}
            fullVideoId={'1087340348'}
            storyThumbnail={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262020/cc1-7_a5kzbp.jpg'}
            fullThumbnail={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cununie1_amizrl.jpg'}
            photos1={photos1}
            photos2={photos2}
            photos3={photos3}
            photos4={photos4}
            photos5={photos5}
            photos6={photos6}
        />
    );
};

export default CununieRoxanaRemus;
