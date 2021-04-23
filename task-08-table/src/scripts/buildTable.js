export const TABLE_BODY = document.querySelector('.table-body');

export function buildTable(data) {
  TABLE_BODY.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const ROW = `
      <tr class="table-row">
        <td data-column="number">${data[i].number}</td>
        <td data-column="firstName">${data[i].firstName}</td>
        <td data-column="lastName">${data[i].lastName}</td>
        <td data-column="city">${data[i].city}</td>
        <td data-column="phone">${data[i].phone}</td>
        <td data-column="email">${data[i].email}</td>
      </tr>
    `;

    TABLE_BODY.innerHTML += ROW;
  }
}
