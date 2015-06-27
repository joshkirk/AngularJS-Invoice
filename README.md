# README #
# Angularjs_Invoice #

[Live Demo](http://invoice.thirdwishcreative.com)

Google Chrome highly recommended. 

[Original inspiration](http://randysofia.com/2014/06/20/tool-for-invoicing-customers/)

This is a re-usable invoice template that uses AngularJS and [Angular xeditable](http://vitalets.github.io/angular-xeditable/) to allow for the adding and removing of line items and notes, and the editing of almost all the content just by clicking the text. It is meant for use on a full computer in order to save out as PDF.

Hover over the bottom of the window to reveal the content-adder.

Use the save button in the top right to open the print dialog and save as a PDF or go to File > Print. Legal paper size recommended for more than two line items. 

Things this could still use:

* Currently removing items is not as efficient as it should be. Ideally there would be a little X button to the right of a line item or note that would remove the html. 

A directive like so would be great: 


```
invoicer.directive('removeOnClick', function() {
    return {
        link: function(scope, elt, attrs) {
            scope.remove = function() {
                elt.html('');
            };
        }
    }
});
```

Then in the HTML 

```
<tr remove-on-click ng-repeat="item in invoice.line_items" ng-hide="(item.price == 0)">
    <td>
        <p>
            <span editable-text="invoice.line_items[$index].title" e-style="width: 350px">{{item.title}}</span>
        </p>
     </td>
     <td><p editable-text="invoice.line_items[$index].milestone" e-style="width: 87px">{{item.milestone}}</p></td>
     <td><p editable-text="invoice.line_items[$index].price" e-style="width: 87px">{{item.price | number}}</p></td>
</tr>
```

BUT one would also have to recalculate the total at the same time, or else the line item will go away but the total stay the same.

Of course it would be cool to have a backend on this too...
