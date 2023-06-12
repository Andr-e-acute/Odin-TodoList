how to order the task
  by due date.
    need to figuer out date-fns

 <!-- -when adding task need to recreate DOm where?
 -display in the sidebar which category is active. -->
------------------------------------------
<!-- do I need have the storage as an Object

object
+ a clear identification of each task
-need to have some kind of Id management 
+easier delete but hated why?
-adding is complicated create Id for keys 

storage array of task objects
+can use index an id or the object itself to identify in array
-deleting a task will need as necessarily to rebuild all the categories=>DOM
+easier for me to handle.
+array methods.
+adding is simple 

what does other people do array:3 object:

I WIll change to array -->
<!-- ----------------------------------
are Projects a propertie vs storage Object
  - do i need a project catergory or can projects be a property of task

    project should be a property of task.
    + simpler to get a storage only one place to store
    + one less module.
    + can have a task in more than one category
    + can reuse the same logic as week/days for creation and display
    + only one loop on startup to create change timecatergory+project
    +easy to create done/Archiv/trash
    
    - when adding/deleting task need to create everthing from new
        as a storage I don't need to create the other project new.
    - when i want the delete a project hard. 
    - share a project todolist hard. (can use the already created category.) -->
-------------------------------------
should the category/project hold the index or the object.
need testing  are the task in a project array not passed as reference?
create the libarien class/module. 
--------------------------------------
Register Category.js creation
To I need this  ?
<!-- first load Register loops over the tempStorage and creates the category Register.
Register.create()
every category like project week ,day only has an array of ids.
Stored in a register.js 
use it like Register.getWeek Register.getDay Register.getProjects...

when adding new task can use the same function as Register.create . 
deleting changing needs a different functionality. -->

when the category is first clicked(maybe on first load it doesn't matte for now)
 it calls the create dom module and create the list from the IdArray in Register.


 ---------------------------------
  nice to haves.
-todoist changes where the newtask form appears when you click different buttons I like the form in the task list.
-keyboard inputs a must for me..




