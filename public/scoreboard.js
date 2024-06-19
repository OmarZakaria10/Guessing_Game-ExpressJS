document.addEventListener('DOMContentLoaded', function() {
    // Fetch the top 5 scores from the server
    fetch('/top-scores', {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(topScores => {
        // Process the top 5 scores returned from the server
        console.log('Top 5 scores:', topScores);
        populateTable(topScores);
    })
    .catch(error => {
        console.error('Error fetching top scores:', error);
    });

    function populateTable(scores) {
        const tbody = document.querySelector('#scoreTable tbody');
        tbody.innerHTML = ''; // Clear existing rows

        // Loop through the scores array and create table rows
        scores.forEach(score => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${score.playerName}</td>
                <td>${score.score}</td>
                <td>${score.time}</td>
            `;
            tbody.appendChild(row);
        });
    }
});
