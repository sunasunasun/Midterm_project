$(document).ready(function() {
  loadThumbnails();
  //////
  //////
//   $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });
//////////
///////////
$("div").on("click", "#thumbnailClick", function() {
    window.location.replace("/resource/id");
  });



function createMainDisplay(resource) {
    const $link = $("<a>");
    $link.attr("href", `/resource/${resource.id}`);
    let $thumbnail = $("<img>");
    $thumbnail.attr("src", resource.thumbnail).attr("id", "thumbnailClick");
    $thumbnail.addClass("thumbnailImage");
    $link.append($thumbnail);
    return $link;
  }

  function renderImages(resource) {
    $('#thumbnails').empty()
    let $thumbnails = $("#thumbnails");

    resource.forEach(function(images) {
      let $imageRender = createMainDisplay(images);

      $thumbnails.prepend($imageRender);
    });
  }

  function loadThumbnails() {
    $.ajax({
      type: "GET",
      url: "/resource",
      data: JSON,
      success: function(data) {
        console.log(data)
        renderImages(data);
      }
    });
  }

$("#drop").change(function () {
  $.ajax({
      type: "GET",
      url: `/resource/category/${$( "#drop option:selected" ).text()}`,
      data: JSON,
      success: function(data) {
        // console.log(data)
        renderImages(data);
        //renderImages(data,id);
      }
    });
  })

});
