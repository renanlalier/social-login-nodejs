var calculator = require('../controllers/calculatorController')

describe('Teste de Soma', function() {
    it('Soma dois valores', function() {
        expect(calculator.sum(4, 3)).toEqual(7);
    });
});
