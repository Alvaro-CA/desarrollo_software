function login(correo, pass) {
    correo = document.getElementById('correo_sesion').value
    pass = document.getElementById('pass_sesion').value
    console.log(correo)
    console.log(pass)
    document.getElementById('alertMss').classList.remove('alert', 'alert-warning', 'alert-danger', 'alert-success')
    // document.getElementById('response').innerHTML = '<div id="loading" class="mx-auto mt-2" style="width: 40px;height: 40px;border: 4px solid green;border-right: 4px solid transparent;border-radius: 20px;animation-name: loading;animation-duration: 1s;animation-iteration-count: infinite;animation-timing-function: linear;"></div>'
    if (correo.length > 0 && pass.length > 0) {
        requestLogin(correo, pass)
    } else {
        document.getElementById('alertMss').classList.remove('alert-warning', 'alert-success')
        document.getElementById('alertMss').classList.add('alert', 'alert-danger')
        document.getElementById('response').innerText = "Por favor ingresar datos válidos";
    }
}

function requestLogin(correo, pass){
    $.ajax({
        url: "./private/controllers/login/ajxLogin.php",
        method: "POST",
        data: {
            request: 1,
            correo: correo,
            pass: pass
        },
        success: function(data) {
            console.log(data)
            switch (data) {
                case '404':
                    document.getElementById('alertMss').classList.remove('alert-warning', 'alert-success')
                    document.getElementById('alertMss').classList.add('alert', 'alert-danger')
                    document.getElementById('response').innerText = "Por favor, revisa tu correo y tu contraseña";
                    break;
                case '200':
                    document.getElementById('alertMss').classList.remove('alert-warning', 'alert-danger')
                    document.getElementById('alertMss').classList.add('alert', 'alert-success')
                    document.getElementById('response').innerText = "Login Exitoso";
                    setTimeout(function() {
                        location.reload()
                    }, 200);
                    location.href="./examples/dashboard.html"
                    break;
            }
        }
    });
}