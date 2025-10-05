import React from 'react';
import Cuplu from "../../components/Cuplu";

const BotezVlad = () => {
    const photos = []

    return (
        <Cuplu name={"Vlad"}
               header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/botez1-5.jpg'}
               videoId={'1088465244'}
               photos={photos}
               thumbnail={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/botez1-5.jpg'}
        />
    );
};

export default BotezVlad;
