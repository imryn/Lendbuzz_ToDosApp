import rgbHex from 'rgb-hex';

export const get_url = () => {
    return "https://todomvc.com/examples/react/dist/#/active"
};

export const findElementAndClick = (locator: string ) => {
    cy.get(locator).click()
}

export const findElementAndDoubleClick = (locator: string) => {
    cy.get(locator).dblclick()
}

export const findElementAndType = (locator: string, value: string) => {
    console.log(locator, value)
    cy.get(locator).type(value)
}

export const findElementAndShould = (locator: string, value: string) => {
    cy.get(locator).should(value)
}

export const haveText = (locator: string, text_value: string, val: string) => {
    cy.get(locator).should("have.text", text_value)
    cy.get(locator).should(val)
}

export const hoverAnElement = (locator: string, behaviour: string) => {
    cy.get(locator).trigger(behaviour)
}

export const itemIsVisible = (locator: string) => {
    cy.get(locator).invoke('show')
    findElementAndClick(locator)
}

export const checkCssOfColorOnElement = (locator: string, css_type: string, value: string) => {
    cy.get(locator)
    .invoke('css', css_type)
    .then((item: any) => {
        expect(rgbHex(item)).to.eq(value)
    })
}

export const checkElementHasNewAttribute = (locator: string, class_value: string) => {
    cy.get(locator).invoke('attr', 'class').should('contain', class_value)
}
