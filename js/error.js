function noValueError() {
    Swal.fire({
        title: languages[JSON.parse(localStorage.getItem("language"))].js.calcErrorTitle,
        text: languages[JSON.parse(localStorage.getItem("language"))].js.calcErrorText,
        icon: 'warning',
        confirmButtonText: languages[JSON.parse(localStorage.getItem("language"))].js.confirmBtn,
    })
}
