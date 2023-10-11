sessionStorage.clear('entered')
document.addEventListener("DOMContentLoaded", function (event) {
    document.addEventListener("keydown", function (event) {
        if (!sessionStorage.getItem('entered')) {
            if (event.keyCode === 13) {
                greet()
                sessionStorage.setItem('entered', true)
            }
        } else {
            document.addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    location.reload()
                }
            });
        }

    });
});

function animate(arr) {
    var i = 0
    sleep = setInterval(() => {
        if (i < arr.length) {
            lines = document.querySelector('.line:last-child')
            lines.textContent += arr[i]
            i++;
        } else {
            clearInterval(sleep);
        }
    }, 50);
}

function greet() {
    body = document.querySelectorAll('#body')[0]
    var lines = document.createElement('DIV')
    lines.classList = 'line'
    var text = "Happy Birthday To You Wishing You Long Life And Prosperity "
    var text_ = "Cheers to your new age"
    let texts = text.split("")
    let texts_ = text_.split("")
    lines.textContent = '> '
    animate(texts)
    body.appendChild(lines)
    body.scrollTo(0, body.scrollHeight)
    setTimeout(() => {
        var lines_ = document.createElement('DIV')
        lines_.classList = 'line'
        body.appendChild(lines_)
        lines_.textContent = '> '
        setTimeout(() => {
            animate(texts_)
        }, 500);
    }, 3200);
    setTimeout(() => {
        var lines = document.createElement('DIV')
        lines.classList = 'line'
        body.appendChild(lines)
        lines.contentEditable = 'true'
        setTimeout(() => {
            lines.textContent = '> Press Enter To Exit'
        }, 100);
    }, 5700);
}

// setInterval(() => {
//     lines = document.querySelector('.line:last-child')
//     var news = lines.textContent.replace(/e/g, 'x')
//     lines.textContent = news
//     setTimeout(() => {
//         // lines.replace(/s/g, 'x')
//     }, 50);
// }, 100);