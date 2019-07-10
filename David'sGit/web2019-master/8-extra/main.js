(function () {
    // JS EX1
    function showResult() {
        const searchTerm = document.getElementById('form-search').value;
        const buttonsDiv = document.getElementById('buttonsDiv');
        const searchResultDiv = document.createElement('div');

        searchResultDiv.id = 'resultDiv';
        searchResultDiv.innerHTML = 'your search term is ' + searchTerm;
        buttonsDiv.appendChild(searchResultDiv);
    }

    document.getElementById('google_search').onclick = showResult;

    // JS EX2
    function showDate() {
        document.getElementById('dateDiv').innerHTML = new Date().toISOString();
    }

    const logoDiv = document.getElementById('google_logo');
    const dateDiv = document.createElement('div');

    dateDiv.id = 'dateDiv';
    logoDiv.appendChild(dateDiv);

    document.getElementById('im_feeling_lucky').onclick = showDate;

    // JS EX3
    function addFloatBox() {
        const body = document.getElementsByTagName('body')[0];
        const box = document.createElement('div');
        box.className = 'floatBox';
        body.prepend(box);
    }

    document.getElementById('add_float_box').onclick = addFloatBox;

    // JS EX4
    function changeBackground() {
        const body = document.getElementsByTagName('body')[0];
        const randomInt = Math.floor(Math.random() * 5) + 1;
        body.style.background = color[randomInt];
    }

    const color = [ '#ff0000', '#0040ff', '#bfff00', '#ffff00', '#8000ff'];
    document.getElementById('change_background').onclick = function () {
        return setInterval(changeBackground, 5000)
    };

})();