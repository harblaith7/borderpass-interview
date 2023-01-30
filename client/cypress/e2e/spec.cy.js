describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button").click();
    cy.get('[data-testid="date-picker"]').type("2019-01-02");
    cy.get("button").contains("Next Question").click();

    cy.get("button").contains("Next Question").click();
    cy.contains("This Field is Required");
    cy.get("#demo-simple-select").click();
    cy.contains("France").click();
    cy.get("button").contains("Next Question").click();
    cy.get("button").contains("Back").click();
    cy.contains("France").click();
    cy.contains("Turkey").click();
    cy.get("button").contains("Next Question").click();

    cy.contains("Yes").click();
    cy.get("button").contains("Next Question").click();

    cy.get("button").contains("Next Question").click();
    cy.contains("Most recent studies");
    cy.contains("1-2 years ago").click();
    cy.get("button").contains("Next Question").click();
  });
});
