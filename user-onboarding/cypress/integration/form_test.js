import cy from 'cypress'

describe('User-Onboarding-App', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const submit = () => cy.get('button[id=button]')
    const username = () => cy.get('input[name=first_name')
    const email = () => cy.get('input[name=email]')
    const password = () => cy.get('input[name=password]');
    const terms = () => cy.get('input[name=terms]')
    
    it('sanity checks', () => {
        expect(1+2).to.equal(3);
   })

   describe('submit button should be disabled with no text at start', () => {
       it('submit should be disabled', () => {
           submit().should('not.be.enabled')
       })
   })

   describe('type inside of inputs', () => {
       it('should be able to type username', () => {
           username()
           .should('have.value', '')
           .type('Matt')
           .should('have.value', 'Matt')
       })
       it('should be able to typel email', () => {
           email()
           .should('have.value', '')
           .type('mattcasey879@gmail.com')
           .should('have.value', 'mattcasey879@gmail.com')
       })
       it('should be able to type password', () => {
           password()
           .should('have.value', '')
           .type('password')
           .should('have.value', 'password')
       }) 
       
       it('checkbox should work', () => {
           terms().click()
       })
       
       it('submit button should be enabled upon completion of inputs and can submit data', () => {
           username().type('Matt')
           email().type('mattcasey879@gmail.com')
           password().type('password')
           terms().click()

           submit().should('be.enabled')
           submit().click()
       })

      describe('form validation' , () => {
          
          it('wrong username', () => {
              const valUser = () => cy.get('div[name=val-user]')
              username().type('Ma')
              valUser().should('exist')
          })
       
      })
   })
})

