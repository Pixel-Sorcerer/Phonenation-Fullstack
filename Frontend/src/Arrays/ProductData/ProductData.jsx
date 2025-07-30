import Oneplus1 from './Oneplus1.avif';
import Oneplus2 from './Oneplus2.avif';
import Oneplus3 from './Oneplus3.avif';
import Oneplus4 from './Oneplus4.png';
import OneplusBox from './OneplusBox.webp';
import Samsung1 from './Samsung1.avif';
import Samsung2 from './Samsung2.avif';
import Samsung3 from './Samsung3.avif';
import Samsung4 from './Samsung4.png';
import SamsungBox from './SamsungBox.webp';
import Vivo1 from './Vivo1.avif';
import Vivo2 from './Vivo2.avif';
import Vivo3 from './Vivo3.avif';
import Vivo4 from './Vivo4.png';
import VivoBox from './VivoBox.webp';
import Oppo1 from './Oppo1.avif';
import Oppo2 from './Oppo2.avif';
import Oppo3 from './Oppo3.avif';
import Oppo4 from './Oppo4.png';
import OppoBox from './OppoBox.jpg';
import Redmi1 from './Redmi1.avif';
import Redmi2 from './Redmi2.avif';
import Redmi3 from './Redmi3.avif';
import Redmi4 from './Redmi4.png';
import RedmiBox from './RedmiBox.jpg';
import Poco1 from './Poco1.avif';
import Poco2 from './Poco2.avif';
import Poco3 from './Poco3.avif';
import Poco4 from './Poco4.png';
import PocoBox from './PocoBox.jpg';
import Moto1 from './Moto1.avif';
import Moto2 from './Moto2.avif';
import Moto3 from './Moto3.avif';
import Moto4 from './Moto4.png';
import MotoBox from './MotoBox.webp';
import Iphone1 from './Iphone1.avif';
import Iphone2 from './Iphone2.avif';
import Iphone3 from './Iphone3.avif';
import Iphone4 from './Iphone4.png';
import IphoneBox from './IphoneBox.webp';
import Infinix1 from './Infinix1.avif';
import Infinix2 from './Infinix2.avif';
import Infinix3 from './Infinix3.avif';
import Infinix4 from './Infinix4.png';
import InfinixBox from './InfinixBox.jpg';
import Google1 from './Google1.avif';
import Google2 from './Google2.avif';
import Google3 from './Google3.avif';
import Google4 from './Google4.png';
import GoogleBox from './GoogleBox.webp';
import Realme1 from './Realme1.avif';
import Realme2 from './Realme2.avif';
import Realme3 from './Realme3.avif';
import Realme4 from './Realme4.png';
import RealmeBox from './RealmeBox.jpg';
import Iqoo1 from './Iqoo1.avif';
import Iqoo2 from './Iqoo2.avif';
import Iqoo3 from './Iqoo3.avif';
import Iqoo4 from './Iqoo4.png';
import IqooBox from './IqooBox.jpg';




const productData = {
    'oneplus': {
        name: 'OnePlus Nord 4',
        price: '₹29,999',
        images: [
            { id: 1, image: Oneplus1, alt: 'OnePlus Nord 4 front view' },
            { id: 2, image: Oneplus2, alt: 'OnePlus Nord 4 back view' },
            { id: 3, image: Oneplus3, alt: 'OnePlus Nord 4 side view' },
            { id: 4, image: Oneplus4, alt: 'OnePlus Nord 4 specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '8GB+128GB',
                prices: [
                    { platform: 'amazon', price: '₹29,998', link: 'http://surl.li/pbnodm' },
                    { platform: 'croma', price: '₹29,999', link: 'http://surl.li/oorngw' }
                ]
            },
            {
                variant: '8GB+256GB',
                prices: [
                    { platform: 'croma', price: '₹32,999', link: 'https://rb.gy/xmkg5j' },
                    { platform: 'amazon', price: '₹32,999', link: 'https://rb.gy/k0i5xj' },
                    { platform: 'flipkart', price: '₹32,334', link: 'https://shorturl.at/xwfvq' }
                ]
            },
            {
                variant: '12GB+256GB',
                prices: [
                    { platform: 'croma', price: '₹35,999', link: 'https://shorturl.at/6msAa' },
                    { platform: 'amazon', price: '₹35,999', link: 'https://shorturl.at/dBNyQ' },
                    { platform: 'flipkart', price: '₹35,953', link: 'https://shorturl.at/yDU2T' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/8UqbIzC3WOE?si=e4QEvDy91bcwNZ-J",
        boxImage: OneplusBox
    },

    'samsung': {
        name: 'Samsung M35',
        price: '₹29,999',
        images: [
            { id: 1, image: Samsung1, alt: 'Samsung M35 front view' },
            { id: 2, image: Samsung2, alt: 'Samsung M35 back view' },
            { id: 3, image: Samsung3, alt: 'Samsung M35 side view' },
            { id: 4, image: Samsung4, alt: 'Samsung M35 specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '8GB+128GB',
                prices: [
                    { platform: 'amazon', price: '₹18,499', link: 'https://shorturl.at/NZVek' },
                    { platform: 'flipkart', price: '₹15,799', link: 'https://rb.gy/xx30ke' }
                ]
            },
            {
                variant: '8GB+256GB',
                prices: [
                    { platform: 'amazon', price: '₹21,499', link: 'https://shorturl.at/0rLMM' },
                    { platform: 'flipkart', price: '₹18,314', link: 'https://shorturl.at/Zsyp7' }
                ]
            },
            {
                variant: '6GB+128GB',
                prices: [
                    { platform: 'amazon', price: '₹16,999', link: 'https://shorturl.at/2QqDL' },
                    { platform: 'flipkart', price: '₹14,498', link: 'https://shorturl.at/KeGsC' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/MATAXiDIEq8?si=Q3GKuTBTFwXgGNUP",
        boxImage: SamsungBox
    },

    'vivo': {
        name: 'Vivo V40',
        price: '₹34,999',
        images: [
            { id: 1, image: Vivo1, alt: 'Vivo V40 front view' },
            { id: 2, image: Vivo2, alt: 'Vivo V40 back view' },
            { id: 3, image: Vivo3, alt: 'Vivo V40 side view' },
            { id: 4, image: Vivo4, alt: 'Vivo V40 specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '8GB+128GB',
                prices: [
                    { platform: 'croma', price: '₹34,999', link: 'https://short-link.me/12yvB' }
                ]
            },
            {
                variant: '8GB+256GB',
                prices: [
                    { platform: 'croma', price: '₹36,999', link: 'https://short-link.me/16LNy' },
                    { platform: 'flipkart', price: '₹42,998', link: 'https://short-link.me/12ywW' }
                ]
            },
            {
                variant: '12GB+512GB',
                prices: [
                    { platform: 'flipkart', price: '₹42,999', link: 'https://short-link.me/16LOl' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/hq6qXS8yYYE?si=ZA4_JYpiLds60cnY",
        boxImage: VivoBox
    },

    'oppo': {
        name: 'OPPO F25 Pro 5G',
        price: '₹21,999',
        images: [
            { id: 1, image: Oppo1, alt: 'OPPO F25 Pro front view' },
            { id: 2, image: Oppo2, alt: 'OPPO F25 Pro back view' },
            { id: 3, image: Oppo3, alt: 'OPPO F25 Pro side view' },
            { id: 4, image: Oppo4, alt: 'OPPO F25 Pro specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '8GB+128GB',
                prices: [
                    { platform: 'amazon', price: '₹21,999', link: 'https://short-link.me/14L2H' },
                    { platform: 'flipkart', price: '₹19,999', link: 'https://short-link.me/14L32' },
                    { platform: 'croma', price: '₹23,994', link: 'https://short-link.me/194Q8' }
                ]
            },
            {
                variant: '8GB+256GB',
                prices: [
                    { platform: 'amazon', price: '₹28,999', link: 'https://short-link.me/194Qu' },
                    { platform: 'croma', price: '₹25,999', link: 'https://short-link.me/194QQ' }
                ]
            },

        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/ZWAfEcUM7tY?si=uU9CBzqv6G1_wCqF",
        boxImage: OppoBox
    },

    'redmi': {
        name: 'Redmi Note 12 Pro 5G',
        price: '₹16,784',
        images: [
            { id: 1, image: Redmi1, alt: 'Redmi Note 12 Pro front view' },
            { id: 2, image: Redmi2, alt: 'Redmi Note 12 Pro back view' },
            { id: 3, image: Redmi3, alt: 'Redmi Note 12 Pro side view' },
            { id: 4, image: Redmi4, alt: 'Redmi Note 12 Pro specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '6GB+128GB',
                prices: [
                    { platform: 'amazon', price: '₹16,784', link: 'https://short-link.me/16SMF' },
                    { platform: 'croma', price: '₹20,394', link: 'https://short-link.me/16SMR' }
                ]
            },
            {
                variant: '8GB+256GB',
                prices: [
                    { platform: 'amazon', price: '₹21,990', link: 'https://short-link.me/16SNd' },
                    { platform: 'croma', price: '₹20,694', link: 'https://short-link.me/16SNk' }
                ]
            },
            {
                variant: '8GB+128GB',
                prices: [
                    { platform: 'flipkart', price: '₹22,499', link: 'https://short-link.me/12Fj2' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/A_kOwN_aDKg?si=tNNVmuzclMLv0P0I",
        boxImage: RedmiBox
    },

    'poco': {
        name: 'Poco F4 5G',
        price: '₹16,784',
        images: [
            { id: 1, image: Poco1, alt: 'Poco F4 front view' },
            { id: 2, image: Poco2, alt: 'Poco F4 back view' },
            { id: 3, image: Poco3, alt: 'Poco F4 side view' },
            { id: 4, image: Poco4, alt: 'Poco F4 specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '6GB+128GB',
                prices: [
                    { platform: 'flipkart', price: '₹27,999', link: 'https://short-link.me/12Fnl' }
                ]
            },
            {
                variant: '8GB+128GB',
                prices: [
                    { platform: 'amazon', price: '₹17,999', link: 'https://short-link.me/16ST8' }
                ]
            },
            {
                variant: '12GB+256GB',
                prices: [
                    { platform: 'flipkart', price: '₹33,999', link: 'https://short-link.me/16STH' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/nIruCQLxv_M?si=CKesPqj9rUDHFOy_",
        boxImage: PocoBox
    },

    'moto': {
        name: 'Motorola Edge 50 5G',
        price: '₹18,999',
        images: [
            { id: 1, image: Moto1, alt: 'Moto Edge 50 front view' },
            { id: 2, image: Moto2, alt: 'Moto Edge 50 back view' },
            { id: 3, image: Moto3, alt: 'Moto Edge 50 side view' },
            { id: 4, image: Moto4, alt: 'Moto Edge 50 specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '8GB+128GB',
                prices: [
                    { platform: 'flipkart', price: '₹18,999', link: 'https://short-link.me/16W5p' }
                ]
            },
            {
                variant: '8GB+256GB',
                prices: [
                    { platform: 'amazon', price: '₹22,790', link: 'https://short-link.me/12Iut' }
                ]
            },
            {
                variant: '12GB+256GB',
                prices: [
                    { platform: 'flipkart', price: '₹20,999', link: 'https://short-link.me/12IuE' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/Snbzp00Y0Cw?si=_9cWL8u2uEjj0xyX",
        boxImage: MotoBox
    },

    'iphone': {
        name: 'iPhone 15 Pro Max',
        price: '₹99,499',
        images: [
            { id: 1, image: Iphone1, alt: 'iPhone 15 Pro Max front view' },
            { id: 2, image: Iphone2, alt: 'iPhone 15 Pro Max back view' },
            { id: 3, image: Iphone3, alt: 'iPhone 15 Pro Max side view' },
            { id: 4, image: Iphone4, alt: 'iPhone 15 Pro Max specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '256GB',
                prices: [
                    { platform: 'flipkart', price: '₹99,499', link: 'https://short-link.me/16WaC' },
                    { platform: 'croma', price: '₹1,00,000', link: 'https://short-link.me/12IzY' }
                ]
            },
            {
                variant: '512GB',
                prices: [
                    { platform: 'amazon', price: '₹1,54,900', link: 'https://short-link.me/16Wcl' },
                    { platform: 'croma', price: '₹94,994', link: 'https://short-link.me/16Wcz' },
                    { platform: 'flipkart', price: '₹1,04,999', link: 'https://short-link.me/16Wcb' }
                ]
            },
            {
                variant: '1TB',
                prices: [
                    { platform: 'amazon', price: '₹1,74,900', link: 'https://short-link.me/12IC4' },
                    { platform: 'croma', price: '₹1,54,900', link: 'https://short-link.me/12ICD' },
                    { platform: 'flipkart', price: '₹1,08,999', link: 'https://short-link.me/16WdI' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/VsQijXcCcFg?si=RSUtJ_J842--dOyu",
        boxImage: IphoneBox
    },

    'infinix': {
        name: 'Infinix Note 40 Pro 5G',
        price: '₹18,999',
        images: [
            { id: 1, image: Infinix1, alt: 'Infinix Note 40 Pro front view' },
            { id: 2, image: Infinix2, alt: 'Infinix Note 40 Pro back view' },
            { id: 3, image: Infinix3, alt: 'Infinix Note 40 Pro side view' },
            { id: 4, image: Infinix4, alt: 'Infinix Note 40 Pro specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '8GB+256GB',
                prices: [
                    { platform: 'amazon', price: '₹18,999', link: 'https://short-link.me/12Lmw' },
                    { platform: 'flipkart', price: '₹18,999', link: 'https://short-link.me/16Z3U' }
                ]
            },
            {
                variant: '12GB+256GB',
                prices: [
                    { platform: 'amazon', price: '₹22,999', link: 'https://short-link.me/12Ln0' },
                    { platform: 'flipkart', price: '₹20,999', link: 'https://short-link.me/16Z4j' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/Raz2B8U6Z9g?si=lu40F2ApXJ1_NLxJ",
        boxImage: InfinixBox
    },

    'google': {
        name: 'Google Pixel 8 Pro 5G',
        price: '₹59,999',
        images: [
            { id: 1, image: Google1, alt: 'Google Pixel 8 Pro front view' },
            { id: 2, image: Google2, alt: 'Google Pixel 8 Pro back view' },
            { id: 3, image: Google3, alt: 'Google Pixel 8 Pro side view' },
            { id: 4, image: Google4, alt: 'Google Pixel 8 Pro specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '12GB+128GB',
                prices: [
                    { platform: 'flipkart', price: '₹59,999', link: 'https://short-link.me/16ZDG' },
                    { platform: 'croma', price: '₹43,999', link: 'https://short-link.me/12LWs' }
                ]
            },
            {
                variant: '12GB+256GB',
                prices: [
                    { platform: 'flipkart', price: '₹64,999', link: 'https://short-link.me/16ZEG' },
                    { platform: 'croma', price: '₹49,999', link: 'https://short-link.me/16ZEQ' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/P0H0A7or8Kk?si=9cs-VA1Zb_2-rX8j",
        boxImage: GoogleBox
    },

    'realme': {
        name: 'Realme 13 Pro 5G',
        price: '₹21,999',
        images: [
            { id: 1, image: Realme1, alt: 'Realme 13 Pro front view' },
            { id: 2, image: Realme2, alt: 'Realme 13 Pro back view' },
            { id: 3, image: Realme3, alt: 'Realme 13 Pro side view' },
            { id: 4, image: Realme4, alt: 'Realme 13 Pro specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '8GB+128GB',
                prices: [
                    { platform: 'amazon', price: '₹19,838', link: 'https://short-link.me/194wJ' },
                    { platform: 'flipkart', price: '₹21,999', link: 'https://short-link.me/14KKZ' },
                    { platform: 'croma', price: '₹23,994', link: 'https://short-link.me/14KM6' }
                ]
            },
            {
                variant: '8GB+256GB',
                prices: [
                    { platform: 'flipkart', price: '₹23,999', link: 'https://short-link.me/194z4' },
                    { platform: 'croma', price: '₹25,994', link: 'https://short-link.me/14KNC' }
                ]
            },
            {
                variant: '12GB+256GB',
                prices: [
                    { platform: 'flipkart', price: '₹26,999', link: 'https://short-link.me/194EX' },
                    { platform: 'amazon', price: '₹24,999', link: 'https://short-link.me/194F4' },
                    { platform: 'croma', price: '₹27,994', link: 'https://short-link.me/194Fo' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/rqUalm0xwX4?si=Obtd-P-xA1NreIa5",
        boxImage: RealmeBox
    },

    'iqoo': {
        name: 'Iqoo Z9S Pro 5G',
        price: '₹23,190',
        images: [
            { id: 1, image: Iqoo1, alt: 'Iqoo Z9S Pro front view' },
            { id: 2, image: Iqoo2, alt: 'Iqoo Z9S Pro back view' },
            { id: 3, image: Iqoo3, alt: 'Iqoo Z9S Pro side view' },
            { id: 4, image: Iqoo4, alt: 'Iqoo Z9S Pro specs' }
        ],
        features: [
            { text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC, IR Blaster', hasFeature: true },
            { text: 'Snapdragon 7+ Gen3, Octa Core, 2.8 GHz Processor', hasFeature: true },
            { text: '8 GB RAM, 128 GB inbuilt', hasFeature: true },
            { text: '5500 mAh Battery with 100W Fast Charging', hasFeature: true },
            { text: '6.74 inches, 1240 x 2772 px, 120 Hz Display with Punch Hole', hasFeature: true },
            { text: '50 MP + 8 MP Dual Rear & 16 MP Front Camera', hasFeature: true },
            { text: 'Android v14', hasFeature: true },
            { text: 'No FM Radio', hasFeature: false }
        ],
        variants: [
            {
                variant: '8GB+128GB',
                prices: [
                    { platform: 'amazon', price: '₹21,999', link: 'https://short-link.me/1951R' },
                    { platform: 'flipkart', price: '₹23,190', link: 'https://short-link.me/14Lel' }
                ]
            },
            {
                variant: '8GB+256GB',
                prices: [
                    { platform: 'flipkart', price: '₹26,828', link: 'https://short-link.me/1952Y' }
                ]
            },
            {
                variant: '12GB+256GB',
                prices: [
                    { platform: 'amazon', price: '₹25,999', link: 'https://short-link.me/1953r' }
                ]
            }
        ],
        specifications1: [
            { category: 'NETWORK', isHeader: true },
            { label: 'Technology', value: 'GSM/HSPA/LTE/5G' },
            { category: 'LAUNCH', isHeader: true },
            { label: 'Announced', value: '2024, July 16' },
            { label: 'Status', value: 'Available. Released 2024, August 08' },
            { category: 'BODY', isHeader: true },
            { label: 'Dimensions', value: '162.6 x 75 x 8 mm (6.40 x 2.95 x 0.31 in)' },
            { label: 'Weight', value: '199.5 g (7.05 oz)' },
            { label: 'Build', value: 'Glass front, aluminum back, aluminum frame' },
            { label: 'SIM', value: 'Dual SIM (Nano-SIM, dual stand-by)' },
            { label: '', value: 'IP65, waterproof and dustproof' },
            { category: 'DISPLAY', isHeader: true },
            { label: 'Type', value: 'Fluid AMOLED, 1B colors, 120Hz, HDR10+, 2150 nits (peak)' },
            { label: 'Size', value: '6.74 inches, 109.7 cm2 (~90.0% screen-to-body ratio)' },
            { label: 'Resolution', value: '1240 x 2772 pixels, 20:9 ratio (~450 ppi density)' },
            { label: '', value: 'Ultra HDR image support' },
            { category: 'PLATFORM', isHeader: true },
            { label: 'OS', value: 'Android 14, up to 4 major Android upgrades, OxygenOS 14.1' },
            { label: 'Chipset', value: 'Qualcomm SM7675 Snapdragon 7+ Gen 3 (4 nm)' },
            { label: 'CPU', value: 'Octa-core (1x2.8 GHz Cortex-X4 & 4x2.6 GHz Cortex-A720 & 3x1.9 GHz Cortex-A520)' },
            { label: 'GPU', value: 'Adreno 732' },
            { category: 'MAIN CAMERA', isHeader: true },
            { label: 'Dual', value: '50 MP, f/1.8, 25mm (wide), 1/1.95", 0.8µm, PDAF, OIS' },
            { label: '', value: '8 MP, f/2.2, 112˚ (ultrawide), 1/4.0", 1.12µm' },
            { label: 'Features', value: 'Dual-LED flash, HDR, panorama' },
            { label: 'Video', value: '4K@30/60fps, 1080p@30/60/120fps, gyro-EIS' },
            { category: 'TESTS', isHeader: true },
            { label: 'Performance', value: 'AnTuTu: 1315847 (v10)\nGeekBench: 4791 (v6)\n3DMark Wild life: 11597 (offscreen 1440p)' }
        ],
        specifications2: [
            { category: 'SELFIE CAMERA', isHeader: true },
            { label: 'Selfie', value: '16 MP, f/2.4, 24mm (wide), 1.0µm' },
            { label: 'Features', value: 'Panorama' },
            { label: 'Video', value: '1080p@30fps' },
            { category: 'MEMORY', isHeader: true },
            { label: 'Card slot', value: 'No' },
            { label: 'Internal', value: '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 16GB RAM' },
            { label: '', value: 'UFS 3.1 - 128GB only' },
            { label: '', value: 'UFS 4.0' },
            { category: 'SOUND', isHeader: true },
            { label: 'Loudspeaker', value: 'Yes, with stereo speakers' },
            { label: '3.5mm jack', value: 'No' },
            { category: 'COMMS', isHeader: true },
            { label: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct' },
            { label: 'Bluetooth', value: '5.4, A2DP, LE, aptX HD, LHDC' },
            { label: 'Positioning', value: 'GPS, GALILEO, GLONASS, BDS, QZSS' },
            { label: 'NFC', value: 'Yes' },
            { label: 'Infrared port', value: 'Yes' },
            { label: 'Radio', value: 'No' },
            { label: 'USB', value: 'USB Type-C 2.0' },
            { category: 'FEATURES', isHeader: true },
            { label: 'Sensors', value: 'Fingerprint (under display, optical), accelerometer, gyro, proximity, compass' },
            { category: 'BATTERY', isHeader: true },
            { label: 'Type', value: '5500 mAh, non-removable' },
            { label: 'Charging', value: '100W wired, PPS, 100% in 28 min (advertised)' },
            { category: 'MISC', isHeader: true },
            { label: 'Colors', value: 'Obsidian Midnight, Mercurial Silver, Oasis Green' },
            { label: 'Models', value: 'CPH2663' },
            { label: 'SAR', value: '1.18 W/kg (head)     1.06 W/kg (body)' }
        ],
        youtubeVideoId: "https://www.youtube.com/embed/Rr1QVWB8ZRg?si=AgppM98NW3bhJfJg",
        boxImage: IqooBox
    }
};

export default productData;