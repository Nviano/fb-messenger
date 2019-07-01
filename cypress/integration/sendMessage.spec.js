describe("Login", function() {
  beforeEach(() => {
    cy.visit("/login");
    cy.get('[type="email"]').type("clone@facebook.com");
    cy.get('input[type="password"]').type("123");
    cy.get("[data-cy=submit-button]").click();
  });

  it("clicking '1-week bootcamp' navigates to a correct url", function() {
    cy.get("h1").contains("Sorry the news feed is not implemented yet");
  });
});
