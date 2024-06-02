import { BaseEnum, Colors, KeyboardKeys } from "./baseEnum"

export const findElementAndClick = (locator: string ) => {
    cy.get(locator).click()
}

export const findElementAndDoubleClick = (locator: string) => {
    cy.get(locator).dblclick()
}

export const findElementAndType = (locator: string, value: string) => {
    cy.get(locator).type(value)
}

export const findElementAndShould = (locator: string, value: BaseEnum) => {
    cy.get(locator).should(value)
}

export const haveText = (locator: string, TextValue: string, val: BaseEnum) => {
    cy.get(locator).should("have.text", TextValue)
    cy.get(locator).should(val)
}

export const hoverAnElement = (locator: string, behaviour: KeyboardKeys) => {
    cy.get(locator).trigger(behaviour)
}

export const itemIsVisible = (locator: string) => {
    cy.get(locator).invoke('show')
    findElementAndClick(locator)
}

export const checkCssOfColorOnElement = (locator: string, cssType: string, value: Colors) => {
    cy.get(locator).should('have.css', cssType, value)
}

export const checkElementHasNewAttribute = (locator: string, classValue: string) => {
    cy.get(locator).invoke('attr', 'class').should('contain', classValue)
}
