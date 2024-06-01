import { TodosPage } from '../pages/todos_page'

import {get_url} from '../common/helper'

const todosPage = new TodosPage()

describe('template spec', () => {
   beforeEach (() => {
        cy.visit(get_url)
    });

    it('item is being created and all options fot todos list are being displayed', () => {
        todosPage.addItemToDoList()
        todosPage.itemCreated()
        todosPage.checkOptionsForTodosListSection()

    });

    it('edit exist item', () => {
        todosPage.addItemToDoList()
        todosPage.editTheItem()
    });

    it('remove item from todos list', () => {
        todosPage.addItemToDoList()
        todosPage.removeItemFromTodos()
    });

    it('create item as completed and check it is being displayed in the Completed tab', () => {
        todosPage.addItemToDoList()
        todosPage.checkElementAsCompleted()
    });

    it('click clear completed after add item to todos list', () => {
        todosPage.addItemToDoList()
        todosPage.checkElementAsCompleted()
        todosPage.clearTheTodoList()
    });
  
});