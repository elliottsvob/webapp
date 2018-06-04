<template>
    <div id="app-dashboard">
      <div>CHARTS</div>
      <b-table :items="items" :fields="fields">
      <template slot="show_details" slot-scope="row">
        <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
        <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? '-' : '+'}}
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <b-row>
            <div class="btn-group" role="group">
              <button v-for="m in row.item.menu"
                      v-bind:key="m"
                      @click="handle(m,row.item)">{{m}}
              </button>
            </div>
          </b-row>
        </b-card>
      </template>
    </b-table>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'AppDashboard',
  data() {
    return {
      fields: [],
      items: [],
    };
  },
  mounted() {
    this.getColumns();
    this.getData();
  },
  methods: {
    handle(event, item) {
      this.$router.push(`/${event}/${item.GUID}`);
    },
    refresh() {
      this.getData();
    },
    getColumns() {
      const vm = this;
      this.$http.get(`${Vue.config.api}/columns`)
        .then(((response) => {
          // get body data
          debugger;
          vm.fields = response.body;
        }));
    },
    getData() {
      const vm = this;
      this.$http.get(`${Vue.config.api}/search`)
        .then(((response) => {
          // get body data
          debugger;
          vm.items = response.body;
        }));
    },
  },
};

</script>

<style scoped>

</style>
