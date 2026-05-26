
//////////////////////////////////////////////////SCREEN




//////////////////////////////////////////////////MOUSE

//open and close header - menu - nav
function zoomHeaderClose() {
    const closeHeader = document.querySelector(".column-body-header-close");
    const start = document.querySelector(".column-body-header-close-start");
    const mid = document.querySelectorAll(".column-body-header-close-mid");
    const end = document.querySelector(".column-body-header-close-end");
    const logoImg = document.querySelector(".logo-img-header-close");

    if (!closeHeader || !start || !mid || !end) {
        return console.warn("header close undefined");
    }

    closeHeader.addEventListener("mouseenter", function () {
        //start
        start.style.padding = "40px";
        //mid
        mid.forEach(item => {
            item.style.padding = "40px";
            item.style.height = "0px"
            item.style.visibility = "visible";
        });
        //end
        end.style.padding = "40px";
        end.style.paddingLeft = "40px";

        logoImg.style.insetInlineStart = "90px"
        logoImg.style.insetBlockStart = "10px"
        logoImg.style.width = "60px"
        logoImg.style.height = "60px"

    });

    closeHeader.addEventListener("mouseleave", function () {
        //start
        start.style.padding = "30px";
        start.style.paddingRight = "18px";
        //mid
        mid.forEach(item => {
            console.log(item.id);
            if (item.id === "logo") {
                item.style.padding = "1px";
                item.style.height = "58px"
                item.style.visibility = "visible";
            }else{

            item.style.visibility = "hidden";
            item.style.padding = "0px";
            item.style.height = "0px" 
            }
        });
        // mid.style.padding = "1px"; //
        // mid.style.height = "58px"
        //end
        end.style.padding = "30px";
        end.style.paddingLeft = "18px";
        //img
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
