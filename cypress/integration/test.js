import Case from '../support/pages/case'


describe("CP1", function () {
    beforeEach( function() {
      cy.visit('https://tienda.movistar.com.ar')
    });
  
    it(`CP01 Ingresar a la Tienda Movistar, En "Productos y Servicios" seleccionar "Planes de TV", Validar que se haya redirigido a la url 
    que contenga "television/planes", Indicar los planes que aparezcan en la página con sus montos actuales inculyendo descuento,
     Validar que el número de planes sea igual o mayor a 3Validar planes`, function() {
        Case.checkOffers();
    })
    it(` Ingresar a la Tienda Movistar, Ingresar al perfil de "Negocios", Validar que se haya redirigido a negocios realizando un assert
     con la url, Validar que posean "Tienda", "Productos y Servicios", "Ayuda" y "Beneficios", En "Productos y Servicios" validar de 
     manera dinámica que no se encuentren: "Prepago", "Cambio de Plan", "Packs Postpago" y "Servicios para tu línea"`, function() {
   
        Case.validateTrue();
        Case.validateFalse('Prepago', 'Cambio de Plan', 'Packs Postpago','Servicios para tu línea');
    })
})
  