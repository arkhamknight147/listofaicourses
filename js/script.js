// Initialize the application when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    let currentPage = 1;
    const itemsPerPage = 10;
    let filteredCourses = [...coursesData];
    let currentSortColumn = null;
    let currentSortDirection = 'asc';

    // Initialize the page
    initializeFilters();
    displayCourses();
    setupEventListeners();

    // Populate filter dropdowns with unique values
    function initializeFilters() {
        const topicSelect = document.getElementById('topicFilter');
        const levelSelect = document.getElementById('levelFilter');
        
        // Get unique topics
        const topics = [...new Set(coursesData.map(course => course.topic))];
        topics.sort();
        
        // Get unique levels
        const levels = [...new Set(coursesData.map(course => course.level))];
        levels.sort();
        
        // Add options to topic filter
        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.text = topic;
            topicSelect.appendChild(option);
        });
        
        // Add options to level filter
        levels.forEach(level => {
            const option = document.createElement('option');
            option.value = level;
            option.text = level;
            levelSelect.appendChild(option);
        });
    }

    // Set up event listeners for search, sorting, and filtering
    function setupEventListeners() {
        // Search functionality
        document.getElementById('courseSearch').addEventListener('input', function(e) {
            handleSearch(e.target.value.toLowerCase());
        });
        
        // Search button click
        document.getElementById('searchButton').addEventListener('click', function() {
            const searchTerm = document.getElementById('courseSearch').value.toLowerCase();
            handleSearch(searchTerm);
        });
        
        // Filter changes
        document.getElementById('topicFilter').addEventListener('change', applyFilters);
        document.getElementById('levelFilter').addEventListener('change', applyFilters);
        document.getElementById('ratingFilter').addEventListener('change', applyFilters);
        
        // Reset filters button
        document.getElementById('resetFilters').addEventListener('click', resetFilters);
        
        // Pagination
        document.getElementById('prevPage').addEventListener('click', previousPage);
        document.getElementById('nextPage').addEventListener('click', nextPage);
        
        // Sorting
        document.querySelectorAll('.sort-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const column = this.getAttribute('data-sort');
                sortCourses(column);
            });
        });
    }

    // Handle search functionality
    function handleSearch(searchTerm) {
        if (searchTerm === '') {
            applyFilters(); // Reset to filtered view without search
        } else {
            searchCourses(searchTerm);
        }
    }

    // Search courses based on search term
    function searchCourses(searchTerm) {
        // Apply current filters first
        let tempFilteredCourses = coursesData.filter(course => {
            // Apply topic filter
            const topicFilter = document.getElementById('topicFilter').value;
            if (topicFilter !== '' && course.topic !== topicFilter) {
                return false;
            }
            
            // Apply level filter
            const levelFilter = document.getElementById('levelFilter').value;
            if (levelFilter !== '' && course.level !== levelFilter) {
                return false;
            }
            
            // Apply rating filter
            const ratingFilter = parseFloat(document.getElementById('ratingFilter').value);
            if (ratingFilter && course.rating < ratingFilter) {
                return false;
            }
            
            return true;
        });
        
        // Then apply search term
        filteredCourses = tempFilteredCourses.filter(course => {
            return course.name.toLowerCase().includes(searchTerm) ||
                   course.description.toLowerCase().includes(searchTerm) ||
                   course.instructor.toLowerCase().includes(searchTerm) ||
                   course.topic.toLowerCase().includes(searchTerm) ||
                   course.level.toLowerCase().includes(searchTerm);
        });
        
        // Reset to first page and display courses
        currentPage = 1;
        displayCourses();
    }

    // Apply all active filters
    function applyFilters() {
        const topicFilter = document.getElementById('topicFilter').value;
        const levelFilter = document.getElementById('levelFilter').value;
        const ratingFilter = parseFloat(document.getElementById('ratingFilter').value);
        
        filteredCourses = coursesData.filter(course => {
            // Apply topic filter
            if (topicFilter !== '' && course.topic !== topicFilter) {
                return false;
            }
            
            // Apply level filter
            if (levelFilter !== '' && course.level !== levelFilter) {
                return false;
            }
            
            // Apply rating filter
            if (ratingFilter && course.rating < ratingFilter) {
                return false;
            }
            
            return true;
        });
        
        // Reset to first page and display filtered courses
        currentPage = 1;
        displayCourses();
    }

    // Reset all filters to default
    function resetFilters() {
        document.getElementById('topicFilter').value = '';
        document.getElementById('levelFilter').value = '';
        document.getElementById('ratingFilter').value = '';
        document.getElementById('courseSearch').value = '';
        
        filteredCourses = [...coursesData];
        currentPage = 1;
        displayCourses();
    }

    // Sort courses by column
    function sortCourses(column) {
        // Toggle sort direction if the same column is clicked again
        if (currentSortColumn === column) {
            currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            currentSortColumn = column;
            currentSortDirection = 'asc';
        }
        
        filteredCourses.sort((a, b) => {
            let valueA, valueB;
            
            // Handle different data types
            if (column === 'rating') {
                valueA = a[column];
                valueB = b[column];
            } else {
                valueA = a[column].toString().toLowerCase();
                valueB = b[column].toString().toLowerCase();
            }
            
            // Compare and apply sort direction
            if (valueA < valueB) {
                return currentSortDirection === 'asc' ? -1 : 1;
            }
            if (valueA > valueB) {
                return currentSortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
        
        displayCourses();
    }

    // Display courses with pagination
    function displayCourses() {
        const tableBody = document.querySelector('#coursesTable tbody');
        const noResults = document.getElementById('noResults');
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const coursesToDisplay = filteredCourses.slice(startIndex, endIndex);
        
        // Clear existing rows
        tableBody.innerHTML = '';
        
        // Show/hide no results message
        if (filteredCourses.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
        
        // Add course rows
        coursesToDisplay.forEach(course => {
            const row = document.createElement('tr');
            
            // Create cells
            row.innerHTML = `
                <td><strong>${course.name}</strong></td>
                <td>${truncateText(course.description, 100)}</td>
                <td>${course.instructor}</td>
                <td>${course.rating} ⭐</td>
                <td>${course.duration}</td>
                <td>${course.topic}</td>
                <td>${course.level}</td>
                <td>${course.price}</td>
                <td><a href="${course.link}" class="course-link" target="_blank" rel="noopener noreferrer">Enroll</a></td>
            `;
            
            tableBody.appendChild(row);
        });
        
        // Update pagination
        updatePagination();
    }

    // Update pagination controls
    function updatePagination() {
        const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
        const prevButton = document.getElementById('prevPage');
        const nextButton = document.getElementById('nextPage');
        const pageIndicator = document.getElementById('pageIndicator');
        
        // Update page indicator
        pageIndicator.textContent = `Page ${currentPage} of ${totalPages || 1}`;
        
        // Enable/disable prev button
        if (currentPage === 1) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }
        
        // Enable/disable next button
        if (currentPage === totalPages || totalPages === 0) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    // Go to previous page
    function previousPage() {
        if (currentPage > 1) {
            currentPage--;
            displayCourses();
        }
    }

    // Go to next page
    function nextPage() {
        const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayCourses();
        }
    }

    // Helper function to truncate text
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
});

// Add event listener for keyboard navigation (Enter to search)
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && document.activeElement.id === 'courseSearch') {
        document.getElementById('searchButton').click();
    }
});