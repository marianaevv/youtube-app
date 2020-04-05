

$(document).ready(function () {
    $('#Youtube_Search').submit(function (event) {
        event.preventDefault();
        var entry = $('#entry').val();
        getRequest(entry);
    });
});

function getRequest(entry) {
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
		maxResults: 10,
        key: 'AIzaSyCaKQpQEjQZPTbWEtitMyCFixQVSn-q95A',
        q: entry
    };
  
    $.getJSON(url, params, foundResults);
}

function foundResults(results) {
    var html = "";
    var entries = results.items;
    
    $.each(entries, function (index, value) {
       html += '<div class="video">' +
                '<a target="_blank" href="https://www.youtube.com/watch?v=' + value.id.videoId + '">' +
                '<h3>'+ value.snippet.title + '</h3>' +
                '<img src=" '+ value.snippet.thumbnails.default.url + ' ">' +
                '</a>' +
                '</div>'
    }); 
    
    $('#results').html(html);
}


