import { TodosPage } from '../pages/TodosPage'

const todosPage = new TodosPage()

describe('template spec', () => {
   beforeEach (() => {
        cy.visit(Cypress.env('baseUrl'))
        todosPage.addItemToDoList()
    });

    it('item is being created and all options for todos list are being displayed', () => {
        todosPage.itemCreated()
        todosPage.checkOptionsForTodosListSection()
    });

    it('edit exist item', () => {
        todosPage.editTheItem()
    });

    it('remove item from todos list', () => {
        todosPage.removeItemFromTodos()
    });

    it('create item as completed and check it is being displayed in the Completed tab', () => {
        todosPage.checkElementAsCompleted()
    });

    it('click clear completed after add item to todos list', () => {
        todosPage.checkElementAsCompleted()
        todosPage.clearTheTodoList()
    });
  
});