<template>
	
	<teleport to="#bagatell-editor">
		
		<div class="modal" @click="onClick">
			
			<slot />
			
		</div>
		
	</teleport>
	
</template>

<script>

export default {
	emits: ['close'],
	methods: {
		onClick(event){
			if(event.target == event.currentTarget){
				this.$emit("close")
			}
		}
	}
}

</script>

<style scoped>

.modal{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(148, 148, 148, 0.719);
	z-index: 100;
	padding: 1em;
	overflow: auto;
}

</style>