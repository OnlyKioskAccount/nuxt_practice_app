import vue from 'vue'
import vuex from 'vuex'

// vue.use(vuex)

const config = {
    state:{
        car_list:[
            {
                id:0,
                brand:'Nissan',
                model:'GT-R',
                engine:'Petrol',
                gearbox:'Automatic',
                image:'/gtr.jpeg',
                acceleration:2.7,
                displacement:3.5,
                turbo:'Twin',
                introduction:"The Nissan GT-R is a 2-door 2+2 high performance vehicle produced by Nissan, unveiled in 2007.[2][3][4] It is the successor to the Nissan Skyline GT-R, although no longer part of the Skyline range itself, the name having been given over to the R35 Series and having since left its racing roots.",
                history:"Between 1969 and 1974, and again between 1989 and 2002, Nissan produced a high performance version of its Skyline coupe called the Nissan Skyline GT-R. This car proved to be iconic for Nissan[5][6] and achieved much fame and success on both road and track. The Nissan GT-R, now a standalone model no longer based on the Skyline, has heritage in the Nissan Skyline GT-R. Similar to the later generations of the Skyline GT-R, the GT-R is four-wheel drive with a twin-turbo 6 cylinder engine and has the signature four round tail lights. However, the GT-R is an entirely new model, sharing little with its Skyline siblings and is a complete redesign from previous Skylines, rather than an incremental evolution; the four-wheel-steering HICAS system has been removed and the former straight-6 RB26DETT engine has been replaced with a new V6 VR38DETT.[7] Because of the GT-R's heritage, the chassis code for the all-new version has been called CBA-R35,[8] or 'R35' for short (where CBA is the prefix for emission standard), carrying on the naming trend from previous Skyline GT-R generations. The GT-R has also retained its Skyline predecessor's nickname, Godzilla,[9] given to it by the Australian motoring publication Wheels in its July 1989 edition."
            },
              {
                id:1,
                brand:'Toyota',
                model:'Land Cruiser',
                engine:'Petrol',
                gearbox:'Automatic',
                image:'/landcruiser.jpeg',
                acceleration:6.0,
                displacement:5.7,
                turbo:'No',
                introduction:"The Toyota Land Cruiser (Japanese: トヨタ ランドクルーザー Toyota Rando-kurūzā) is a series of four-wheel drive vehicles produced by the Japanese car maker Toyota. It is Toyota's longest running series.[1]Production of the first generation Land Cruiser began in 1951 (90 units) as Toyota's version of a Jeep-like vehicle.[2][3] The Land Cruiser has been produced in convertible, hardtop, station wagon and cab chassis versions. The Land Cruiser's reliability and longevity has led to huge popularity, especially in Australia where it is the best-selling body-on-frame, four-wheel drive vehicle.[4] Toyota also extensively tests the Land Cruiser in the Australian outback – considered to be one of the toughest operating environments in both temperature and terrain.[5][6][7] In Japan, the Land Cruiser is exclusive to Toyota Japanese dealerships called Toyota Store.",
                history:"When the Imperial Japanese Army occupied the Philippines in 1941 they found an old Bantam Mk II and promptly sent it to Japan. The Japanese military authorities ordered Toyota to produce a similar vehicle but to alter the appearance. The resulting Model AK prototype led to the Yon-Shiki Kogata Kamotsu-Sha (四式小型 貨物 車 type 4 compact cargo-truck). Later in 1941 the Japanese government instructed Toyota to produce a light truck for Japan's military. In 1942, Toyota developed the AK10 prototype by reverse-engineering a Bantam GP . The half-ton truck features an upright front grille, flat front wheel arches that angled down and back like the FJ40, headlights mounted above the wheel arches on either side of the radiator, and a folding windshield. The AK10 is powered by the 2259 cc, 4-cylinder Type C engine from the Toyota Model AE sedan coupled to a three-speed manual transmission and two-speed transfer gearbox. Unlike the U.S. Jeep, few AK10's were ever used and photographs of them in the battlefield are rare. In June 1954, responding to claims of trademark violation by the Willys Company that produced the original Jeep, then Director of Technology Hanji Umehara renamed this 4-wheeled vehicle as the Land Cruiser. The postwar Toyota'Jeep' BJ is completely different from the AK10 and inherits no mechanical parts from it."
              },
              {
                id:2,
                brand:'Honda',
                model:'NSX',
                engine:'Hybrid',
                gearbox:'Automatic',
                image:'/nsx.jpeg',
                acceleration:2.7,
                displacemente:3.5,
                turbo:'Yes',
                introduction:"The Honda NSX, marketed in North America as the Acura NSX, is a two-seat, mid-engine sports car manufactured by Honda/Acura. The origins of the NSX trace back to 1984, with the HP-X (Honda Pininfarina eXperimental)[1] concept, which was a mid-engined 3.0 L V6 engined rear wheel drive sports car. Honda committed to the project, with the intention of meeting or exceeding the performance of the then V8 engined Ferrari range, while offering reliability and a lower price point. The concept thus evolved and had its name changed to NS-X, which stood for 'New', 'Sportscar' 'Unknown world' (the X was a reference to the mathematical symbol X, which stands for an unknown variable), although the production model was launched as the NSX.",
                history:"The NSX was designed by a team led by Chief Designer, Masahito Nakano, and Executive Chief Engineer, Shigeru Uehara. It benefitted from advanced aerodynamics and styling inspired by a F-16 fighter jet cockpit[3] and input from the late Formula One World Champion, Ayrton Senna, during the final development stages. This NSX became the world's first mass-produced car to feature an all-aluminium body. It was powered by an all-aluminium 3.0 L V6 engine, which featured Honda's VTEC (Variable Valve Timing and Lift Electronic Control) system developed in the 1980s, a 5-speed manual transmission or the SportShift 4-speed automatic transmission, which allows the option of conventional automatic shifting or manually shifting with a fingertip control shift lever on the steering column.[4It was presented at the 1989 Chicago Auto Show and was built in a purpose-made factory in Japan, for sale from 1990. It was originally available as a coupé and, from 1995, a targa top. It underwent a performance upgrade in 1997, which saw the arrival of a larger 3.2 L V6 engine,[5] and a facelift in 2002 before being discontinued in 2005. North American models were sold as the Acura NSX."
              },
              {
                id:3,
                brand:'Mazda',
                model:'RX-8',
                engine:'Petrol',
                gearbox:'Manual',
                image:'/rx8.jpeg',
                acceleration:'6.3',
                displacement:'2.0',
                turbo:'No',
                introduction:"The Mazda RX-8 is a sports car manufactured by the Japanese automaker Mazda between 2002 and 2012. It was first shown in 2001 at the North American International Auto Show. It is the successor to the RX-7 and, like its predecessors in the RX range, it is powered by a rotary Wankel engine. The RX-8 began North American sales in the 2003 model yeaMazda announced on August 23, 2011, that the RX-8 was to be discontinued citing the 2012 model as the last line of production. The RX-8 was removed from the European market in 2010 after the car failed to meet emissions standards. Without the volume sales from Europe coupled with rising Yen prices, Mazda could not justify the continued sale of the RX-8 in other markets.",
                history:"Mazda introduced rotary-engined vehicles in the US in 1971, beginning with the R100 and eventually introducing the RX-2, RX-3, RX-4, RX-5, and three generations of the RX-7 sports car. However, due to the lack of conveniences and user-friendliness, coupled with the high price tag and declining interest in sports cars and coupés at the time, Mazda decided to withdraw the RX-7 from most major markets except Japan. After 1995, Mazda suffered from a relatively undistinguished and ordinary product line in the US except for the MX-5 Miata. As popular interest in import tuning and performance cars resurged in the late-1990s due in part to various popular cultural influences, Japanese automakers waded back into the performance and sports car market in the US. In addition, Mazda endeavoured to rejuvenate itself around this time, partially with financial and management assistance from Ford, and successfully developed a new product line of high quality cars with desirable styling and superior driving dynamics compared to their competitors, beginning with the Mazda6 and followed by the Mazda3, paving the way for the arrival of Mazda's next-generation rotary sports car. The RX-8 combined two previous products (the internationally sold RX-7, and the Cosmo which was exclusive to Japan), with the exterior dimensions of the RX-8 to be slightly smaller than those of the Cosmo. Mazda chose not to install the 2.0 L three-rotor 20B-REW, which was discontinued in 1996 when the Cosmo ceased production. In Japan, sales were affected by the fact that the RX-8 did not comply with Japanese Government dimension regulations, and Japanese buyers were liable for yearly taxes for driving a larger car. The rotary engine had financial advantages to Japanese consumers in that the engine displacement remained below 1.5 litres, a significant determination when paying the Japanese annual road tax which kept the obligation affordable to most buyers, while having more power than the traditional inline engines."
              }
        ]
    },
    getters:{},
    mutations:{},
    actions:{}
}

export default function(){
    return new vuex.Store(config)
}