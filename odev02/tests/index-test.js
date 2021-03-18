import {showCard} from "../src";

test('Geçersiz imageId test',()=>{
    expect(()=>showCard(null)).toThrow();
})
