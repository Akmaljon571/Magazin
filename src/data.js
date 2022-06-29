import { useState } from 'react'

import img1 from './img/chixol_white.png'
import img2 from './img/chixol_yellow.png'
import img3 from './img/chixol_dark.png'
import img4 from './img/naushnik_mini.png'
import img5 from './img/naushnik.png'
import img6 from './img/chixol_1.png'
import img7 from './img/Image(4).png'
import img8 from './img/Image(5).png'
import img9 from './img/Image(6).png'
import useTest from './hooks/useTest'

const { handleLove } = useTest()


export default {
   chixol: 'Чехлы',
   chihollar: [{
            id: 1,
            Image: img1,
            label: 'Стеклянные',
        },{
            id: 2,
            Image: img2,
            label: 'Силиконовые',
        },{
            id: 3,
            Image: img3,
            label: 'Кожаные',
        }],

   naushnik: 'Наушники',
   naushniklar: [{
            id:4,
            isDone: {handleLove} ,
            name: 'Apple BYZ S852I',
            image: img4,
            narx: {
                narx1: '2927 ₸',
                narx2: '3527 ₸',
            },
            foiz: 4.7,
        },{
            id:5,
            isDone: {handleLove} ,
            name: 'Apple EarPods',
            image: img5,
            narx: '2327 ₸',
            foiz: 4.5,
        },{
            id:6,
            isDone: {handleLove} ,
            name: 'Apple EarPods',
            image: img6,
            narx: '2327 ₸',
            foiz: 4.5,
        },{
            id:7,
            isDone: {handleLove} ,
            name: 'Apple BYZ S852I',
            image: img4,
            narx: {
                narx1: '2927 ₸',
                narx2: '3527 ₸',
            },
            foiz: 4.7,
        },{
            id:8,
            isDone: {handleLove} ,
            name: 'Apple EarPods',
            image: img5,
            narx: '6527 KZT',
            foiz: 4.7,
        },{
            id:9,
            isDone: {handleLove} ,
            name: 'Apple EarPods',
            image: img6,
            narx: {
                narx1: '2927 ₸',
                narx2: '3527 ₸',
            },
            foiz: 4.7,
        }],
    podarik: 'Беспроводные наушники',
    podariklar: [{

        id:10,
        isDone: {handleLove} ,
        name: 'Apple AirPods',
        image: img4,
        narx: '9527 ₸',
        foiz: 4.7,
    },{
        id:11,
        isDone: {handleLove} ,
        name: 'GERLAX GH-04',
        image: img5,
        narx: '6527 KZT',
        foiz: 4.7,
    },{
        id:12,
        isDone: {handleLove} ,
        name: 'BOROFONE BO4',
        image: img6,
        narx: '7527 KZT',
        foiz: 4.7,
    }],

}