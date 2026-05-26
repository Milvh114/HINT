
//////////////////////////////////////////////////SCREEN
// function updatePadding() {
//     const header = document.getElementById("header");

//     const headerOpen = document.querySelector(".row-body-header-open");

//     if (!header) {
//         return console.warn("header undefined");
//     }

//     if (window.innerWidth <= 102) {
//         header.style.padding = "0px";
//     } else {
//         header.style.padding = "24px";
//     }

//     headerOpen.style.height = header.style.height
// }


function updatePadding2() {

    const headerStart = document.querySelector(".column-inline-body-header-start");
    const headerMid = document.querySelectorAll(".column-inline-body-header-mid");
    const headerEnd = document.querySelector(".column-inline-body-header-end");

    if (!headerStart || headerMid.length === 0 || !headerEnd) {
        return console.warn("header undefined");
    }

    if (window.innerWidth <= 752) {

        headerMid.forEach(item => {
            item.style.padding = "0px";
        });

        headerStart.style.padding = "0px"
        headerEnd.style.padding = "0px"

        // demo.style.padding = "30px"


    } else {

        headerMid.forEach(item => {
            item.style.padding = "44px";
        });
        headerStart.style.padding = "44px"
        headerEnd.style.padding = "44px"

        // halfCircle.forEach(item => {
        //     item.style.padding = "30px";
        // });

    }

}

// function screenSizeSmall() {

//     headerName.forEach(item => {

//         if (window.innerWidth <= 752) {
//             item.style.padding = "0px";
//         } else {
//             item.style.padding = "24px";
//         }

//     });
// }

// updatePadding();
// updatePadding2()

//////////////////////////////////////////////////MOUSE

function zoomHeaderClose() {
    const closeHeader = document.querySelector(".column-body-header-close");
    const start = document.querySelector(".column-body-header-close-start");
    const mid = document.querySelectorAll(".column-body-header-close-mid");
    const logoMid = document.querySelector(".column-body-header-close-mid-logo");//use to change logo visible or hiden
    const end = document.querySelector(".column-body-header-close-end");
    const logoImg = document.querySelector(".logo-img-header-close");
    if (!closeHeader || !start || !mid || !end) {
        return console.warn("header close undefined");
    }
    console.log("1")
    // closeHeader.style.padding="30px"
    console.log(closeHeader.style.padding)
    closeHeader.addEventListener("mouseenter", function () {

        console.log("abc: ", start.style.paddingLeft + 10);
        console.log("2")

        // closeHeader.style.insetInlineStart = "150px";
        // const currentPaddingLeft = parseInt(start.style.paddingLeft);
        // const currentPaddingRight = parseInt(start.style.paddingRight);

        // closeHeader.style.paddingLeft = currentPaddingLeft + 100 + "px";
        // closeHeader.style.height = start.style.paddingLeft
        // closeHeader.style.width = "10px"

        // closeHeader.style.removeProperty("width");
        // closeHeader.style.removeProperty("height");



        //open body header open start
        start.style.padding = "40px";
        start.style.paddingLeft = "18px";

        //open body header open mid
        //change logo area when open
        logoMid.style.padding = "40px";
        logoMid.style.height = "0px";
        logoMid.style.visibility = "visible";
        //change text area when open
        mid.forEach(item => {
            item.style.padding = "40px";
            item.style.height = "0px"
            item.style.visibility = "visible";
        });

        //open body heade open end
        end.style.padding = "40px";
        end.style.paddingRight = "18px";

        //move logo when body header open
        logoImg.style.insetInlineStart = "70px"
        logoImg.style.insetBlockStart = "10px"
        logoImg.style.width = "60px"
        logoImg.style.height = "60px"
        const openBodyHeaderTime = () => {
            closeHeader.style.insetInlineStart = "10px";
        };

        // Gọi hàm sau 2000 mili giây (2 giây)
        // setTimeout(openBodyHeaderTime, 5000);

    });

    closeHeader.addEventListener("mouseleave", function () {

        // closeHeader.style.insetInlineStart = "10px";
        closeHeader.style.height = "58px"
        closeHeader.style.width = "98px"

        //open body header close start
        start.style.padding = "30px";
        start.style.paddingRight = "18px";

        //open body header close start
        mid.forEach(item => {
            item.style.visibility = "hidden";
            item.style.padding = "0px";
            item.style.height = "0px"
        });
        logoMid.style.padding = "1px";
        logoMid.style.height = "58px";
        logoMid.style.visibility = "visible";
        // mid.style.padding = "1px";
        // mid.style.height = "58px"

        //open body header close start
        end.style.padding = "30px";
        end.style.paddingLeft = "18px";

        //move logo when body header close
        logoImg.style.insetInlineStart = "25px"
        logoImg.style.insetBlockStart = "5px"
        logoImg.style.width = "50px"
        logoImg.style.height = "50px"

    });



    // mid.addEventListener("mouseenter", function () {
    //     mid.style.padding = "60px";
    // });

    // end.addEventListener("mouseenter", function () {
    //     end.style.padding = "60px";
    // });

}

zoomHeaderClose();

// window.addEventListener("resize", () => {
//     updatePadding();
//     updatePadding2();
// });
