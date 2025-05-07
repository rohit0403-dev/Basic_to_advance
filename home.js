// DATA FETCHING    

// fetch

// 1 -- async await
// 2 - .then .catch
async function getData() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        showdata(data)
    } catch (error) {
        console.log(error.message)
    }
}
getData();

function showdata(productData) {
    const container = document.querySelector(".container");
    productData.forEach((item) => {
        const product = document.createElement("div");
        product.className="product"
        const image = document.createElement("img");
        image.className="product-image"
        image.src = item.image;
        const name = document.createElement("h2");
        name.innerText = item.title
        const price = document.createElement("h4");
        price.innerText = `Rs ${item.price}`;
        const category = document.createElement('p');
        product.append(image,name, category,price)
        container.append(product)

    })
}