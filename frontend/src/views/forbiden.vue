<template>
	<div id="forbiden">
		<h1><b>Forbiden</b></h1>
		<h5>You don't have permission to access this page</h5>
		<hr>
		<div>
		   <b-link href="/">Home</b-link>
		</div>
	</div>
</template>

<script>

export default {

   methods: {

    closeMobileMenu() {
      window.bus.$emit('menu/toggle');
    },

  },

};

</script>

