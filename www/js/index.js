/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var abc = function() {
    console.log("Loading Maps");
    window.local_map = plugin.google.maps.Map.getMap(document.getElementById('map'), {
      'camera': {
        'target': {lat: 28, lng: 77},
        'tilt': 0,
        'zoom': 10
      },
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'mapType': plugin.google.maps.MapTypeId.ROADMAP,
      'preferences': {
        'zoom': {
          'minZoom': 11,
          'maxZoom': 15
        },
        'padding': {
          'left': 30,
          'top': 50,
          'bottom': 20,
          'right': 10
        }
      }
    });
    local_map.addMarker({
      icon: 'img/logo.png',
      position: {
          lat: 28,
          lng: 77
      }
  });
    console.log("All done");
  }


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
	console.log('device ready');
    	setTimeout(abc, 15000);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
