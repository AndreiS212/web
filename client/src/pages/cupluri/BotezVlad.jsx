import React from 'react';
import Cuplu from "../../components/Cuplu";

const BotezVlad = () => {
    const photos = []

    return (
        <Cuplu name={"Vlad"}
               persoana="lui"
               header={'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/botez1-5.jpg'}
               storyVideoId={'1131360507'}
               storyThumbnail={`https://vumbnail.com/${1131360507}.jpg`}
        />
    );
};

export default BotezVlad;
