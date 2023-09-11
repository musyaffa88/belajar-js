const menus = [
    {
        nama : "Nasi Pecel", 
        harga : 12000
    },
    {
        nama : "Nasi Campur", 
        harga : 15000
    },
    {
        nama : "Bakso", 
        harga : 10000
    },
    {
        nama : "Mie Ayam", 
        harga : 10000
    },
];

let menu = menus.filter(menu => menu.harga > 10000);
console.log(menu.nama);

let namaMenu = [];
for (let index = 0; index < menu.length; index++) {
    namaMenu[index] = menu[index].nama;
}
console.log(namaMenu);

