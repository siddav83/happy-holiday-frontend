describe("empty spec", () => {
	beforeEach(() => {
		cy.viewport(480, 900);
	});

	it("Opens Homepage", () => {
		cy.visit("http://localhost:3000/");
	});

	it("User Logs in", () => {
		cy.get("button").click();

		cy.get(":nth-child(1) > input").type("a@a.com");

		cy.get("form > :nth-child(2) > input").type("123");

		cy.get('[type="submit"]').click();
	});

	it("User Opens Calendar", () => {
		cy.get(".calendar-btn").click();

		// Clicks on a day

		cy.get(".calendar-container > :nth-child(2)").click();

		cy.get(".show-day > button > .fa-solid").click();

		// Back button

		cy.get(".back-btn").click();

		// Goes back to calendar

		cy.get(".calendar-btn").click();

		// Nav button to go to Holidays main page

		cy.get(".fa-regular").click();
	});

	it("User Opens their profile", () => {
		cy.get('[href="/friends"]').click();

		cy.get(".main-container > :nth-child(2) > .profile-username").click();
	});
});
