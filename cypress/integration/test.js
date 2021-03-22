import Case from '../support/pages/case'


describe("CP1", function () {
    beforeEach( function() {
      cy.visit('https://tienda.movistar.com.ar')
    });
  
    it('Validar planes', function() {
        Case.checkOffers();
    })
    it('Validar textos que deben aparecer en menus y textos que no // en el segundo caso debe ser dinamico', function() {
   
        Case.validateTrue()
        Case.validateFalse('Prepago', 'Cambio de Plan', 'Packs Postpago','Servicios para tu línea')
    })
})
  