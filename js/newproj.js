$(document).ready(function() {
  $('#example').DataTable(
      
       {     

    "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
      "iDisplayLength": 5
     } 
      );
} );


function checkAll(bx) {
var cbs = document.getElementsByTagName('input');
for(var i=0; i < cbs.length; i++) {
  if(cbs[i].type == 'checkbox') {
    cbs[i].checked = bx.checked;
  }
}
}


$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
});

// --------------------------------
// -------------------------------اظهار المتاااااجر --------------
var ShopeCont=document.getElementById("ShopeCont");
var comments=document.getElementById("comments");

function showShope() {

  ShopeCont.style.display="block";

}
function showCom() {

  comments.style.display="block";

}

// -------------------------------اظهار المتاااااجر --------------



var w=document.getElementById("selectstare") ;
var e=document.getElementById("yes") ;
var n=document.getElementById("no") ;

function opt(){

w.style.backgroundColor="red"
w.style.color="#fff"
}
// -------------------------------  اختييار حالة الطلب -------------

// $("select").change(function(){
//   $(this).removeClass($(this).attr('class'))
//          .addClass($(":selected",this).attr('class')); 
 
// });

var listT=document.querySelectorAll(".status li");

// function listClick() {

//   for (i = 0; i < listT.length; i++) {
   
//       listT[i].style.backgroundColor="#942a90";
//       listT[i].style.color="#fff";
//       listT[i].value="nselec"  
//       }}

// $('.status li').click(function(){
//   $(this).css('color','red');
// });
// $('.status li').click(function(){
//   $(li).removeClass('highlight_stay');
//   $(this).addClass('highlight_stay');
// });

$( ".status li#new" ).click(function() {
  $(this).toggleClass( "selectNew" );
});
$( ".status li#done" ).click(function() {
  $(this).toggleClass( "selectDone" );
});
$( ".status li#onWay" ).click(function() {
  $(this).toggleClass( "selectInWay" );
});
$( ".status li#complet" ).click(function() {
  $(this).toggleClass( "selectComplet" );
});
$( ".status li#reject" ).click(function() {
  $(this).toggleClass( "selectReject" );
});
$( ".status li#rejectTT" ).click(function() {
  $(this).toggleClass( "selectRejectTT" );
});


// ---------------------------------------------

var ddd=document.querySelectorAll(".selectlist");
function ssss() {

  for (i = 0; i < ddd.length; i++) {
    if(ddd[i].value=="done"){
        ddd[i].style.backgroundColor="#942a90";
        ddd[i].style.color="#fff"  
      } 
    else if(ddd[i].value=="new"){
        ddd[i].style.backgroundColor="#e68619";
        ddd[i].style.color="#fff"  
      } 
       else if(ddd[i].value=="inWay"){
        ddd[i].style.backgroundColor="#942a90";
    ddd[i].style.color="#fff" 
  } 
   else if(ddd[i].value=="complet"){
    ddd[i].style.backgroundColor="#32b23f";
    ddd[i].style.color="#fff" 
 
  } 
  else if(ddd[i].value=="reject"){
    ddd[i].style.backgroundColor="#ff3b30";
    ddd[i].style.color="#fff" 
  } 
 else if(ddd[i].value=="Noo"){
  ddd[i].style.backgroundColor="#ff3b30";
    ddd[i].style.color="#fff" 
  } 
    
  }


}

// -------------------------------  اختييار حالة الطلب -------------

// imag
function ImageSetter(input,target) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function (e) {
          target.attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
  }
}

$(".imgInp").change(function(){
var imgDiv=$(this).data('id');  
     imgDiv=$('#' + imgDiv);    
  ImageSetter(this,imgDiv);
});

// Add new input  cites form //

const btn = document.querySelector('.push-to-add');
let counter = 0;

btn.onclick = e => {
  e.preventDefault();
  
  let repeatingField = document.querySelector('.repeating');
  
  let newRepeating = document.createElement('section');
  newRepeating.className = 'repeating';
  
  let repeatingForm = `
  <hr>
  <div class="form-group row" style="">
      
  <label for="inputEmail3" class="col-sm-col-1 form-label">المحافظة</label>
  <div class="col-sm-3"> 
    <input type="email" list="cityy" class="form-control"  id="city${1 + counter}" placeholder="ابحث عن او اختر المحافظة ... " style="max-width: 250px; margin:0px 56px 25px 0px; ">
    <datalist id="cityy" >
      <option> كل المحافظات</option>
      <option> القاهرة</option>
      <option>الاسكندرية</option>
      <option>بنها</option>
      <option>المنوفية</option>
      <option>الغربية</option>
      <option>الصعيد</option>
    </datalist>
  </div>
  <label for="inputEmail3" class="col-sm-col-1 form-label" style="margin-right: 75px;">المدينة</label>
  <div class="col-sm-3"> 
    <input type="email" list="citess" class="form-control" id="cites${1 + counter}" placeholder="ابحث عن او اختر المدينة ... " style="max-width: 250px;">
    <datalist id="citess" >
      <option> كل المدن</option>
      <option> مصر الجديدة</option>
      <option>العاشرة من رمضان</option>
      <option>6 اكتوير</option>
      <option>وسط اليلد</option>
      <option>الغربية</option>
      <option>الاسكندرية</option>
    </datalist>
  </div>
  <label for="inputEmail3" class="col-sm-col-1 form-label">التكلفة</label>
  <div class="col-sm-3"> 
    <input type="email" class="form-control" id="price${1 + counter}" placeholder="اكتب هنا  ... " style="max-width: 300px;">
  </div>
  <label for="inputEmail3" class="col-sm-col-1 form-label">الدفع عند الاستلام</label>
  <div class="col-sm-3"> 
    <input type="email" list="droww" class="form-control" id="drow${1 + counter}" placeholder=" اختر ..." style="max-width: 300px;">
    <datalist id="droww" >
      <option> متوفر</option>
      <option>غير متوفر</option>
    </datalist>
  </div>
  <label for="inputEmail3" class="col-sm-col-1 form-label">التكلفة</label>
  <div class="col-sm-3"> 
    <input type="email" class="form-control" id="priceTwo${1 + counter}" placeholder="اكتب هنا  ... " style="max-width: 300px;">
  </div>
  
  


</div>

      
  `;
  
  newRepeating.innerHTML = repeatingForm;
  btn.previousElementSibling.appendChild(newRepeating);
  
  counter += 1
} 

// ---------------------------- hide show comment ---------------------

// $(document).ready(function() {
//   $('.nav-toggle').click(function(){
//   //get collapse content selector
//   var collapse_content_selector = $(this).attr('href');

//   //make the collapse content to be shown or hide
//   var toggle_switch = $(this);
//   $(collapse_content_selector).toggle(function(){
//     if($(this).css('display')=='none'){
//                             //change the button label to be 'Show'
//     toggle_switch.html('اظهار ');
//     }else{
//                             //change the button label to be 'Hide'
//     toggle_switch.html('اخفاء');
//     }
//   });
//   });

// });


$( "button.nav-toggle" ).click(function() {
  $(this).toggleClass( "selectNew" );
});

$(document).ready(function(){
  $(".hideShow").click(function(){
  $(this).text(function(i, v){
     return v === 'اظهار' ? 'اخفاء' : 'اظهار'
  });
  });
});

// ---------------------------- hide show comment ---------------------

// -------------------------------اظهار المتاااااجر --------------
