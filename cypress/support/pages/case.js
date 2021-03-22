class Case{

    checkOffers = ()=>{
        
        cy.fixture('case.json').then((locators)=>{
         
            cy.get(locators.products).click();
            cy.get('a').contains('Planes de TV').click();
            cy.url().should('eq',"https://www.movistar.com.ar/productos-y-servicios/television/planes")
            cy.get(locators.prices).each((element)=>{
               cy.log(element.text())
            })
            let objprices = cy.get(locators.prices)
            objprices.its('length').should('eq',3)
        })
    }

    validateTrue = ()=>{
        
        cy.fixture('case2.json').then((locators)=>{
            cy.get(locators.negocios).contains('Negocios').click({force:true});
            cy.url().should('eq',"https://tienda.movistar.com.ar/negocios.html");
            let arrayBusqueda = ['Tienda', 'Productos y Servicios', 'Ayuda','Beneficios'];
            for (let i =0; i<arrayBusqueda.length; i++){
                cy.get('.dnavigation__item').find('span').contains(arrayBusqueda[i]).should('be.visible')
            }            
        })
    }

    validateFalse=(...arrayNegativos)=>{
        cy.fixture('case2.json').then((locators)=>{
            cy.get(locators.products).click();
            cy.get('.dnavigation__submenu').find('span').each((element)=>{
                let contador=0
                while(contador<arrayNegativos.length){
                    cy.wrap(element.text()).should('not.eq',arrayNegativos[contador])
                    contador++
                }
            })
        })
    }

}

export default new Case();