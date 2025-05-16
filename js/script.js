document.addEventListener('DOMContentLoaded', () => {
    let allCourses = [];

    // Load CSV and populate table
    fetch('courses.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Skip header
            allCourses = rows.map(row => row.split(',').map(col => col.trim()));
            renderTable(allCourses);
        })
        .catch(error => console.error('Error loading CSV:', error));

    // Search functionality
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const filteredCourses = allCourses.filter(row =>
            row.some(col => col.toLowerCase().includes(query))
        );
        renderTable(filteredCourses);
    });

    // Render table with given data
    function renderTable(courses) {
        const tbody = document.querySelector('#courses-table tbody');
        tbody.innerHTML = '';
        courses.forEach(row => {
            if (row.length >= 8) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><a href="${row[0].includes('http') ? row[0] : '#'}" target="_blank">${row[0].includes('http') ? row[0].split('/').pop() : row[0]}</a></td>
                    <td>${row[1]}</td>
                    <td>${row[2]}</td>
                    <td>${row[3]}</td>
                    <td>${row[4]}</td>
                    <td>${row[5]}</td>
                    <td>${row[6]}</td>
                    <td><a href="${row[7].includes('http') ? row[7] : '#'}" target="_blank">Enroll Now</a></td>
                `;
                tbody.appendChild(tr);
            }
        });
    }
});