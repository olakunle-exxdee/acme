function up() {
    const stri = document.getElementById("name").values;
    const pas = document.getElementById('password').values;
    const pasCon = document.getElementsByClassName('password').values;
    if (pas === pasCon) {
        alert('password matched')
    } else {
        alert('password those not match ')
    }
    alert(`values added `);
}