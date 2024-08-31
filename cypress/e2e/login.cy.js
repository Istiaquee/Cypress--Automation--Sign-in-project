describe('corporate login', ()=>{
  it('successfully login', () => {
    cy.visit("https://recruiter.bdjobs.com/")
    cy.get('#username',{timeout: 5000}).type('dilruba')
    cy.get('#password',{timeout: 5000}).type('a')
    cy.get('.btn.btn-primary.btn-login',{timeout: 5000}).click()
    cy.get('.dropdown-toggle.btn.text-primary',{timeout: 5000}).contains('Internal Test Account for Bdjobs-Dilruba')
    cy.wait(2000)
  });
  //comment
  it('both empty', () => {
    cy.visit('https://recruiter.bdjobs.com/')
    // cy.get('#username').type('')
    // cy.get('password').type('')
    cy.get('.btn.btn-primary.btn-login',{timeout: 5000}).click()
    cy.get('.form-validation',{timeout: 5000}).contains('Enter a valid username and password.')
    cy.wait(2000)

  });

  it('username empty', () => {
    cy.visit('https://recruiter.bdjobs.com/')
    // cy.get('#username').type('')
    cy.get('#password',{timeout: 5000}).type('a')
    cy.get('.btn.btn-primary.btn-login',{timeout: 5000}).click()
    cy.get('.form-validation',{timeout: 5000}).contains('Enter a valid username.')
    cy.wait(2000)

  });

  it('password empty', () => {
    cy.visit('https://recruiter.bdjobs.com/')
    cy.get('#username',{timeout: 5000}).type('dilruba')
    // cy.get('#password').type('')
    cy.get('.btn.btn-primary.btn-login',{timeout: 5000}).click()
    cy.get('.form-validation',{timeout: 5000}).contains('Enter a valid password.')
    cy.wait(2000)

  });

  it('wrong username', () => {
    cy.visit('https://recruiter.bdjobs.com/')
    cy.get('#username',{timeout: 5000}).type('dilrubaaa')
    cy.get('#password',{timeout: 5000}).type('a')
    cy.get('.btn.btn-primary.btn-login',{timeout: 5000}).click()
    cy.get('.form-validation',{timeout: 5000}).contains('Invalid Credentials.')
    cy.wait(2000)

  });

  it('wrong password', () => {
    cy.visit('https://recruiter.bdjobs.com/')
    cy.get('#username',{timeout: 5000}).type('dilruba')
    cy.get('#password',{timeout: 5000}).type('aa')
    cy.get('.btn.btn-primary.btn-login',{timeout: 5000}).click()
    cy.get('.form-validation',{timeout: 5000}).contains('Invalid Credentials.')
    cy.wait(2000)

  });

  it('both wrong', () => {
    cy.visit('https://recruiter.bdjobs.com/')
    cy.get('#username',{timeout: 5000}).type('dilrubaaa')
    cy.get('#password',{timeout: 5000}).type('adadw')
    cy.get('.btn.btn-primary.btn-login',{timeout: 5000}).click()
    cy.get('.form-validation',{timeout: 5000}).contains('Invalid Credentials.')
    cy.wait(2000)

  });
})