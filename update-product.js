//tạo biến lấy id 
const searchParam = new URLSearchParams(document.location.search);
const id = searchParam.get("id");

//tìm đế tất cả input để đổ dữ liệu
const prdName = document.querySelector("#prd-name");
const prdPrice = document.querySelector("#prd-price");
const prdImage = document.querySelector("#prd-image");
const updateForm = document.querySelector("#form-update");

//call api để đổ dữ liệu
fetch("http://localhost:3000/products/" + id)
.then(response => response.json())
.then((data) => {
    //đổ dữ liệu
    prdName.value = data.name;
    prdPrice.value = data.price;
    prdImage.value = data.image;
});

updateForm.addEventListener("submit", () => {
    //tạo object update
    let updateData = {
        name: prdName.value,
        price: prdPrice.value,
        image: prdImage.value,
    };
   //call api cập nhật
   fetch("http://localhost:3000/products/" + id, {
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(updateData)
   }).then(() => (window.location = "./index.html"));
});