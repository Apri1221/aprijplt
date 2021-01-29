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
                        <h1 className="sm:text-5xl font-extrabold text-5xl font-medium title-font mb-4 text-gray-900">Halooo Moms</h1>
                        <p className="w-3/4 mx-auto leading-relaxed text-base">Esmeralda Yeremia Aurelia Tambunan, kalau kau liat ini berarti aku dah cukup berpikir dan berani. Kalau enggak, berarti kependam selamanya wkwkw.</p>
                        <p className="w-3/4 mx-auto leading-relaxed text-base">Aku malu samamu nanti diketawai karena terlalu kreatipp wkwkwkwk.</p>
                    </div>
                </div>
                <p className="font-semibold text-xl">Bagian pertama</p>
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
                    Aku berharap aku gak jadi orang asing di hidupmu.
                </div>

                <p className="font-semibold text-xl">Bagian kedua</p>
                <div className="w-3/4 mb-12">
                    Katanya, perempuan pasti udah tau kalau ada yang lagi suka sama dia.
                    Kau udah tau belum? Wkwkwk
                    <br></br>
                    Jujur aja, sebelum aku nyampaikan ini, aku berpikir banyak, apa aku udah pantas buatmu.
                    <br></br>
                    Tentang iman, aku berusaha untuk jadi pribadi yang "betul-betul" mengenal Tuhan. Aku sadar aku kurang mengandalkan dia belakangan ini. Sokbisa sendiri ngehadapi masalah.
                    <br></br>
                    Tentang profesi, aku jalani dulu apa yang ada di depanku. Aku ambil semua kesempatan yang ada. Aku berusaha belajar lebih serius lagi, buat mimpi-mimpiku, Bank Indonesia, atau pemrograman kalau memang profesi ku disini selamanya. 
                    <br></br>
                    Lalu, aku juga ngerti, saat ini mungkin ada banyak hal yang kau harus pikirkan. 
                    Jadi mungkin gak ada waktu untuk mikirin hal-hal kayak gini.
                    <br></br>
                    Ketika kau bilang preferensi kerja di Surabaya, itu juga jadi bahan pikiran buatku.
                </div>

                <p className="font-semibold text-xl">Bagian ketiga</p>
                <div className="w-3/4 mb-12">
                    Aku gak akan pernah menuntut mu untuk ngerubah sifatmu.
                    <br></br> 
                    Bahkan sifatmu yang balas nya lama kali, sampe aku gabisa ngobrolin topik yang ngalir gitu, pun aku terima. Wkwkwk.
                    <br></br>
                    Mudah-mudahan sifatmu ini untuk nguji aku aja yaa wkwkwk.
                    <br></br>
                    Mengenai pekerjaan, ambil aja peluang yang datang samamu. Mau jadi UI/UX, jadi QA, jadi BA/BD, jadi PNS, apapun aku bakal dukung.
                    <br></br>
                    Kejar planmu, lakukan apapun yang kau mau. Aku percaya kau udah punya rencana. Kau cuma perlu tau kalau kau ada dalam doaku.
                </div>

                <div className="w-3/4 mb-12">
                    Ada banyak yang aku pengen ceritain ke kau, dan aku juga pengen dengar ceritamu.
                    <br></br> 
                    Cerita lucu salah satunya; tahun 2012 kau udah punya BB kaan, kalau aku waktu itu masih punya nokia antena biru. Aku diejek teman-temanku pas angkat telfon "Iiihh hapenya gitu" wkwkwkw. Waktu itu aku di sekolah katolik pula, kau taulah gimana wkwkwk.
                    <br></br>
                    Kali pertama kau ceritain ttg aku ke orang. 
                    Itu buat aku tersanjung.
                    <br></br>
                    Dan aku nth kenapa agak cemburu sejak pertama kau di "rebutin" dimanapun itu, juga waktu lihat ada foto bene di laptopmu wkwkwk. Butuh 2 tahun baru ku bilang samamu wkwkwk.
                </div>

                <div className="w-3/4 mb-6">
                    Semua ini udah kupikirkan sebelum aku nyatakan ini ke kau.
                    <br></br>
                    Aku juga udah mulai mikir tentang keluarga. Gimana diterima dikeluargamu, seru-seruan dengan kakak dan abangmu. Becanda dengan mama. Dengar nasehat bapak.
                    <br></br>
                    Tapi itu semua harus dimulai dari kau percaya samaku.
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
                    Aku tetap peduli samamu. Percayaalaah, selama manusia ini hidup, aku perduli samamu.
                    <br></br>
                    Tapi tulisan ini nanti aku buat kecil kali wkwkw.
                </div>

                <div className="overflow-x-hidden">
                    <div className="grid grid-flow-col-dense grid-rows-2 md:grid-cols-2 grid-cols-1 gap-4 my-10">
                        <div className="transform -rotate-6">
                            <div className="px-4"><img className="rounded shadow-xl object-cover w-48" src="https://raw.githubusercontent.com/Apri1221/aprijplt/master/public/foto_1.jpeg" alt=""/></div>
                        </div>
                        <div className="col-start-2 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                            <div className="px-4"><img className="rounded shadow-xl object-cover h-48" src="https://raw.githubusercontent.com/Apri1221/aprijplt/master/public/foto_2.jpeg" alt=""/></div>
                        </div>
                        <div className="transform translate-y-14 translate-x-20">
                            <div className="px-4"><img className="rounded shadow-xl object-cover h-48" src="https://raw.githubusercontent.com/Apri1221/aprijplt/master/public/foto_3.jpeg" alt=""/></div>
                        </div>
                        <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                            <div className="px-4"><img className="rounded shadow-xl object-cover h-48" src="https://raw.githubusercontent.com/Apri1221/aprijplt/master/public/foto_4.jpeg" alt=""/></div>
                        </div>
                    </div>
                </div>

                <figure className="relative p-8 mb-12 bg-red-500 border-r border-opacity-50 border-red-600 rounded-md shadow-md">
                    <div className="text-white text-xl font-bold">
                        <p>Aku ada buat crawling tentang dirimu</p>
                        <p>Alda kecil dulu terinfluence iqbal CJR wkwkwkw</p>
                        <p>Si suka informasi zodiak pisces</p>
                        <p>Dan udah anak Tuhan</p>
                    </div>
                    <p className="text-xs text-white">Semua ini cuma aku, kau sama Tuhan yang tau, diem-diem aja</p>
                </figure>
                <iframe className="mb-12" title="esmeraldaDataSheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROOQDiv5kaOUObA1ZppPfM8gJToyYDvtj4_cBrcj3sxhUihH9eLAhGOUvVriltvYMpcMBBFOtOzf8h/pubhtml?widget=true&amp;headers=false&chrome=true" 
                    style={{"width":"98%", "height":"50vw"}}>
                </iframe>  
            </div>
        </div>
    )
}


export default Secret