export function registerGlobalProperties({ ...props }) {
	for (let prop in props) {
		this.config.globalProperties['$' + prop] = props[prop];
	}
}
export function hideElement(item, className) {
	document.addEventListener('mousedown', event => {
		if (!event.target.closest(className)) {
			this[item] = false;
		}
	});
}

export function addParams(key, val) {
	const queryParams = new URLSearchParams(window.location.search);
	queryParams.set(key, val);
	history.replaceState(null, null, '?' + queryParams.toString());
}
