//tìm tìm phần tử qua id
const app = document.querySelector("#app");

//hàm để hiện thị dữ liệu (call api)
const show = () => {

       //sử dựng fetch để call api, lấy api bằng cách vào terminal => json-server --watch db.json
      fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data)=> { 
        app.innerHTML = data
        .map((item,index) => {
               return `
                   <tr>
                       <td>${index + 1}</td>
                       <td>${item.name}</td>
                       <td><img src="${item.image}"></td>
                       <td>${item.price}</td>
                       <td>
                          <a href="update-product.html?id=${item.id}"> <button> Update</button> </a>

                          <button class="btn-delete" data-id="${
                            item.id
                          }">Delete</button>
                       </td>
                   </tr>
                   `;
        })
        .join(" ");
        // đoạn này nó dùng app.innerHTML để return 1 cái string về nối chuỗi để hiện thị, nhớ chú ý dấu `` lmao
        //tạo thêm một class cho phần delete button và  data-id"${item.id} để xác định id sản phẩm  
        //"update-product.html?id=${item.id}" lấy id để đưa dữ liệu qua đường dẫn          
      })
      .then(() => {
        //tìm tất cả các phần tử có class btn-delete và cho vào mảng BtnDelete
        const btnDelete = document.querySelectorAll(".btn-delete");
        //thực hiện một vòng lặp để set sự kiện cho tất cả các nút
        // dùng biến btn lưu các đoạn html <button class="btn-delete">Delete</button>
        for(let btn of btnDelete)
        {
            btn.addEventListener("click", ()=>{
                  //element.dataset.key
                  //elemnet là phần tử cần truy cập vào attribute,
                  //dataset dùng để truy cập vào những phần tử có tiền tố data
                  //key xác định sau phần data

                  let id = btn.dataset.id;
                  //trỏ đến phần dữ liệu với id tương ứng và thực hiện xóa
                  fetch("http://localhost:3000/products/" + id, {
                    method:"DELETE",
                  });
            });
        }
      });
       
};

show();