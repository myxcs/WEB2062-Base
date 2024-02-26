//tìm đế tất cả input để lấy dữ liệu
const prdName = document.querySelector("#prd-name")
const prdPrice = document.querySelector("#prd-price")
const prdImage = document.querySelector("#prd-image")
const addForm = document.querySelector("#form-add")

//tìm đến form và bắt sự kiện submit
addForm.addEventListener("submit", () => {
    //tạo object để lưu dữ liệu
    let newProduct = {
        name: prdName.value,
        price: prdPrice.value,
        image: prdImage.value,
    };

     //call api và đẩy object
     //chuyển đổi dữ liệu từ object sang json
     fetch("http://localhost:3000/products", {
        method:"POST",
        headers: {
                  "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
     }).then(() => (window.location = "./index.html"));
     //điều hướng về trang chủ
});

