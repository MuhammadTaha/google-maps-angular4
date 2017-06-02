import { Component, OnInit } from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
// import { AgmCoreModule } from 'angular2-google-maps/core';
import { AgmCoreModule } from "@agm/core";

declare var google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title: string = 'My first angular2-google-mfsddsfsaps project';

  constructor() { }

  ngOnInit() {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    });
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {

      var waypts = [];
      var checkboxArray: any[] = [
        'winnipeg', 'regina', 'calgary'
      ];
      for (var i = 0; i < checkboxArray.length; i++) {

        waypts.push({
          location: checkboxArray[i],
          stopover: true
        });

      }

      directionsService.route({
        origin: { lat: 41.85, lng: -87.65 },
        destination: { lat: 49.3, lng: -123.12 },
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }





  }

}

// import {
//   Component,
//   NgModule
// } from '@angular/core';

// import {
//   BrowserModule
// } from '@angular/platform-browser';

// import {AgmCoreModule} from "@agm/core";

// @Component({
//   selector: 'my-app',
//   styles: [`
//     .sebm-google-map-container {
//        height: 300px;
//      }
//   `],
//   template: `
//     <sebm-google-map 
//       [latitude]="lat"
//       [longitude]="lng"
//       [zoom]="zoom"
//       [disableDefaultUI]="false"
//       [zoomControl]="false"
//       (mapClick)="mapClicked($event)">

//       <sebm-google-map-marker 
//           *ngFor="let m of markers; let i = index"
//           (markerClick)="clickedMarker(m.label, i)"
//           [latitude]="m.lat"
//           [longitude]="m.lng"
//           [label]="m.label"
//           [markerDraggable]="m.draggable"
//           (dragEnd)="markerDragEnd(m, $event)">

//         <sebm-google-map-info-window>
//           <strong>InfoWindow content</strong>
//         </sebm-google-map-info-window>

//       </sebm-google-map-marker>

//       <sebm-google-map-circle [latitude]="lat + 0.3" [longitude]="lng" 
//           [radius]="5000"
//           [fillColor]="'red'"
//           [circleDraggable]="true"
//           [editable]="true">
//       </sebm-google-map-circle>

//     </sebm-google-map>
// `})
// export class App {
//   // google maps zoom level
//   zoom: number = 8;

//   // initial center position for the map
//   lat: number = 51.673858;
//   lng: number = 7.815982;

//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }

//   mapClicked($event: MouseEvent) {
//     this.markers.push({
//       lat: $event.coords.lat,
//       lng: $event.coords.lng
//     });
//   }

//   markerDragEnd(m: marker, $event: MouseEvent) {
//     console.log('dragEnd', m, $event);
//   }

//   markers: marker[] = [
// 	  {
// 		  lat: 51.673858,
// 		  lng: 7.815982,
// 		  label: 'A',
// 		  draggable: true
// 	  },
// 	  {
// 		  lat: 51.373858,
// 		  lng: 7.215982,
// 		  label: 'B',
// 		  draggable: false
// 	  },
// 	  {
// 		  lat: 51.723858,
// 		  lng: 7.895982,
// 		  label: 'C',
// 		  draggable: true
// 	  }
//   ]
// }
// // just an interface for type safety.
// interface marker {
// 	lat: number;
// 	lng: number;
// 	label?: string;
// 	draggable: boolean;
// }

// @NgModule({
//   imports: [ BrowserModule, AgmCoreModule.forRoot() ],
//   declarations: [ App ],
//   bootstrap: [ App ]
// })
// export class AppModule {}
