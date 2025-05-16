document.addEventListener('DOMContentLoaded', () => {
    fetch('courses.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Skip header
            const tbody = document.querySelector('#courses-table tbody');
            rows.forEach(row => {
                const cols = row.split(',');
                if (cols.length >= 7) {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td><a href="${cols[0].includes('http') ? cols[0] : '#'}" target="_blank">${cols[0].includes('http') ? cols[0].split('/').pop() : cols[0]}</a></td>
                        <td>${cols[1]}</td>
                        <td>${cols[2]}</td>
                        <td>${cols[3]}</td>
                        <td>${cols[4]}</td>
                        <td>${cols[5]}</td>
                        <td>${cols[6]}</td>
                    `;
                    tbody.appendChild(tr);
                }
            });
        })
        .catch(error => console.error('Error loading CSV:', error));
});