import {Layout} from "antd";
import CustomHeader from "../components/CustomHeader";
import React from "react";
import CustomFooter from "../components/CustomFooter";
import DecoratedTitle from "../components/DecoratedTitle";
import PhotoGrid from "../components/PhotoGrid";

const { Content } = Layout;
const Cadre = () => {
    const cadreBotez = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262016/botez1-2.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262016/botez1-3.jpg'
    ]
    const cadreCC1 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262018/cc1-1_camfa9.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262018/cc1-2_fy9lsk.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/cc1-3_gxc5wo.jpg']
    const cadreCC2 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262019/cc1-4_ewnalv.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262022/cc1-5_l7bvjg.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-6_bzoz8k.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262020/cc1-7_a5kzbp.jpg']
    const cadreCC21 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262023/cc1-8_fsdn4s.jpg'
    ]
    const cadreCC3 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-10_sybzec.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262021/cc1-11_lx8och.jpg'
    ]
    const love = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262026/love1-2_ntnqb5.jpg'
    ]
    const love1 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262027/love1-3_wfk48x.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262026/love1-4_lqudyr.jpg'
    ]
    const love2 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262029/love1-5_gp9kcy.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262028/love1-6_j8wc81.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262029/love1-7_e9fcjg.jpg'
    ]
    const love3 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262035/lovestory1-9_yenlsw.jpg'
    ]
    const love4 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262031/love1-13_xtfnmm.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262033/love1-15_houjab.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262031/love1-16_phjcp0.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262031/love1-18_tg2lqs.jpg'
    ]
    const love5 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262032/love1-20_nsq5ld.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262033/love1-21_bqzseh.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262034/love1-22_rcy1ym.jpg'
    ]
    const nunta1 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262039/nunta1-2_m6p3hf.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262040/nunta1-4_syl2po.jpg'
    ]
    const nunta2 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262039/nunta1-5_hn9ow1.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262041/nunta1-6_ttxwxt.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262043/nunta1-7_ch75dp.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262044/nunta1-10_yphh3i.jpg'
    ]
    const nunta3 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262044/nunta2-1_hobrtt.jpg'
    ]
    const nunta4 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262048/nunta2-5_mrw3xo.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262046/nunta2-6_kjanna.jpg'
    ]
    const nunta5 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262047/nunta2-7_mwyw3q.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-8_ibkaxo.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-9_srynvv.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262049/nunta2-10_mdojea.jpg'
    ]
    const nunta6 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262049/nunta2-11_djxrv0.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262050/nunta2-14_dkuala.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262054/nunta2-15_uunwcs.jpg'
    ]
    const nunta7 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262051/nunta3-1_p4zcu7.jpg',
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753262053/nunta3-2_r5toae.jpg'
    ]
    const nunta8 = [
        'https://res.cloudinary.com/dbapyuq1g/image/upload/v1753269895/nunta-13_oynivx.jpg'
    ]

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