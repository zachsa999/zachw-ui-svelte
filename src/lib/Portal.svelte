<script>
	function portal(node) {
		let target;

		function update() {
			target = document.querySelector('body');
			target.appendChild(node);
			node.hidden = false;
		}

		function destroy() {
			if (node.parentNode) {
				node.parentNode.removeChild(node);
			}
		}

		update();

		return {
			update,
			destroy
		};
	}
</script>

<div use:portal hidden>
	<slot />
</div>
