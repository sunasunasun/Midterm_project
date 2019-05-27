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
  function createMainDisplay(resource) {
    let $thumbnail = $("<img>");
    $thumbnail.attr("src", resource.thumbnail);
    $thumbnail.addClass("thumbnailImage");
    return $thumbnail;
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
      url: `/resource/${$( "#drop option:selected" ).text()}`,
      data: JSON,
      success: function(data) {
        // console.log(data)
        renderImages(data);
        //renderImages(data,id);
      }
    });
  })

});
