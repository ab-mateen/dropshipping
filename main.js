var supplyslider = document.getElementById("supplierrange");
var supplyoutput = document.getElementById("supplier");
supplyoutput.innerHTML = supplyslider.value;

supplyslider.oninput = function() {
    supplyoutput.innerHTML = this.value;
}

var profitslider = document.getElementById("profitrange");
var profitoutput = document.getElementById("profit");
profitoutput.innerHTML = profitslider.value;

profitslider.oninput = function() {
    profitoutput.innerHTML = this.value;
}
var salesslider = document.getElementById("salesrange");
var salesoutput = document.getElementById("sales");
salesoutput.innerHTML = salesslider.value;

salesslider.oninput = function() {
    salesoutput.innerHTML = this.value;
}

function pricefunction() {
    var supplyrange = document.getElementById('supplierrange').value;
    console.log(supplyrange);
    supplyrange = parseInt(supplyrange);
    var profrange = document.getElementById('profitrange').value;
    console.log(profrange);
    profrange = parseInt(profrange);
    var sales = document.getElementById('salesrange').value;
    console.log(sales);
    sales = parseInt(sales);
    var x = document.getElementById('slctprice').value;

    var total = supplyrange + (supplyrange * profrange / 100.0);
    total = supplyrange * sales;
    var y = total;
    if (x == "cad") {
        // y = document.getElementById('price').innerText;
        // y = parseInt(y);
        y = y * 0.95;
        y = parseInt(y);
        console.log(y);
        document.getElementById('price').innerText = y;
    } else if (x == "usd") {
        // y = document.getElementById('price').innerText;
        // y = parseInt(y);
        y = y * 0.73;
        y = parseInt(y);
        console.log(y);
        document.getElementById('price').innerText = y;
    } else {
        y = total;
        document.getElementById('price').innerText = y;
    }
}

function spprice() {
    var supplyrange = document.getElementById('supplierrange').value;
    // console.log(supplyrange);
    supplyrange = parseInt(supplyrange);
    var profrange = document.getElementById('profitrange').value;
    // console.log(profrange);
    profrange = parseInt(profrange);
    var sales = document.getElementById('salesrange').value;
    // console.log(sales);
    sales = parseInt(sales);
    var x = document.getElementById('slctprice').value;

    var total = supplyrange + (supplyrange * profrange) / 100.0;

    total = total * sales;
    total = parseInt(total);
    document.getElementById('price').innerText = total;
}

$(window).scroll(function() {
    // What Dropshipping Section
    if ($(window).scrollTop() > 300) {
        console.log($(window).scrollTop());
        $('.what-drop-img').addClass('fade-text-right');
        $('.what-drop-img').css('opacity', 1);
    }
    if ($(window).scrollTop() > 300) {
        console.log($(window).scrollTop());
        $('.what-drop-col-txt-1').addClass('fade-text-left');
        $('.what-drop-col-txt-1').css('opacity', 1);
    }
    // if ($(window).scrollTop() > 2200) {
    //     console.log($(window).scrollTop());
    //     $('.store-example-col-1').addClass('fade-text-left');
    //     $('.store-example-col-1').css('opacity', 1);
    // }
    // How its Works Section
    if ($(window).scrollTop() > 990) {
        console.log($(window).scrollTop());
        $('.how-work-col-1').addClass('fade-text-right');
        $('.how-work-col-1').css('opacity', 1);
    }
    if ($(window).scrollTop() > 990) {
        console.log($(window).scrollTop());
        $('.how-work-col-2').addClass('fade-up');
        $('.how-work-col-2').css('opacity', 1);
    }
    if ($(window).scrollTop() > 990) {
        console.log($(window).scrollTop());
        $('.how-work-col-3').addClass('fade-up');
        $('.how-work-col-3').css('opacity', 1);
    }
    if ($(window).scrollTop() > 990) {
        console.log($(window).scrollTop());
        $('.how-work-col-4').addClass('fade-text-left');
        $('.how-work-col-4').css('opacity', 1);
    }
    // Profit Calculator Section
    if ($(window).scrollTop() > 1600) {
        console.log($(window).scrollTop());
        $('.profit-calc-col-1').addClass('fade-text-right');
        $('.profit-calc-col-1').css('opacity', 1);
    }
    if ($(window).scrollTop() > 1600) {
        console.log($(window).scrollTop());
        $('.profit-calc-col-2').addClass('fade-text-left');
        $('.profit-calc-col-2').css('opacity', 1);
    }
    // Store Examples Section
    if ($(window).scrollTop() > 2200) {
        console.log($(window).scrollTop());
        $('.store-example-col-1').addClass('fade-text-right');
        $('.store-example-col-1').css('opacity', 1);
    }
    if ($(window).scrollTop() > 2200) {
        console.log($(window).scrollTop());
        $('.store-example-col-2').addClass('fade-up-right');
        $('.store-example-col-2').css('opacity', 1);
    }
    if ($(window).scrollTop() > 2200) {
        console.log($(window).scrollTop());
        $('.store-example-col-3').addClass('fade-up');
        $('.store-example-col-3').css('opacity', 1);
    }
    if ($(window).scrollTop() > 2200) {
        console.log($(window).scrollTop());
        $('.store-example-col-4').addClass('fade-up-left');
        $('.store-example-col-4').css('opacity', 1);
    }
    if ($(window).scrollTop() > 2200) {
        console.log($(window).scrollTop());
        $('.store-example-col-5').addClass('fade-text-left');
        $('.store-example-col').css('opacity', 1);
    }

});