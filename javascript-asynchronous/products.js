document.getElementById('searchButton').onclick = function cari(){
    let kataKunci = document.getElementById('searchInput').value
    fetch(`https://dummyjson.com/products/search?q=${kataKunci}`)
    .then(res => res.json())
    .then(data =>{
      if (data.products.length == 0) {
        console.log("Data Tidak Ditemukan");
      }else{
        console.log(data);
      }
    })
    .catch(error => {
      console.log(error);
    });
};
