document.addEventListener('DOMContentLoaded', function() {
    const csvFilePath = 'courses.csv';
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const productsTable = document.getElementById('productsTable');

    // Load CSV and populate table
    fetch(csvFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(csvData => {
            const results = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                dynamicTyping: true
            });
            renderTable(results.data);
        })
        .catch(error => {
            console.error('Error loading or parsing CSV data:', error);
            document.querySelector('#productsTable tbody').innerHTML = 
                '<tr><td colspan="8">Error loading course data. Please try again later.</td></tr>';
        });

    // Render table with given data
    function renderTable(courses) {
        const tableBody = document.querySelector('#productsTable tbody');
        tableBody.innerHTML = '';
        courses.forEach(course => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><a href="${course.CourseName || '#'}" class="brand-link" target="_blank">${course.CourseName ? course.CourseName.split('/').pop() : ''}</a></td>
                <td>${course.Description || ''}</td>
                <td>${course.Instructor || ''}</td>
                <td>${course.Rating || ''}</td>
                <td>${course.Duration || ''}</td>
                <td>${course.Topic || ''}</td>
                <td>${course.Level || ''}</td>
                <td><a href="${course.AffiliateLink || '#'}" class="buy-btn" target="_-enroll">Enroll Now <i class="fas fa-external-link-alt"></i></a></td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Search functionality
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const tableRows = document.querySelectorAll('#productsTable tbody tr');
        tableRows.forEach(row => {
            const courseName = row.cells[0]?.textContent?.toLowerCase() || '';
            const description = row.cells[1]?.textContent?.toLowerCase() || '';
            const topic = row.cells[5]?.textContent?.toLowerCase() || '';
            const instructor = row.cells[2]?.textContent?.toLowerCase() || '';
            const isMatch = 
                courseName.includes(searchTerm) || 
                description.includes(searchTerm) || 
                topic.includes(searchTerm) || 
                instructor.includes(searchTerm);
            row.style.display = isMatch || searchTerm === '' ? '' : 'none';
        });
    }

    // Add event listeners
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', performSearch);
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    searchInput.addEventListener('search', function() {
        if (searchInput.value === '') {
            performSearch();
        }
    });
});