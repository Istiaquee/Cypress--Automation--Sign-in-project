class fn {
  readData() {
    const filePath = "cypress/fixtures/loginData.xlsx";

    cy.readExcelData(filePath).then((data) => {
      const [headers, ...rows] = data;

      if (rows.length === 0) {
        cy.log("No Credentials found in Excel sheet");
        return;
      }

      for (let i = 0; i < rows.length; i++) {
        const [username, password] = rows[i];
        if (!(((username || "") + "").trim()) || !(((password || "") + "").trim())) {
          cy.log('Reached the End of Excel Sheet!');
          return;
        }

        cy.visit("/");
        cy.get('input[name="username"]', { timeout: 6000 }).type(username);
        cy.get('input[name="password"]', { timeout: 6000 }).type(password);
        cy.get('button[type="submit"]', { timeout: 6000 }).click()
        cy.wait(6000)
        cy.get('body', { timeout: 6000 }).then(($body) => {
          if ($body.find("#dropdownBasic1", { timeout: 6000 }).length > 0) {

            cy.get("#dropdownBasic1", { timeout: 6000 }).should('be.visible').click();
            cy.get(
              ".col > .dropdown > .dropdown-menu > button.dropdown-item", { timeout: 6000 }
            ).click();
            cy.wait(6000);

          }
          else {
            cy.wait(6000);
            cy.log(`Invalid Credentials! Username:${username}, Password:${password}`)
          }
        })

      }
    });
  }
}

export default fn;