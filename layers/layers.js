ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32639").setExtent([332329.203165, 2798541.069083, 393702.800758, 2835237.672600]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> دائرة خدمة المنشأة'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
    title: 'المنشأة<br />\
    <img src="styles/legend/_2_0.png" /> خاص<br />\
    <img src="styles/legend/_2_1.png" /> عام<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'fid': 'fid', 'Name': 'اسم المنشأة', 'Type': 'النوع', 'Specialization': 'التخصص', 'Area_m2': 'المساحة (م2)', 'Beds': 'عدد الأسرة', 'Easting': 'Easting', 'northing': 'northing', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'Name': 'اسم المنشأة', 'Type': 'النوع', 'Specialization': 'التخصص', 'Area_m2': 'المساحة (م2)', 'Beds': 'عدد الأسرة', 'Easting': 'Easting', 'northing': 'northing', });
lyr__1.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Type': 'Hidden', 'Specialization': 'Hidden', 'Area_m2': 'Hidden', 'Beds': 'Hidden', 'Easting': 'Hidden', 'northing': 'Hidden', });
lyr__2.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Specialization': 'TextEdit', 'Area_m2': 'Range', 'Beds': 'Range', 'Easting': 'Hidden', 'northing': 'Hidden', });
lyr__1.set('fieldLabels', {'Name': 'inline label', });
lyr__2.set('fieldLabels', {'Name': 'inline label', 'Type': 'inline label', 'Specialization': 'inline label', 'Area_m2': 'inline label', 'Beds': 'inline label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});