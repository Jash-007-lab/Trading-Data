document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const tableBody = document.querySelector('#dataTable tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const row = document.createElement('tr');

        for (let [name, value] of formData.entries()) {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
        form.reset();
    });
});
