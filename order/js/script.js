//漢堡按鈕
$(function () {
    $('.hamburger').click(function () {
        //第二步驟 => 切換漢堡按鈕
        $(this).toggleClass('is-active');
        //第三步驟 => 出現show
        $('.navigation').toggleClass('show');
    });


});


// 訂單折疊展開
function pastOrder() {
    var expandedElement = document.getElementById("expanded");

    // Toggle the "hidden" class to show or hide the element
    expandedElement.classList.toggle("hidden");
}