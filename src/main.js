const getStatus = (status) => {
    return status.split(' ')[0].toLowerCase()

}

const generateRow = (data) => {

    return `
    <div class="row">
        <div class="user-name">
            <p>
                ${data.name}
            </p>
            <p>
                ${data.contact.email}
            </p>
        </div>
        <div class="user-info">
            <p>${data.cpf}</p>
            <p>${data.contact.tel}</p>
        </div>
        <div class="user-status">
            <div class="status status-${getStatus(data.status)}"></div>
            <span>${data.status}</span>
        </div>
        <div class="actions">
            <button class="btn" data-id="${data._id}">Editar</button>
        </div>
    </div>
    `
};


fetch('https://demo5283088.mockable.io/customers')
    .then(res => res.json())
    .then(res => {
        res.data.map(user => {
            let row = document.getElementById('result')
            console.log(user)
            row.insertAdjacentHTML('beforeend',generateRow(user))
        })
    });