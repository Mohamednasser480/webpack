(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var i;e.g.importScripts&&(i=e.g.location+"");var t=e.g.document;if(!i&&t&&(t.currentScript&&(i=t.currentScript.src),!i)){var r=t.getElementsByTagName("script");r.length&&(i=r[r.length-1].src)}if(!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=i})(),e.p,e.p,e.p;const i={STARTERS:[{title:"Tomato Bruschetta",description:"Tomatoes, Olive Oil, Cheese",price:"$4.00"},{title:"Avocado & Mango Salsa",description:"Avocado, Mango, Tomatoes",price:"$5.00"},{title:"Marinated Grilled Shrimp",description:"Fresh Shrimp, Oive Oil, Tomato Sauce",price:"$7.00"},{title:"Baked Potato Skins",description:"Potatoes, Oil, Garlic",price:"$9.00"},{title:"Maitake Mushroom",description:"Whipped Miso, Yaki Sauce, Sesame",price:"$10.00"},{title:"Lobster Picante",description:"Grilled Corn Elote, Queso Cotija, Chili",price:"$12.00"},{title:"Jambon Iberico",description:"Smoked Tomato Aioli, Idizabal Cheese, Spiced Pine Nuts",price:"$10.00"},{title:"Garlic Baked Cheese",description:"Finnish Squeaky Cheese, Eggplant Conserva, Black Pepper",price:"$12.00"}],"MAIN COURSE":[{title:"Braised Pork Chops",description:"4 bone-in pork chops, olive oil, garlic, onion",price:"$21.00"},{title:"Coconut Fried Chicken",description:"8 chicken pieces, coconut milk, oil",price:"$19.00"},{title:"Chicken with Garlic & Tomatoes",description:"Chicken, cherry tomatoes, olive oil, dry white wine",price:"$15.00"},{title:"Prime Rib",description:"Rib, rosemary, black pepper, red wine",price:"$25.00"},{title:"Sriracha Beef Skewers",description:"Beef, garlic, sesame oil, vinegar",price:"$18.00"},{title:"Crispy Tuna Fregola",description:"Fregola, Baby Arugula Roasted, Green Olives, Pine Nuts",price:"$22.00"},{title:"Charred Lamb Ribs",description:"Za’atar, Turkish BBQ, Sesame Yoghurt",price:"$20.00"}],SOUPS:[{title:"Terrific Turkey Chili",description:"Turkey, oregano, tomato paste, peppers",price:"$10.00"},{title:"Cream of Asparagus Soup",description:"Asparagus, potato, celery, onion, pepper",price:"$12.00"},{title:"Creamy Chicken & Wild Rice Soup",description:"Cooked chicken, salt, butter, heavy cream",price:"$9.00"},{title:"Italian Sausage Tortellini",description:"Cheese tortellini, sausage, garlic, carrots, zucchini",price:"$8.00"},{title:"Italian Sausage Soup",description:"Italian sausage, garlic, carrots, zucchini",price:"$10.00"},{title:"Ham and Potato Soup",description:"Potatoes, ham, celery, onion, milk",price:"$11.00"}],DESSERT:[{title:"Summer Berry and Coconut Tart",description:"Raspberries, blackberries, blueberries, graham cracker",price:"$10.00"},{title:"Double Chocolate Cupcakes",description:"Chocolate, eggs, vanilla, milk",price:"$12.00"},{title:"Pumpkin Cookies Cream Cheese",description:"Pumpkin, sugar, butter, eggs",price:"$10.00"}]};var t=document.querySelector(".my-nav");window.onscroll=function(e){document.body.scrollTop>=280||document.documentElement.scrollTop>=280?(t.style.backgroundColor="#262626",t.style.transition="0.5s all"):t.style.backgroundColor="transparent"};const r=document.querySelectorAll(".menu li");for(let e=0;e<r.length;e++)r[e].addEventListener("click",(e=>{o(e.target.innerText)}));function o(e){const t=document.getElementById("menu-container");let r="";for(let t of i[e])r+=`\n            <div class="menu-item col-md-5 col-sm-10">\n                <div>\n                    <h3>${t.title}</h3>\n                    <p>${t.description}</p>\n                </div>\n                <div>\n                    <p>${t.price}</p>\n                </div>\n            </div>`;t.innerHTML=r}o("STARTERS");const a=document.getElementById("name"),n=document.getElementById("email"),s=document.getElementById("phone"),c=document.getElementById("message"),l=document.getElementById("btn-book");function p(e,i){let t=e.value;return 0==t.length||!1===i.test(t)?(e.classList.add("is-invalid"),e.classList.remove("is-valid"),0):(e.classList.add("is-valid"),e.classList.remove("is-invalid"),1)}a.addEventListener("keyup",(()=>{p(a,/^[a-z A-Z]+$/)})),s.addEventListener("keyup",(()=>{p(s,/^(010|011|012)[0-9]{8}$/)})),n.addEventListener("keyup",(()=>{p(n,/^[a-zA-z][a-zA-Z0-9_.]*@[a-zA-Z]+(\.[a-zA-Z]+)+$/)})),c.addEventListener("keyup",(()=>{0==c.value.length?c.classList.add("is-invalid"):c.classList.remove("is-invalid")})),l.onclick=()=>{let e=!0;e&=p(a,/^[a-z A-Z]+$/),e&=p(n,/^[a-zA-z][a-zA-Z0-9_.]*@[a-zA-Z]+(\.[a-zA-Z]+)+$/),e&=p(s,/^(010|011|012)[0-9]{8}$/),e&=!(0===c.value.length),e&&(confirm(`Hello ${a.value} , your booking is saved successfully `),a.value="",a.classList.remove("is-valid"),n.value="",n.classList.remove("is-valid"),s.value="",s.classList.remove("is-valid"),c.value="",c.classList.remove("is-valid"))}})();