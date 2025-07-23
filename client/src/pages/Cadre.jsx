import {Layout} from "antd";
import CustomHeader from "../components/CustomHeader";
import React from "react";
import CustomFooter from "../components/CustomFooter";
import DecoratedTitle from "../components/DecoratedTitle";
import PhotoGrid from "../components/PhotoGrid";

const { Content } = Layout;
const Cadre = () => {
    const cadreBotez = ['/botez1-2.jpg', '/botez1-3.jpg']
    const cadreCC1 = ['/cc1-1.jpg', '/cc1-2.jpg', '/cc1-3.jpg']
    const cadreCC2 = ['/cc1-4.jpg', '/cc1-5.jpg', '/cc1-6.jpg', '/cc1-7.jpg']
    const cadreCC21 = [ '/cc1-8.jpg']
    const cadreCC3 = ['/cc1-10.jpg', '/cc1-11.jpg']
    const love = ['/love1-2.jpg']
    const love1 = ['/love1-3.jpg', '/love1-4.jpg']
    const love2 = ['/love1-5.jpg', '/love1-6.jpg', '/love1-7.jpg']
    const love3 = ['/love1-9.jpg']
    const love4 = ['/love1-13.jpg', '/love1-15.jpg', '/love1-16.jpg', '/love1-18.jpg']
    const love5 = ['/love1-20.jpg', '/love1-21.jpg', '/love1-22.jpg']
    const nunta1 = ['/nunta1-2.jpg', '/nunta1-4.jpg']
    const nunta2 = ['/nunta1-5.jpg', '/nunta1-6.jpg', '/nunta1-7.jpg', '/nunta1-10.jpg']
    const nunta3 = ['/nunta2-1.jpg']
    const nunta4 = ['/nunta2-5.jpg', '/nunta2-6.jpg']
    const nunta5 = ['/nunta2-7.jpg', '/nunta2-8.jpg', '/nunta2-9.jpg', '/nunta2-10.jpg']
    const nunta6 = ['/nunta2-11.jpg', '/nunta2-14.jpg', '/nunta2-15.jpg']
    const nunta7 = ['/nunta3-1.jpg', '/nunta3-2.jpg']
    const nunta8 = ['/nunta-13.jpg']

    return (
        <Layout style={{ minHeight: "100vh", background: "black" }}>
            <CustomHeader />
            <Content>
                <DecoratedTitle text="Cadre de Film" align="left"/>
                <p style={{
                    color: '#d2b6a2',
                    fontSize: '1.2rem',
                    fontFamily: 'Playfair Display',
                    margin: '16px auto',
                    maxWidth: '90vw',
                    fontStyle: 'italic',
                    textAlign: 'center'
                }}>
                    Fragmente vizuale extrase din filmele noastre de nuntă. Cadre ce surprind emoții autentice, momente delicate și frumusețea unei zile unice.
                </p>
                <PhotoGrid photos={cadreBotez} columns={2}/>
                <PhotoGrid photos={cadreCC1} columns={3}/>
                <PhotoGrid photos={cadreCC2} columns={2}/>
                <PhotoGrid photos={cadreCC21} columns={1}/>
                <PhotoGrid photos={cadreCC3} columns={2}/>
                <PhotoGrid photos={love} columns={1}/>
                <PhotoGrid photos={love1} columns={2}/>
                <PhotoGrid photos={love2} columns={3}/>
                <PhotoGrid photos={love3} columns={1}/>
                <PhotoGrid photos={love4} columns={2}/>
                <PhotoGrid photos={love5} columns={3}/>
                <PhotoGrid photos={nunta1} columns={2}/>
                <PhotoGrid photos={nunta2} columns={2}/>
                <PhotoGrid photos={nunta3} columns={1}/>
                <PhotoGrid photos={nunta4} columns={2}/>
                <PhotoGrid photos={nunta5} columns={2}/>
                <PhotoGrid photos={nunta6} columns={3}/>
                <PhotoGrid photos={nunta7} columns={2}/>
                <PhotoGrid photos={nunta8} columns={1}/>
            </Content>
            <CustomFooter/>
        </Layout>
    )
}
export default Cadre