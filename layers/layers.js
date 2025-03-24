ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32719").setExtent([296114.443592, 6127152.933983, 298722.210867, 6128551.914482]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_coord_transformadaUTM_1 = new ol.format.GeoJSON();
var features_coord_transformadaUTM_1 = format_coord_transformadaUTM_1.readFeatures(json_coord_transformadaUTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_coord_transformadaUTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_transformadaUTM_1.addFeatures(features_coord_transformadaUTM_1);
cluster_coord_transformadaUTM_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_coord_transformadaUTM_1
});
var lyr_coord_transformadaUTM_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_coord_transformadaUTM_1, 
                style: style_coord_transformadaUTM_1,
                popuplayertitle: 'coord_transformadaUTM',
                interactive: true,
                title: '<img src="styles/legend/coord_transformadaUTM_1.png" /> coord_transformadaUTM'
            });
var format_Ejerc_1_2 = new ol.format.GeoJSON();
var features_Ejerc_1_2 = format_Ejerc_1_2.readFeatures(json_Ejerc_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Ejerc_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ejerc_1_2.addFeatures(features_Ejerc_1_2);
cluster_Ejerc_1_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Ejerc_1_2
});
var lyr_Ejerc_1_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Ejerc_1_2, 
                style: style_Ejerc_1_2,
                popuplayertitle: 'Ejerc_1',
                interactive: true,
                title: 'Ejerc_1'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_coord_transformadaUTM_1.setVisible(true);lyr_Ejerc_1_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_coord_transformadaUTM_1,lyr_Ejerc_1_2];
lyr_coord_transformadaUTM_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 't_pregunt': 't_pregunt', 'n°_preg_i': 'n°_preg_i', 'n°_preg_c': 'n°_preg_c', 'por_cor': 'por_cor', 'porc_incor': 'porc_incor', 'porc_total': 'porc_total', 'preg_incor': 'preg_incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_Ejerc_1_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_coord_transformadaUTM_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 't_pregunt': 'TextEdit', 'n°_preg_i': 'TextEdit', 'n°_preg_c': 'TextEdit', 'por_cor': 'TextEdit', 'porc_incor': 'TextEdit', 'porc_total': 'TextEdit', 'preg_incor': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'ValueRelation', });
lyr_Ejerc_1_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_coord_transformadaUTM_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 't_pregunt': 'inline label - always visible', 'n°_preg_i': 'inline label - always visible', 'n°_preg_c': 'inline label - always visible', 'por_cor': 'inline label - visible with data', 'porc_incor': 'inline label - always visible', 'porc_total': 'inline label - visible with data', 'preg_incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_Ejerc_1_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'timestamp': 'inline label - always visible', 'begin': 'header label - always visible', 'end': 'inline label - always visible', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ejerc_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});