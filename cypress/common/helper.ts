import { BaseEnum, KeyboardKeys } from "./baseEnum"

/** click element */
export const findElementAndClick = (locator: string ) => {
    cy.get(locator).click()
}

/** double click element */
export const findElementAndDoubleClick = (locator: string) => {
    cy.get(locator).dblclick()
}

/** type something by the user */
export const findElementAndType = (locator: string, value: string) => {
    cy.get(locator).type(value)
}

/** similar to assertion. for example checking the element exist in the dom */
export const findElementAndShould = (locator: string, value: BaseEnum) => {
    cy.get(locator).should(value)
}

/**  check element has text */
export const haveText = (locator: string, TextValue: string, value: BaseEnum) => {
    cy.get(locator).should("have.text", TextValue)
    findElementAndShould(locator, value)
}

/** hover an element */
export const hoverAnElement = (locator: string, behaviour: KeyboardKeys) => {
    cy.get(locator).trigger(behaviour)
}

/** check element is visible */
export const itemIsVisible = (locator: string) => {
    cy.get(locator).invoke('show')
}

/** check element has specific css */
export const checkCssOfColorOnElement = (locator: string, cssType: string, value: string) => {
    cy.get(locator).should('have.css', cssType, value)
}

/** check element has specific attribute */
export const checkElementHasNewAttribute = (locator: string, classValue: string) => {
    cy.get(locator).invoke('attr', 'class').should('contain', classValue)
}
