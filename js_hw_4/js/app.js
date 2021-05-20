let click = document.getElementById('btn');
click.onclick = function () {
    let user = {};
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value;
    user.age = document.getElementById('age').value;
    user.comment = document.getElementById('comment').value;
    user.country = document.getElementById('country').value;
    console.log('user:' + user);
    return false;
}
// Альтернативное решение
/*document.forms.form.onsubmit = function(){
    let user = {};
    user.name = this.name.value;
    user.email = this.email.value;
    user.age = this.age.value;
    user.comment = this.comment.value;
    user.country = this.country.value;
    console.log('user:' + user);
    return false;
}*/