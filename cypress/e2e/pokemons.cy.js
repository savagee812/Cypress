describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');                          
         cy.get('input[type="email"]').type('user_login');                   
         cy.get('input[type="password"]').type('user_password');               
         cy.get('button[type="submit"]').click();                        
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); 
         cy.get('[href="/shop"]').click();                               
         cy.get('.available > button').first().click({ force: true });   
         cy.get('.credit').type('4111 1111 1111 1111');                     
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('1224');                           
         cy.get('.k_input_name').type('NAME');                           
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                     
         cy.contains('Покупка прошла успешно').should('be.visible');     
     });
    });