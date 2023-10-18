function noValueError() {
    Swal.fire({
        title: 'Невозможно произвести рассчёты!',
        text: 'Вы не ввели один или несколько параметров!',
        icon: 'warning',
        confirmButtonText: 'Ок'
    })
}
