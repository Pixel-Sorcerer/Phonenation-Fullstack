// masterData.js

import google from "../Google/GoogleProductPage";
import infinix from '../Infinix/InfinixProductPage';
import mi from '../Mi/MiProductPage';
import poco from '../Poco/PocoProductPage';
import moto from '../Motorola/MotoProductPage';
import oppo from '../Oppo/OppoProductPage';
import iqoo from '../Iqoo/IqooProductPage';
import oneplus from '../Oneplus/OneplusProductPage';
import vivo from '../Vivo/VivoProductPage';
import realme from '../Realme/RealmeProductPage';
import apple from '../Apple/AppleProductPage';
import samsung from '../Samsung/SamsungProductPage';

const masterData = [
    ...apple.map(item => ({ ...item, brand: 'Apple' })),
    ...google.map(item => ({ ...item, brand: 'Google' })),
    ...infinix.map(item => ({ ...item, brand: 'Infinix' })),
    ...iqoo.map(item => ({ ...item, brand: 'IQOO' })),
    ...mi.map(item => ({ ...item, brand: 'Redmi' })),
    ...moto.map(item => ({ ...item, brand: 'Motorola' })),
    ...oneplus.map(item => ({ ...item, brand: 'OnePlus' })),
    ...oppo.map(item => ({ ...item, brand: 'Oppo' })),
    ...poco.map(item => ({ ...item, brand: 'Poco' })),
    ...realme.map(item => ({ ...item, brand: 'Realme' })),
    ...samsung.map(item => ({ ...item, brand: 'Samsung' })),
    ...vivo.map(item => ({ ...item, brand: 'Vivo' }))
];

export default masterData;