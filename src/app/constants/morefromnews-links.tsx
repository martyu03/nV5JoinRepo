import { subtle } from "crypto";
import path from "path";

export const morefromnewsLinks = [
    {
        id: 1,
        title: "Simbang Gabi, patuloy na bahagi ng tradisyon sa Pilipinas tuwing Pasko",
        subTitle: "#ND5Originals | Tuwing bago mag-Pasko, maraming Pilipino ang nagtitipun-tipon sa mga simbahan para sa #SimbangGabi—isang tradisyon ng pananampalataya, na binubuo ng dasal, sakripisyo, at siyempre, masarap na puto bumbong. #News5 | via Cyte Lizardo",
        path: "https://news.tv5.com.ph/more-from-news5/watch/cSi3E48RdIw/simbang-gabi-patuloy-na-bahagi-ng-tradisyon-sa-pilipinas-tuwing-pasko/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4",
        thumbnail: "/images/morefromnews-images/morefromnews1.png",
        datePublishedOn: "December 20, 2024",
        timePublished: "8:31 PM",
        direction: "row",
        toWatch: true,
    },
    {
        id: 2,
        title: "South Korean Pres. Yoon Suk-yeol, idineklarang national emergency ang deepfake sex crimes",
        subTitle: "BABALA: SENSITIBONG PAKSA Nagpahayag si South Korean President #YoonSukyeol ng matinding pagkabahala sa lumalalang kaso ng #deepfake pornography, na madalas na biktima ay kababaihan. Isang #emergency meeting ang ipinatawag upang harapin ang #krisis na ito. #News5",
        path: "https://news.tv5.com.ph/more-from-news5/watch/J27q5adBRZ4/south-korean-pres-yoon-suk-yeol-idineklarang-national-emergency-ang-deepfake-sex-crimes/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4",
        thumbnail: "/images/morefromnews-images/morefromnews2.png",
        datePublishedOn: "August 30, 2024",
        timePublished: "9:31 PM",
        direction: "row",
        toWatch: true,
    },
    {
        id: 3,
        title: "Taeil, pinaalis sa K-pop group na NCT matapos ang alegasyon ng sexual misconduct",
        subTitle: "Inalis si Moon Tae-il o #Taeil bilang miyembro ng kilalang #KPop boy group na #NCT matapos akusahan ng sexual misconduct. Kinumpirma ng SM Entertainment na nakikipagtulungan si Taeil sa mga awtoridad sa imbestigasyon. #News5",
        path: "https://news.tv5.com.ph/more-from-news5/watch/bIvweIUbEBY/taeil-pinaalis-sa-k-pop-group-na-nct-matapos-ang-alegasyon-ng-sexual-misconduct/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4#google_vignette",
        thumbnail: "/images/morefromnews-images/morefromnews3.png",
        datePublishedOn: "August 29, 2024",
        timePublished: "6:27 PM",
        direction: "row",
        toWatch: true,
    },
    {
        id: 4,
        title: "Gerald Santos, ginahasa umano ng musical director noong 15-anyos pa lamang",
        subTitle: "Trigger warning: Panggagahasa ang paksa. Inakusahan ng singer na si #GeraldSantos ang isang musical director ng GMA ng panggagahasa. Sa kanyang testimonya sa Senado ngayong Lunes, August 19, nangyari ito noong siya’y 15-anyos pa lamang noong 2005. #News5",
        path: "https://news.tv5.com.ph/more-from-news5/watch/3fKfL8nqRZE/gerald-santos-ginahasa-umano-ng-musical-director-noong-15-anyos-pa-lamang/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4",
        thumbnail: "/images/morefromnews-images/morefromnews4.png",
        datePublishedOn: "August 19, 2024",
        timePublished: "8:50 PM",
        direction: "row",
        toWatch: true,
    },
    {
        id: 5,
        title: "Mga gabay at paalala ni Master Hanz Cua para sa Ghost Month",
        subTitle: "N5DOriginals | Ngayong #GhostMonth, alamin ang mga dapat at hindi dapat gawin mula kay #MasterHanz Cua para mas lapitan ng suwerte. Paalala niya, hindi dapat katakutan ang Ghost Month. #News5 | via Cyte Lizardo",
        path: "https://news.tv5.com.ph/more-from-news5/watch/5U7ImfTV11c/mga-gabay-at-paalala-ni-master-hanz-cua-para-sa-ghost-month/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4",
        thumbnail: "/images/morefromnews-images/morefromnews5.png",
        datePublishedOn: "August 18, 2024",
        timePublished: "3:58 PM",
        direction: "row",
        toWatch: true,
    },
    {
        id: 6,
        title: "Alert Level 3, itinaas kasunod ng pagputok ng Mt. Kanlaon",
        subTitle: "Itinaas na sa Alert Level 3 ang Mt. #Kanlaon sa Negros Island matapos itong pumutok ngayong Lunes, December 9. Maraming residente na ang lumikas at sinabihang mag-ingat sa mga posibleng lahar at ash fall. #News5",
        path: "https://news.tv5.com.ph/more-from-news5/watch/cNjY7Esw1Lk/alert-level-3-itinaas-kasunod-ng-pagputok-ng-mt-kanlaon/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4",
        thumbnail: "/images/morefromnews-images/morefromnews6.png",
        datePublishedOn: "December 09, 2024",
        timePublished: "11:11 PM",
        direction: "row",
        toWatch: true,
    },
    {
        id: 7,
        title: "Bagyong Shanshan, nagdulot ng malawakang pinsala sa Japan",
        subTitle: "Nag-iwan ng matinding pinsala ang #TyphoonShanshan sa #Japan ngayong Huwebes, August 29. Dahil dito, mahigit limang milyong residente ang pinalikas. Nagdulot din ng bagyo ng baha, landslides, at pagkawala ng kuryente sa daan-daang libong kabahayan. #News5",
        path: "https://news.tv5.com.ph/more-from-news5/watch/R-PP49HfkpA/bagyong-shanshan-nagdulot-ng-malawakang-pinsala-sa-japan/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4#google_vignette",
        thumbnail: "/images/morefromnews-images/morefromnews7.png",
        datePublishedOn: "August 29, 2024",
        timePublished: "10:17 PM",
        direction: "row",
        toWatch: true,
    }, 
    {
        id: 8,
        title: "Pagbuga ng vog ng Taal Volcano, nagdulot ng kanselasyon ng klase sa Calabarzon",
        subTitle: "Dahil sa patuloy na pagbuga ng #vog ng #TaalVolcano, kinansela ang mga klase sa #Calabarzon ngayong Lunes, August 19. Pinayuhan din ang mga residente na magsuot ng face mask habang patuloy na minamanmanan ng mga awtoridad ang bulkan. #News5",
        path: "https://news.tv5.com.ph/more-from-news5/watch/zSjitEtmyso/pagbuga-ng-vog-ng-taal-volcano-nagdulot-ng-kanselasyon-ng-klase-sa-calabarzon/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4",
        thumbnail: "/images/morefromnews-images/morefromnews8.png",
        datePublishedOn: "August 19, 2024",
        timePublished: "11:28 PM",
        direction: "row",
        toWatch: true,
    }, 
    {
        id: 9,
        title: "Dating US congressman, inaasahang aamin na sa mga kaso ng panloloko",
        subTitle: "Haharapin ng dating congressman sa Estados Unidos na si #GeorgeSantos ang kanyang mga kasong panloloko sa federal court para sa kanyang huling plea deal. Inaasahan siyang umamin sa mga kasalanan.",
        path: "https://news.tv5.com.ph/more-from-news5/watch/mQCNL6Us6WY/dating-us-congressman-inaasahang-aamin-na-sa-mga-kaso-ng-panloloko/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4#google_vignette",
        thumbnail: "/images/morefromnews-images/morefromnews9.png",
        datePublishedOn: "August 19, 2024",
        timePublished: "4:21 PM",
        direction: "row",
        toWatch: true,
    }, 
    {
        id: 10,
        title: "Lima, kinasuhan matapos ang pagkamatay ng aktor na si Matthew Perry dahil sa ketamine",
        subTitle: "Limang indibidwal ang kinasuhan, kabilang ang dalawang doktor at ang personal maid ni #MatthewPerry, dahil sa umano'y pagkakasangkot nila sa pagkamatay ng aktor noong October. Si Perry ay namatay mula sa overdose sa ketamine. #News5",
        path: "https://news.tv5.com.ph/more-from-news5/watch/F4-LCGiKj84/lima-kinasuhan-matapos-ang-pagkamatay-ng-aktor-na-si-matthew-perry-dahil-sa-ketamine/PL5HOfFlVmenaAeYkMBe8ebWPi9ppQksX4",
        thumbnail: "/images/morefromnews-images/morefromnews10.png",
        datePublishedOn: "August 16, 2024",
        timePublished: "10:55 PM",
        direction: "row",
        toWatch: true,
    } 
]
