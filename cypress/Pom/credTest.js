class credTest{
    readCred() {
        const filePath = "cypress/fixtures/newLoginData.xlsx";
        cy.readExcelData(filePath).then((data) => {
          const [headers, ...rows] = data;
    
          if (rows.length === 0) {
            cy.log("No Credentials found in Excel sheet");
            return;
          }
    
          for (let i = 0; i < rows.length; i++) {
            const [username, password, validity] = rows[i];
    
            cy.visit("/");
            cy.get('input[name="username"]',{ timeout: 6000 }).type(username);
            cy.get('input[name="password"]',{ timeout: 6000 }).type(password);
            cy.get('button[type="submit"]', { timeout: 6000 }).click();
            if (validity === "valid") {
                // cy.wait(6000);
                cy.get("#dropdownBasic1",{timeout: 6000}).should("be.visible").click();
                cy.get(
                    ".col > .dropdown > .dropdown-menu > button.dropdown-item"
                  ).click();
                  cy.wait(6000);
            }
            else if(validity === 'Invalid Credentials.'){
                cy.log(`Wrong Credentials: ${username}, ${password}`);
            }
            else if(validity === 'stop'){
                return false;
            }
            // cy.wait(6000);
            // cy.get("#dropdownBasic1").should("be.visible");
    
            // cy.get("#dropdownBasic1").should("be.visible");
            // cy.get("#dropdownBasic1").click();
            // cy.get(
            //   ".col > .dropdown > .dropdown-menu > button.dropdown-item"
            // ).click();
            // cy.wait(6000);
    
            //cy.log(`Wrong Credentials: ${username}, ${password}`);
          }
        });
      }
}
export default credTest;