import React from 'react';
import UserData from '../services/Auth';

function Secret() {
    UserData.setRedirect(0);
    console.log(UserData.getRedirect())
    return(
        <div className="css-pattern">
            <div className="flex flex-col items-center text-justify bg-white bg-opacity-25">
                <div className="container px-5 pt-24 pb-12 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Halooo Moms</h1>
                        <p className="w-3/4 mx-auto leading-relaxed text-base">Esmeralda Yeremia Aurelia Tambunan, kalau kau liat ini berarti aku dah cukup berpikir dan berani. Kalau enggak, berarti kependam selamanya wkwkw.</p>
                        <p className="w-3/4 mx-auto leading-relaxed text-base">Aku niat buat gini karena aku gak pande ngomong dan terlalu kreatip wkwkwk.</p>
                    </div>
                </div>
                <p>Bagian pertama</p>
                <div className="w-3/4 mb-12">
                    Maafkan aku yang terlalu banyak mengeluh, ini mungkin sifat kanak-kanakku. 
                    <br></br>
                    Kau udah cukup membantu dengan hanya dengerin keluh kesahku. 
                    <br></br>
                    Kalau beri nasehat, itu itungannya berkat.
                    <br></br>
                    Tapi, kalau kau lagi ada masalah, cerita ke aku.
                    <br></br>
                    Aku tau kau sanggup selesaikan masalahmu sendiri, tapi kau gak bisa selamanya sendiri.
                    <br></br>
                    Aku harap kau gak anggap aku orang asing. Aku bisa ngerasain itu.
                </div>

                <p>Bagian kedua</p>
                <div className="w-3/4 mb-12">
                    Katanya, perempuan pasti udah tau kalau ada yang lagi suka sama dia
                    Kau udah tau belum? Wkwkwk
                    <br></br>
                    Jujur aja, sebelum aku nyampaikan ini, aku berpikir banyak, apa aku udah pantas.
                    <br></br>
                    Tentang: latihan hindari toxic, aku percaya samamu apapun yang kau kerjakan.
                    <br></br>
                    Tentang: tahu diri. Aku sadar, mungkin ada banyak yang dekatin kau sampai sekarang.
                    <br></br>
                    Lalu, aku juga ngerti, saat ini ada banyak hal yang kau harus pikirkan. 
                    Jadi mungkin gak ada waktu untuk hal-hal seperti ini.
                    <br></br>
                    Ketika kau bilang preferensi kerja di Surabaya, itu juga jadi bahan pikiran buatku.
                </div>

                <p>Bagian ketiga</p>
                <div className="w-3/4 mb-12">
                    Aku gak akan pernah menuntut mu untuk ngerubah sifatmu.
                    <br></br> 
                    Bahkan sifatmu yang balas nya lama kali, sampe aku gabisa ngobrolin topik yang ngalir gitu, pun aku terima. Wkwkwk.
                    <br></br>
                    Aku cuma kasih saran yang terbaik, sisanya keputusan dan kesadaranmu.
                    <br></br>
                    Mengenai pekerjaan, ambil aja peluang yang datang samamu. Mau jadi UI/UX, jadi QA, jadi BA/BD, jadi PNS, apapun ku bakal dukung.
                    <br></br>
                    Kejar planmu, lakukan apapun yang kau mau. Aku percaya kau udah punya rencana.
                </div>

                <div className="w-3/4">
                    Semua yang kutulis ini, jujur. Dan aku coba berkomitmen.
                    <br></br>
                    Kali pertama kau ceritain ttg aku ke orang. 
                    Itu buat aku tersanjung.
                    <br></br> 
                    Ada banyak yang aku pengen ceritain ke kau, dan aku pengen dengar ceritamu juga. Latar belakang yang bisa buat perempuan kayak gini.
                    <br></br>
                    Dan aku nth kenapa agak cemburu sejak pertama kau di "rebutin" dimanapun itu, juga waktu lihat ada foto bene di laptopmu wkwkwk. Udah kuceritain ternyata.
                    <br></br> 
                    Aku jatuh cinta samamu.
                    <br></br>
                    Mau kah kau jatuh cinta juga samaku?
                </div>

                <a className="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0" href="https://wa.me/6285155144278?text=Iyaaa%20">Balas</a>

                <div className="w-3/4 mb-12 text-xs mt-12">
                    Jangan malu jawabnya. Kita udah dewasa. 
                    Apapun jawabanmu, aku bakal terima.
                    <br></br> 
                    Aku tetap peduli samamu.
                    <br></br>
                    Tapi tulisan ini nanti aku buat kecil kali wkwkw.
                </div>
            </div>  
        </div>
    )
}


export default Secret