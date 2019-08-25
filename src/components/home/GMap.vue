<template>
    <div class="google-map" id="map">

    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'GMap',
  data () {
    return {
      lat: 20.5,
      lng: 78.9
    }
  },
  methods: {
    renderMap() {
      var latlng = new google.maps.LatLng(this.lat, this.lng);

      const map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      })
    }
  },
  mounted() {
    // get current user
    let user = firebase.auth().currentUser

    // get user geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = pos.coords.latitude
        this.lng = pos.coords.longitude

        // find user record and update geo coords
        db.collection('users').where('user_id', '==', user.uid)
        .get()
        .then(snapshot => {
          snapshot.forEach((doc) => {
            db.collection('users').doc(doc.id).update({
              geolocation: {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
              }
            })
          })
        }).then(() => {
          this.renderMap()
        })
      }, (err) => {
        console.log(err)
        this.renderMap()
      }, {maximumAge: 60000, timeout: 4000})
    } else {
      // position center by default
      this.renderMap()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .google-map {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
