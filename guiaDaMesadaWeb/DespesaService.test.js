const Despesa = require("../src/main/singleton/Despesa");
const DespesaService = require(".../src/main/service/DespesaService");

test("Adicionar 1 despesa", () => {
    const despesaBeforeIncrement = DespesaService.getDepesa();
    const depsesaAfterIncrement = DespesaService.add();
    expect(depsesaAfterIncrement.despesa).toEqual(despesaAfterIncrement.despesa + despesaAfterIncrement.despesa );
});

test("Throw on instantiation", () => {
    expect(() => {
        new Despesa();

    }).toThrowError(new Error("Use Despesa.getInstance()"));
})
