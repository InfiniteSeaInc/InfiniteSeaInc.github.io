/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ocean',
                            type: 'image',
                            rect: ['-1000px', '0px', '1500px', '500px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ocean.jpg",'0px','0px']
                        },
                        {
                            id: 'logo-transparent',
                            type: 'image',
                            rect: ['0', '0', '500px', '500px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo-transparent.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '500px', '500px'],
                            sizeRange: ['','500px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 60000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid15",
                            "left",
                            0,
                            60000,
                            "linear",
                            "${ocean}",
                            '-1000px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("logo-animate_edgeActions.js");
})("logo");
