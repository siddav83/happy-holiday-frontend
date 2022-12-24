describe("empty spec", () => {
	beforeEach(() => {
		cy.viewport(480, 900);
	});

	it("Opens Homepage", () => {
		cy.visit("http://localhost:3000/");
	});

	it("User Logs in", () => {
		cy.get(".Shortcuts > .btn-dark").click();

		cy.get("#email").type("test@gmail.com");

		cy.get('[type="submit"]').type("test");

		cy.get('[type="submit"]').click();
	});

	it("User Opens Calendar", () => {
		cy.wait(500);
		cy.get(".countdown-container").click();
		cy.get(".calendar-container > :nth-child(11)").click();
		cy.get(".show-day > button > .fa-solid").click({ force: true });
		cy.get(".back-btn").click();
	});

	it("User Opens their profile", () => {
		cy.get('[href="/friends"] > .fa-solid').click();
		cy.get(":nth-child(3) > .profile-username").click();
	});

	it("adds a 'Wants' to their profile", () => {
		cy.get(".add-btn").click();
		cy.get("#category")
			.select("Sweets", { force: true })
			.should("have.value", "Sweets");
		cy.get(".add-cat-btn").click({ force: true });
	});

	it("adds a 'Dislikes' to their profile", () => {
		cy.get(":nth-child(2) > .type").click();
		cy.get(".add-btn").click();
		cy.get("#category")
			.select("Books", { force: true })
			.should("have.value", "Books");
		cy.get(".add-cat-btn").click({ force: true });
	});

	it("adds a 'Dislikes' to their profile", () => {
		cy.get(":nth-child(3) > .type").click();
		cy.get(".add-btn").click();
		cy.get("#category")
			.select("TV", { force: true })
			.should("have.value", "TV");
		cy.get("#item").type("Samsung", { force: true });
		cy.get(".add-cat-btn").click({ force: true });
	});

	it("Go to a party page", () => {
		cy.get('[href="/events"] > .fa-solid').click();
	});

	it("toggle dark mode", () => {
		cy.get(".fa-moon").click();
		cy.get(".fa-moon").click();
	});

	it("Go to a friends page", () => {
		cy.get('[href="/friends"] > .fa-solid').click();
		cy.get(":nth-child(2) > .profile-username").click();
	});

	it("compares price", () => {
		cy.get(":nth-child(1) > .card").click();
		cy.wait(2000);
		cy.get(".modal-inner > .fa-solid").click();
	});

	it("Log out", () => {
		cy.get(".Shortcuts > :nth-child(5) > .fa-solid").click();
		cy.get(":nth-child(5) > .fa-solid").click();
		cy.get(":nth-child(5) > .fa-solid").click();
	});
});
