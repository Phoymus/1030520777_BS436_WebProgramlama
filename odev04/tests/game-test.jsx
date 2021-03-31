const React = require('react');
const {shallow} = require("enzyme");
const {mount} = require('enzyme');
const {Game} = require('../src/Game');
const newGame = require('../src/Game');

const checkCardsIsDiplayed = (driver) =>{
    const cards = driver.find('.card');
    expect(cards.length).toEqual(3);
}

test('cards displayed', ()=>{
    const driver = mount(<Game/>);
    checkCardsIsDiplayed(driver);
})

test('multi draw a card', ()=>{
    const driver = mount(<Game/>);

    let card = driver.find('.card').at(1);

    for (let i=0;i<50;i++){
        card.simulate('click')
        let srcName = card.find("img").prop("src")
        expect(srcName === './img/img1.jpg' || srcName ===
            './img/img2.jpg' || srcName === "./img/card.png" ).toBeTruthy();
    }
})

test('multi handle function test',()=>{
    const driver = mount(<Game/>);

    let card ;
    let srcName;
    for (let i=0;i<50;i++){
        card = driver.find('.card').at(Math.floor(Math.random()*3));
        card.simulate('click')
        card = driver.find('.card').at(Math.floor(Math.random()*3));
        srcName = card.find("img").prop("src")


        if (card.prop('src')=== './img/img1.jpg'){
            expect(driver.state('catFound')).toEqual(true);
            if (driver.state.chances<2){
                expect(driver.state('resultMessage')).toEqual('Kazandınız :)');
            }
        }
        else if (!driver.state.catFound && driver.state.chances >=1){
            expect(driver.state('resultMessage')).toEqual('Kaybettiniz :(');
        }
    }
})

test('reload page',()=>{
    const component = shallow(<Game />)
    const driver = mount(<Game/>);

    component.instance().newGame();
    expect(driver.state.catFound).toBeUndefined();
})
