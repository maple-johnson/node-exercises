// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) 
{
     // Could not get the removal of duplicates from the original array to work
     /** 
     for (let i = 0; i < array.length; i++) 
     {
          let element = array[i];
          let num = 0;
          
          if(array.includes(element) && num == 0)
          {
               num = 1;
          }
          else if(array.includes(element) && num == 1)
          {
               array.splice(i, 1);
               num = 0;
          }
          else
          {
               //
          }
          
     }

     return array;
     */

     // Created new array to force no duplicates
     let newArray = [];
     
     for (let i =  0; i < array.length; i++)
     {
          if(!newArray.includes(array[i]))
          {
               newArray.push(array[i]);
          }
          else
          {
               // Do nothing
          }
     }

     return newArray;

}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console
console.log(removeDuplicates(testArray3));
