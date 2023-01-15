const storeProducts = [
    {
            name_prefix:"Смартфон",
            full_name:"Apple iPhone 11 64GB Воcстановленный by Breezy, грейд B (черный)",
            description:"Apple iOS, экран 6.1&quot; IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM, влагозащита IP68",
            images: "https://content2.onliner.by/catalog/device/header/a420c9afcafa0e8a15a73fd24b8a880e.jpeg",
            prices:'550$',
            brend: 'Apple',          
            id:3583357,     
            key:"appl2bmwlt2",
           
        },

        {
            name_prefix:  "Смартфон",
            full_name:  "Apple iPhone XR 64GB Воcстановленный by Breezy, грейд B (коралловый)",
            description:  "Apple iOS, экран 6.1&quot; IPS (828x1792), Apple A12 Bionic, ОЗУ 3 ГБ, память 64 ГБ, камера 12 Мп, аккумулятор 2942 мАч, 1 SIM, влагозащита IP67",
            images:  "https://content2.onliner.by/catalog/device/header/bc4d2978ae1dd3495c263c70b3274a6f.jpeg",
            prices: '400$',
            brend: 'Apple',      
            id: 3583373,     
            key: "appl2bmry82",
           
        },
        {
            name_prefix:  "Смартфон",
            full_name: "Apple iPhone 14 Pro 128GB (космический черный)",
            description: "Apple iOS, экран 6.1&quot; OLED (1179x2556) 120 Гц, Apple A16 Bionic, ОЗУ 6 ГБ, память 128 ГБ, камера 48 Мп, 1 SIM, влагозащита IP68",
            images:  "https://content2.onliner.by/catalog/device/header/ad1fd08115cc6e1b4c289d580d79b406.jpeg",
            prices: "1800$",
            brend: 'Apple',         
            id:3537409,     
            key:"iphone14pro"
           
        },

        {
            name_prefix:  "Смартфон",
            full_name: "Samsung Galaxy A52 SM-A525F/DS 4GB/128GB (черный)",
            description: "Android, экран 6.5&quot; AMOLED (1080x2400) 90 Гц, Qualcomm Snapdragon 720G, ОЗУ 4 ГБ, память 128 ГБ, поддержка карт памяти, камера 64 Мп, аккумулятор 4500 мАч, 2 SIM, влагозащита IP67",
            images:  "https://content2.onliner.by/catalog/device/header/0bde71a90a551c172c6a9e290d1cdbed.jpeg",
            prices: "385$",
            brend: 'Samsung',          
            id: 75365485,     
            key:"sma525fzkdser",
           
        },

        {
            name_prefix:  "Смартфон",
            full_name: "Samsung Galaxy S22 5G SM-S901B/DS 8GB/128GB (черный фантом)",
            description: "Android, экран 6.1&quot; AMOLED (1080x2340) 120 Гц, Exynos 2200, ОЗУ 8 ГБ, память 128 ГБ, камера 50 Мп, аккумулятор 3700 мАч, 2 SIM, влагозащита IP68",
            images:  "https://content2.onliner.by/catalog/device/header/46b80765092dd70750fe70651e868431.jpeg",
            prices: "1670$",
            brend: 'Samsung',           
            id: 63512578,     
            key:"sms901bzkdser",
           
        },

        {
            name_prefix:  "Смартфон",
            full_name: "Samsung Galaxy A53 5G SM-A536B/DS 6GB/128GB (черный)",
            description: "Android, экран 6.5&quot; AMOLED (1080x2400) 120 Гц, Exynos 1280, ОЗУ 6 ГБ, память 128 ГБ, поддержка карт памяти, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM, влагозащита IP67",
            images:  "https://content2.onliner.by/catalog/device/header/839669db60526827a99ce044a6f94924.jpeg",
            prices: "480$",
            brend: 'Samsung',    
            id: 3255455,     
            key: "sma536bzkneue",
           
        },

        {
            name_prefix: "Ноутбук",
            full_name: "Apple Macbook Air 13\" M1 2020 MGN63",
            description: "13.3\" 2560 x 1600 IPS 60 Гц, несенсорный, Apple M1 3200 МГц, 8 ГБ, SSD 256 ГБ, видеокарта встроенная, Mac OS, цвет крышки серый",
            images:  "https://content2.onliner.by/catalog/device/header/9a08e5f5400e508fb975bf697669c2b5.jpeg",
            prices: "1800$",
            brend: 'Apple',        
            id: 2049323,     
            key: "mgn63",
           
        },

        {
            name_prefix:   "Ноутбук",
            full_name: "Ноутбук Apple Macbook Pro 14 M1 Pro 2021 MKGR3",
            description: "14.2 3024 x 1964 IPS 120 Гц, несенсорный, Apple M1 Pro (8 ядер), 16 ГБ, SSD 512 ГБ, видеокарта встроенная, Mac OS, цвет крышки серебристый",
            images:  "https://content2.onliner.by/catalog/device/main/7ffbc4e8b70aa4263e474e740db26077.jpeg",
            prices: "2000$",
            brend: 'Apple',       
            id: 98788532,     
            key: "ajsdbfjabdskjf",
           
        },


        {
            name_prefix:   "Ноутбук",
            full_name: "Ноутбук Dell Vostro 15 3515-284695",
            description: "15.6 1920 x 1080 IPS 60 Гц, несенсорный, AMD Ryzen 5 3450U 2100 МГц, 16 ГБ DDR4, SSD 512 ГБ, видеокарта встроенная, Linux, цвет крышки темно-серый",
            images:  "https://content2.onliner.by/catalog/device/header/5805347beb50b6e06077f22a5ec92f64.jpeg",
            prices: "950$",
            brend: 'Dell',       
            id: 85463279,     
            key: "sdfasdfasdfas",
           
        },


        {
            name_prefix:   "Ноутбук",
            full_name: "Игровой ноутбук Dell Alienware x15 R1 X15-9932",
            description: "15.6 1920 x 1080 IPS 165 Гц, несенсорный, Intel Core i7 11800H 2300 МГц, 16 ГБ DDR4, SSD 512 ГБ, видеокарта NVIDIA GeForce RTX 3070 8 ГБ, Windows 10, цвет крышки светло-серый",
            images:  "https://content2.onliner.by/catalog/device/header/93b51dd870cab33ede701b2c391f89f6.jpeg",
            prices: "2700$",
            brend: 'Dell',         
            id: 1834567,     
            key: "asdasdasda",
           
        },
]
let body = document.querySelector('body');
let main = document.createElement ('div');
main.classList.add('main');



function createCard(arr){
    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement ('div');
        div.classList.add('card');
        div.style.width = '18rem';
    
        let img1 = document.createElement('img');
        img1.classList.add('card-img-top');
        img1.alt = 'img1';
    
        let innerdiv = document.createElement('div');
        innerdiv.classList.add('card-body');
    
        let title1 = document.createElement('h5');
        title1.classList.add('card-title');
    
        let text1 = document.createElement('p');
        text1.classList.add('card-text');
    
        let price1 = document.createElement('p');
        price1.classList.add('price');
    
        let name = document.createElement('p');
        name.classList.add('invis');
    
        img1.src = arr[i].images;
        title1.innerText = arr[i].full_name;
        text1.innerText =  arr[i].description;
        price1.innerText =  arr[i].prices;
        name.innerText = arr[i].name_prefix;
     
        body.append(main);
        main.append(div);
        div.append(img1);
        div.append(innerdiv);
        innerdiv.append(title1);
        innerdiv.append(text1);
        innerdiv.append(price1);
        innerdiv.append(name);
    
    }
}
createCard(storeProducts);


search.onclick = function() {
    let arr = [];
    if (document.getElementById('ph').checked) { //filter
        let arr1 = storeProducts.filter(item => item.name_prefix == 'Смартфон');
        main.innerHTML = '';
        arr = [...arr, ...arr1];
    }
    if (document.getElementById('lap').checked) { //filter
        main.innerHTML = '';
        let arr1 = storeProducts.filter(item => item.name_prefix == 'Ноутбук');
        arr = [...arr, ...arr1];
    }


    if (document.getElementById('dell').checked) { //filter
        main.innerHTML = '';
        let arr1 = storeProducts.filter(item => item.brend == 'Dell');
        arr = [...arr, ...arr1];
    }
    if (document.getElementById('apple').checked) { //filter
        main.innerHTML = '';
        let arr1 = storeProducts.filter(item => item.brend == 'Apple');
        arr = [...arr, ...arr1];
    }
    if (document.getElementById('samsung').checked) { //filter
        main.innerHTML = '';
        let arr1 = storeProducts.filter(item => item.brend == 'Samsung');
        arr = [...arr, ...arr1];
    }
    createCard(arr);
}





