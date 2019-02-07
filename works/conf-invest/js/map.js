var map;
var gmarkers = [];
var metro = [
    [55.764846, 37.604861],
    [55.757879, 37.616636],
    [55.757599, 37.618739]
];
var parking = [
    [55.757971, 37.609168],
    [55.757138, 37.610349],
    [55.757415, 37.613095],
    [55.757367, 37.616625],
    [55.760778, 37.619704]
];
var forbesKonferenc = [
    [55.7583798, 37.6216236]
];


function initialize() {

    var styles=[{
        stylers:[
            //{hue:"#00ffe6"},
            //{saturation:-100},
            //{gamma:0.7}
        ]
    }];
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
    var latlng = new google.maps.LatLng(55.7583798,37.6216236);

    var mapOptions = {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    //setMarkers(map, metro, './img/marker-metro.png');
    //setMarkers(map, parking, './img/marker-parking.png');
    setMarkers(map, forbesKonferenc, './img/marker-forbes-konferenc.png');
}


function setMarkers(map, locations, image_url) {

    var image = {
        url: image_url,
        size: new google.maps.Size(25, 40),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(12, 40)
    };

    for (var i = 0; i < locations.length; i++) {
        var point = locations[i];
        var myLatLng = new google.maps.LatLng(point[0], point[1]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            title: '',
            zIndex: 1
        });
        gmarkers.push(marker);
    }
}

function ClearMap() {
    for (i = 0; i<gmarkers.length; i++){
        gmarkers[i].setMap(null);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

/*
$(function(){
   $(".mapmenu .btn").click(function(){
        ClearMap();
        var type = $(this).attr("data-rel");
        if (type == "metro"){
             setMarkers(map, metro, './img/marker-metro.png');
             setMarkers(map, forbesKonferenc, './img/marker-forbes-konferenc.png');
         }
        if (type == "parking"){
             setMarkers(map, parking, './img/marker-parking.png');
             setMarkers(map, forbesKonferenc, './img/marker-forbes-konferenc.png');
        }
        $(".mapmenu a").removeClass("on");
        $(this).addClass("on");
        return false;
   });
});
*/