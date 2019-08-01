// -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*-
// vim:set ft=javascript ts=4 sw=4 sts=4 cindent:

var Config = (function(window, undefined) {

    var bratCollData = {
	'entity_types': [
// this is optional
        {
            'type': 'SPAN_DEFAULT',
            'bgColor': '#7fa2ff',
            'borderColor': 'darken'
        },{
            'type': 'Element_reseau',
            'bgColor': '#2ecc71',
            'borderColor': 'darken'
        },{
            'type': 'Epuration',
            'bgColor': '#BDC581',
            'borderColor': 'darken'
        },{
            'type': 'Indicateur',
            'bgColor': '#DCE775',
            'borderColor': 'darken'
        },{
            'type': 'Gestion_reseau',
            'bgColor': '#FEA47F',
            'borderColor': 'darken'
        },{
            'type': 'Mesure',
            'bgColor': '#ff7675',
            'borderColor': 'darken'
        },{
            'type': 'Organisation',
            'bgColor': '#42ECCF',
            'borderColor': 'darken'
        },{
            'type': 'Qualite_eau',
            'bgColor': '#74b9ff',
            'borderColor': 'darken'
        },{
            'type': 'Spatial',
            'bgColor': '#8282DF',
            'borderColor': 'darken'
        },{
            'type': 'Temporel',
            'bgColor': '#F294E9	',
            'borderColor': 'darken'
        },{
            'type': 'Travaux',
            'bgColor': '#F5C12A',
            'borderColor': 'darken'
        },{
            'type': 'Type_reseau',
            'bgColor': '#fd79a8',
            'borderColor': 'darken'
        },{
            'type': 'Accident',
            'bgColor': '#B56769',
            'borderColor': 'darken'
        },{
            'type': 'Caracteristique_reseau',
            'bgColor': '#58B19F',
            'borderColor': 'darken'
        },
        {
            'type': 'ARC_DEFAULT',
            'color': 'black',
            'arrowHead': 'triangle,5',
            'labelArrow': 'triangle,3,5',
        },
        {
            'type': 'token',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        },
        {
            'type': '-',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        }
	],
  'event_attribute_types': [],
  'entity_attribute_types': [
        {
            'type':   'Name',
            'values': { 
                'Name' : { 'glyph': '(N)' },
             },
         },
         ],
	'relation_types': [
{
 		'type': 'bounded_to',
                'dashArray': '3,3',
		'color': '#404040',
},
{
 		'type': 'precises',
                'dashArray': '3,3',
		'color': '#404040',
}
// this is optional
//         {
//             'type': 'subj',
//             'labels': [ 'subj' ],
//             'dashArray': '3,3',
//             'color': 'green',
//             'args': [
//                 {
//                     'role': 'arg1',
//                     'targets': [ 'token' ]
//                 },
//                 {
//                     'role': 'arg2',
//                     'targets': [ 'token' ]
//                 }
//             ]
//         }
        ],
	'event_types': [],
    };

    return {
        bratCollData: bratCollData,
    };
})(window);