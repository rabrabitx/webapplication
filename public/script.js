$(document).ready(function() {
    $('#tool-evaluation-form').submit(function(event) {
        event.preventDefault();
        var toolName = $('#tool-name').val();
        var toolDescription = $('#tool-description').val();
        var toolCategory = $('#tool-category').val();
        var toolRating = $('#tool-rating').val();
        $.ajax({
            type: 'POST',
            url: '/evaluate-tool',
            data: {
                toolName: toolName,
                toolDescription: toolDescription,
                toolCategory: toolCategory,
                toolRating: toolRating
            },
            success: function(data) {
                $('#tool-evaluation-results').html('');
                $('#tool-evaluation-results').append('<h2>Tool Evaluation Results</h2>');
                $('#tool-evaluation-results').append('<p>Tool Name: ' + data.toolName + '</p>');
                $('#tool-evaluation-results').append('<p>Tool Description: ' + data.toolDescription + '</p>');
                $('#tool-evaluation-results').append('<p>Tool Category: ' + data.toolCategory + '</p>');
                $('#tool-evaluation-results').append('<p>Tool Rating: ' + data.toolRating + '</p>');
            }
        });
    });
});
