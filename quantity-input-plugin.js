
$.fn.quantityInput = function (options) {
    
    let opts = $.extend({}, $.fn.quantityInput.defaults, options);
    let obj = this
    if (obj.prop("tagName")!=="DIV") {
        throw new DOMException("Tag is not valid!")
    }
    let minus = $("<div class=minus>-</div>")
    let plus = $("<div class=plus>+</div>")
    let number = $("<div class=number></div>")
    $([minus, plus, number]).css("background-color", opts.background)
    number.text(opts.value)
    minus.click(function () {
        let n = parseInt(number.text()) -1
        number.text(n)
        obj.change()
        obj.val(n)
    })
    plus.click(function () {
        let n = parseInt(number.text()) + 1
        number.text(n)
        obj.val(n)
        obj.change()
    })
    obj.append([minus, number, plus])
    return obj;
}

$.fn.quantityInput.defaults = {
    background: "#bababa",
    value: 0
};