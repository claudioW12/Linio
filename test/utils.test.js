const {getNumbersOrMessages, getNumberOrMessage} = require("../utils/utils");

test("15 -> Linianos", ()=>{
    expect( getNumberOrMessage(15) ).toBe('Linianos') ;
})

test("10 -> IT", ()=>{
    expect( getNumberOrMessage(10) ).toBe('IT') ;
})

test("45 -> Linianos", ()=>{
    expect( getNumberOrMessage(45) ).toBe('Linianos') ;
})

test("54 -> Linio", ()=>{
    expect( getNumberOrMessage(54) ).toBe('Linio') ;
})

test("55 -> IT", ()=>{
    expect( getNumberOrMessage(55) ).toBe('IT') ;
})

test("99 -> Linio", ()=>{
    expect( getNumberOrMessage(99) ).toBe('Linio') ;
})

test("100 -> IT", ()=>{
    expect( getNumberOrMessage(100) ).toBe('IT') ;
})

test("from 1 to 10 range -> '1,2,Linio,4,IT,Linio,7,8,Linio,IT'", ()=>{
    expect( getNumbersOrMessages(1, 10).join(",") ).toBe( "1,2,Linio,4,IT,Linio,7,8,Linio,IT" ) ;
})

test("from 1 to 15 range -> '1,2,Linio,4,IT,Linio,7,8,Linio,IT,11,Linio,13,14,Linianos'", ()=>{
    expect( getNumbersOrMessages(1, 15).join(",") ).toBe( "1,2,Linio,4,IT,Linio,7,8,Linio,IT,11,Linio,13,14,Linianos" ) ;
})

