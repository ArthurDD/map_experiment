// Enabling zoom in/out of the svg

function initialise_svg_pan_zoom () {
    let svg_map = $('div#svg_map_div svg')
    console.log("Map: ", svg_map)
    svg_map.attr('id', 'svg_map')
    let svg = $('#svg_map')
    svg.width("50%").height("50%")

    const graph_zoom = svgPanZoom('#svg_map', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        maxZoom: 10,
    });
}




      // // Don't use window.onLoad like this in production, because it can only listen to one function.
      // window.onload = function() {
      //   var beforePan
      //
      //   beforePan = function(oldPan, newPan){
      //     var stopHorizontal = false
      //       , stopVertical = false
      //       , gutterWidth = 200
      //       , gutterHeight = 100
      //         // Computed variables
      //       , sizes = this.getSizes()
      //       , leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth
      //       , rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom)
      //       , topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight
      //       , bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom)
      //
      //     customPan = {}
      //     customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x))
      //     customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y))
      //
      //     return customPan
      //   }
      //
      //   // Expose to window namespace for testing purposes
      //   window.panZoom = svgPanZoom('#limit-svg', {
      //     zoomEnabled: true
      //   , controlIconsEnabled: true
      //   , fit: 1
      //   , center: 1
      //   , beforePan: beforePan
      //   });
      //
      //   // panZoom.setBeforePan(beforePan)
      // };

function reset_graph() {    // Called when a new parsing is started.
    $('#stats').html('').hide();    // Hide the stats div

    // Sets back the default message
    $('#graph').html('<p style="margin-top:20px; font-style: italic"> The computed graph will appear here.</p>').css('background-color', '')
    svgPanZoom.destroy; // destroy svgPanZoom instance (can't have more than one in a page)
}
