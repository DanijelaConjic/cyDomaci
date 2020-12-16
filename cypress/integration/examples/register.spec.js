describe('register testovi',() => {
        it('Posetiti stranicu', () => {
        cy.visit("/")
        })
    })

         it('click on register', () => {
        cy.visit("/")
        cy.get(".nav-link").eq(2).click()
        })

        it('register with valid credentials', () => {
            cy.visit("/")
            cy.get("a[href='/register']").click()
            cy.get('#first-name').type('Danijela')
            cy.get('#last-name').type('Conjic')
            cy.get('#email').type('daca@test.com')
            cy.get('#password').type('test123123')
            cy.get('#password-confirmation').type('test123123')
            cy.get('[type="checkbox"]').check()
            cy.get('button').click()
            //cy.wait(500)
        })

        it('registration with non-validation credentials', () => {
            cy.visit("/")
            cy.get("a[href='/register']").click()
            cy.get('#first-name').type('Danijela')
            cy.get('#last-name').type('Conjic')
            cy.get('#email').type('dacatest.com')
            cy.get('#password').type('test123123')
            cy.get('#password-confirmation').type('test123123')
            cy.get('[type="checkbox"]').check()
            cy.get('button').click()
            //cy.wait(500)
        })


        it.only('registration with non-validation credentials', () => {
            cy.visit("/")
            cy.get("a[href='/register']").click()
            cy.get('#first-name').type('Danijela')
            cy.get('#last-name').type('Conjic')
            cy.get('#email').type('daca@test.com')
            cy.get('#password').type('test1231')
            cy.get('#password-confirmation').type('test123123')
            cy.get('[type="checkbox"]').check()
            cy.get('button').click()
            //cy.wait(500)
        })
           
        it('expect empty field of email', () => {
            cy.visit("/")
            cy.get("a[href='/register']").click()
            cy.get('#first-name').type('Danijela')
            cy.get('#last-name').type('Conjic')
            //cy.get('#email').type('daca1@test.com')
            cy.get('#password').type('test123123')
            cy.get('#password-confirmation').type('test123123')
            cy.get('[type="checkbox"]').check()
            cy.get('button').click()
           
        }
        )
        it('expect empty field of password', () => {
            cy.visit("/")
            cy.get("a[href='/register']").click()
            cy.get('#first-name').type('Danijela')
            cy.get('#last-name').type('Conjic')
            cy.get('#email').type('daca@test.com')
            //cy.get('#password').type('test123123')
            cy.get('#password-confirmation').type('test123123')
            cy.get('[type="checkbox"]').check()
            cy.get('button').click()
        }
        )
        it('the checkbox is not marked', () => {
            cy.visit("/")
            cy.get("a[href='/register']").click()
            cy.get('#first-name').type('Danijela')
            cy.get('#last-name').type('Conjic')
            cy.get('#email').type('daca8@test.com')
            cy.get('#password').type('test123123')
            cy.get('#password-confirmation').type('test123123')
            //cy.get('[type="checkbox"]').check()
            cy.get('button').click()
        }
        )