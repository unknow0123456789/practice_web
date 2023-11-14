class product{
  constructor(id,name,price,brand,amount,des,imgsrc){
    this.id=id;
    this.name=name;
    this.price=price;
    this.brand=brand;
    this.amount=amount;
    this.des=des;
    this.imgsrc=imgsrc;
  }
}
const div = document.getElementById('container');
var table=document.getElementById('tb_content');
var productlist=[]
div.innerHTML=""
fetch('Tài nguyên BT5-20231111/Products.txt')
  .then(response => response.text())
  .then(data => {
    const extract_data = extract_to_lines(data);
    extract_data.forEach(element => {
      detail=extract_line_detail(element);
      if(detail!=undefined)productlist.push(detail);
      // div.innerHTML += `<div>${element}</div>`;
    });
    console.log(productlist);
    Visualize_products()
  });

function extract_to_lines(rd) {
  var extracted_list = rd.split('\n');
  return extracted_list;
}

function extract_line_detail(line) {
  if(line.includes('|'))
  {
    var details = line.split('|');
    if (details.length < 7) {
    console.log(line)
    throw new Error('Input line does not have the correct format');
    }
    var [id, name, price, brand, amount, des, imgsrc] = details;
    imgsrc = imgsrc.trim();
    var newproduct = new product(id, name, price, brand, amount, des, imgsrc);
    return newproduct;
  }
}

function Visualize_products()
{
  productlist.forEach(element => {
    var newrow=table.insertRow(-1);
    var id_td=newrow.insertCell(0);
    var name_td=newrow.insertCell(1);
    var price_td=newrow.insertCell(2);
    var amount_td=newrow.insertCell(3);
    var brand_td=newrow.insertCell(4);
    var blank_td=newrow.insertCell(5);


    //id
    id_td.innerHTML=element.id;

    //price
    price_td.innerHTML=`<b>${numberWithCommas(element.price)} VNĐ</b>`;
    price_td.style.textAlign="start";
    price_td.style.padding="10px";
    
    //blank
    brand_td.innerHTML=element.brand;
    blank_td.appendChild(createLink(element));
    

    //amount
    amount=element.amount;
    if(amount==0)
    {
      let state=document.createElement('div');
      state.style.fontWeight="bold";
      state.style.color="red";
      state.innerHTML="Hết hàng"
      amount_td.appendChild(state)
    }
    else
    {
      let state=document.createElement('div');
      state.style.fontWeight="bold";
      state.style.color="black";
      state.innerHTML="Còn hàng"
      amount_td.appendChild(state)
    }
    var amount=document.createElement('div');
    amount.style.fontWeight="normal";
    amount.style.color="grey";
    amount.innerHTML="("+element.amount+")";
    amount_td.appendChild(amount);

    //create name row
    var namerow=document.createElement('tr');
    namerow.style.border="none";
    var imgtd=namerow.insertCell(0);
    imgtd.style.border="none";
    var destd=namerow.insertCell(1);
    destd.style.border="none";
    destd.style.verticalAlign='top';
    destd.style.padding='20px';
    var img=document.createElement('img');
    img.src=element.imgsrc;
    img.style.height="150px";
    img.style.width="150px";
    img.style.objectFit='scale-down';
    imgtd.appendChild(img);

    //name
    var name = document.createElement('div');
    name.style.fontWeight='bold';
    name.style.color='red';
    name.style.textAlign='start';
    name.innerHTML=element.name;
    destd.appendChild(name);

    //description
    var des = document.createElement('div');
    des.style.fontWeight='normal';
    des.style.color='black';
    des.innerHTML=element.des;
    des.style.textAlign='start';
    destd.appendChild(des);

    name_td.appendChild(namerow);

  });

}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createLink(product)
{
  if(product.amount!=0)
  {
    var link=document.createElement('a');
    link.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    link.textContent = "Thêm vào giỏ hàng";
    link.target="_blank";
    link.style.color="blue";
    return link;
  }
  else
  {
    return document.createTextNode("Thêm vào giỏ hàng");
  }
}
