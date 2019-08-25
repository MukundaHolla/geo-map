<template>
    <div class="google-map" id="map">

    </div>
</template>

<script>
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
    this.renderMap()
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
