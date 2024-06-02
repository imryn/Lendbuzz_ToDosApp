import {findElementAndClick, 
    findElementAndType, 
    findElementAndShould,
    findElementAndDoubleClick, hoverAnElement,
    itemIsVisible,
    checkElementHasNewAttribute,
    checkCssOfColorOnElement,
    haveText} 
    from '../common/helper';

import {BaseEnum, Colors, KeyboardKeys} from '../common/baseEnum';
import {LocatorsForToDo} from '../common/locators';


class TodosPage {
    private todoItem = "cleaning the house";

    addItemToDoList(): void {
        findElementAndClick(LocatorsForToDo.toDoInput);
        findElementAndType(LocatorsForToDo.toDoInput, this.todoItem);
        findElementAndType(LocatorsForToDo.toDoInput, KeyboardKeys.ENTER);
        findElementAndClick(LocatorsForToDo.allOption);
    }
    
    checkOptionsForTodosListSection(): void {
        findElementAndShould(LocatorsForToDo.itemCheckbox, BaseEnum.EXIST);
        findElementAndShould(LocatorsForToDo.toDoListOptions, BaseEnum.EXIST);
        haveText(LocatorsForToDo.numberOfItems, "1 item left!", BaseEnum.EXIST);
        haveText(LocatorsForToDo.allOption, "All", BaseEnum.EXIST);
        haveText(LocatorsForToDo.activeOption, "Active", BaseEnum.EXIST);
        checkCssOfColorOnElement(LocatorsForToDo.allOption, 'border-color', Colors.RED);
        haveText(LocatorsForToDo.completedOption, "Completed", BaseEnum.EXIST);
        haveText(LocatorsForToDo.clearCompletedOption, "Clear completed", BaseEnum.EXIST);
    }
    
    itemCreated(): void {
        haveText(LocatorsForToDo.toDoItemLabel, this.todoItem, BaseEnum.EXIST);
    }
    
    editTheItem(): void {
            findElementAndDoubleClick(LocatorsForToDo.toDoItemLabel);
            findElementAndShould(LocatorsForToDo.inputContainer, BaseEnum.EXIST);
            findElementAndType(LocatorsForToDo.toDoItemLi, " updated");
            findElementAndType(LocatorsForToDo.toDoItemLi, KeyboardKeys.ENTER);
            haveText(LocatorsForToDo.toDoItemLabel, `${this.todoItem} updated`, BaseEnum.EXIST);
    }
    
    removeItemFromTodos(): void {
            hoverAnElement(LocatorsForToDo.item, KeyboardKeys.HOVER);
            itemIsVisible(LocatorsForToDo.deleteIcon);
            findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.NOT_EXIST);
    }

    checkElementAsCompleted(): void {
        haveText(LocatorsForToDo.numberOfItems, "1 item left!", BaseEnum.EXIST);
        hoverAnElement(LocatorsForToDo.itemCheckbox, KeyboardKeys.HOVER);
        findElementAndClick(LocatorsForToDo.itemCheckbox);
        checkElementHasNewAttribute(LocatorsForToDo.toDoItemLi, BaseEnum.COMPLETED);
        findElementAndClick(LocatorsForToDo.completedOption);
        findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.EXIST);
        haveText(LocatorsForToDo.numberOfItems, "0 items left!", BaseEnum.EXIST);
        findElementAndClick(LocatorsForToDo.activeOption);
        findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.NOT_EXIST);
    }

    clearTheTodoList(): void {
        findElementAndClick(LocatorsForToDo.allOption);
        findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.EXIST);
        hoverAnElement(LocatorsForToDo.clearCompletedOption, KeyboardKeys.HOVER);
        findElementAndClick(LocatorsForToDo.clearCompletedOption);
        findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.NOT_EXIST);
    }
}

export {TodosPage};