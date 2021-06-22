export const getCatalog = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{id: 1, brand: 'Asus', model: 'M513IA-BQ611 (90NB0RR1-M08960)', price: 500, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/v/i/vivobook_15_x512_product_photo_1g_slate_grey__05_1500x1500_8.jpg'},
                {id: 2, brand: 'Asus', model: 'X515JA-BR080 (90NB0SR1-M12560)', price: 1000, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/a/s/asus_x515jp_1.jpg'},
                {id: 3, brand: 'Asus', model: 'K53U (K53U-E350-S3DNAN) "Refurbished"', price: 850, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/i/m/img1057035787_1_1.jpg'},
                {id: 4, brand: 'Asus', model: 'M570D (M570DD-DS55) "Refurbished"', price: 475, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/a/s/asus_m570d_m570dd-ds55_.jpg'},
                {id: 5, brand: 'Asus', model: 'VivoBook F556UA-AB32 (889349523988) "Refurbished"', price: 650, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/f/e/fe1mcihj0z1.jpg'},
                {id: 6, brand: 'Asus', model: 'TUF Gaming FX504G (0B200-02910000) "Refurbished"', price: 455, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/a/s/asus_tuf_gaming_fx504g_0b200-02910000_.jpg'},
                {id: 7, brand: 'Asus', model: 'Q504U (13NB0BZ2AM0111) "Refurbished"', price: 890, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/a/s/asus_q504u_13nb0bz2am0111__1.jpg'},
                {id: 8, brand: 'Asus', model: 'UX435EA-A5022T (90NB0RS1-M00300)', price: 1200, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/1/8/1866140.jpg'},
                {id: 9, brand: 'Asus', model: 'Strix GL502V (GL502VS-WS71-3) "Refurbished"', price: 700, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/1/_/1_438_16_1_1.jpg'},
                {id: 10, brand: 'Asus', model: 'Chromebook C223NA (C223NA-GJ0006) "Refurbished"', price: 780, imgSrc: 'https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/import/114454035002432.jpg'}]);
        }, 2000);
    });
    return promise;
}
