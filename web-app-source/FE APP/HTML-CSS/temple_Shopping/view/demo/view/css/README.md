nếu có dấu chám thì nó sẽ gọi class của tag
nếu không có dấu chấm nó sẽ gọi thẳng tag html nhưng phải dúng tên tag
///////////////////////////CSS-JS-STYLE-CONFIG//////////////////////////////
dùng querySelector && querySelectorAll để gọi tới tag html 
có thể gắn thêm id cho tag để config riêng


///////////////////////CSS/////////////////////////////////
<body>
    <div class="body-header">
</body>

/////////////////////// attributes/////////////////////////////////
margin - border - padding - content

padding = background for content


margin: đem cả border căn chỉnh lề bên trong element cha chứa border cần margin || càng to => viền(border) to + nội dung trong border vẫn giữ nguyên => chứa được nhiều nội dung
margin thu nhỏ border + padding area + không thu nhỏ  content
VD:  .body-header{
    margin: 80% 
} => to gần bằng body


border: coi nó là viền của nội dung || càng to => viền(border) to + nội dung(nằm trong border) nhỏ
border thu nhỏ padding area + không thu nhỏ content 

pađding: căn chỉnh nội dung bên trong border => cho phép content di chuyển trong borber/padding area

///////////////////////padding-heigh-width/////////////////////////////////
padding: khi padding tang => heigh va width tang chung = 
heigh: khi heigh tang => (padding top + padding bottom) tang <=> width giu nguyen ==>  (padding left + padding right) giu nguyen
width: khi width tang => (padding left + padding right) tang <=> width giu nguyen ==>  (padding top + padding bottom) giu nguyen

/////////////////////// position /////////////////////////////////

{position: relative} = đặt hệ tọa độ
{position: absolute} = di chuyển tự do trong hệ tọa độ đó
VD:
.box{
    position: relative;
    width: 300px;
    height: 200px;
    border: 3px solid black;
}

img{
    position: absolute;
    top: 0;
    left: 0;
}

.box đã là “mốc”.
img sẽ nằm ở góc trên trái của .box
img trồi lên box

/////////////////////// overflow /////////////////////////////////

overflow: visible → cho phép ảnh tràn ra ngoài div

/////////////////////// inset-inline /////////////////////////////////

inset-inline-start vs inset-inline-end => căn trái căn phải
inset-block-start vs inset-block-end => căn trên căn dưới