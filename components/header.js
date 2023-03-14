class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
<div class="navbar">
			<ul class="nav-links">
			<a><h1>Liam Blake</h1></a>
</ul>
	<!--		<ul class="nav-links">
	<a href="/index.html">Home</a>
	<a href="/research.html">Research</a>
	<a href="/talks.html">Talks</a>
			</ul> -->
	<!-- Profile links -->
			<ul class="nav-profiles">
	<a href="https://www.linkedin.com/in/liam-blake/"><i class="fa-brands fa-linkedin"></i></a>
	<a href="https://github.com/liamblake"><i class="fa-brands fa-github"></i></a>
	<a href="https://orcid.org/0000-0003-2779-494X"><i class="fa-brands fa-orcid"></i></a>
			<ul class="nav-profiles">
</div>
    `;
	}
}

customElements.define("header-component", Header);
