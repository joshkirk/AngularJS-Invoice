(function() {

    var invoicer = angular.module('invoicer', ["xeditable", 'ui.sortable']);

    invoicer.run(function(editableOptions) {
        editableOptions.theme = 'bs3';
    });

    invoicer.controller('invController', function($scope){
        $scope.date = new Date();

        $scope.dt = new Date();


        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.our_address = "555 E Wisconsin Ave";
        $scope.our_address_linetwo = "Unit 200";
        $scope.our_city = "Milwaukee,";
        $scope.our_state = "WI";
        $scope.our_zip = "53203";
        $scope.addressee = "Tobias";
        $scope.personal = "We really enjoyed working with you. Your story is one that we found unique and engaging. " +
        "We hope we were able to grant all your concept, design and development wishes. Please do not hesitate " +
        "to contact us with any questions or concerns. We look forward to watching your story unfold.";
        $scope.firstThead = "DESCRIPTION";
        $scope.secondThead = "MILESTONE";
        $scope.thirdThead = "TOTAL";
        $scope.closing = "Sincerely,";
        $scope.signOff = "The company who did this work for you";

        $scope.sidebar = notes;

        $scope.invoice = work;
        $scope.sidebar = notes;

        $scope.checkValue = function(data) {
            if (isNaN(data)) {
                return "Numbers only please.";
            }
        };

        $scope.getTotal = function(){
            var total=0;
            for(var i=0; i < $scope.invoice.line_items.length; i++) {
                var line = $scope.invoice.line_items[i];
                total += (line.price * 1);
            }
            return total;
        };

        // Add item to invoice
        $scope.addItem = function() {
            $scope.invoice.line_items.push(this.invoice.temp);
            $scope.invoice.temp = {};
        };

        // Remove item from invoice
        $scope.removeItem = function(idx) {
            $scope.invoice.line_items.splice(idx, 1);
            console.log('line-item index:', idx);
        };

        // Add note to invoice
        $scope.addNote = function() {
            $scope.sidebar.note.push(this.sidebar.temp);
            $scope.sidebar.temp = {};
        };
        // Remove note from invoice
        $scope.removeNote = function(idx) {
            $scope.sidebar.note.splice(idx, 1);
        };

        $scope.contentLoaded = true;

    });

    var notes =
    {
        note: [
            {
                title: "New note title",
                body: "This is the note body. Here you can elaborate on things that might be unclear."
            },
            {
                title: "New note title",
                body: "This is the note body. Here you can elaborate on things that might be unclear."
            }

        ]
    };
    // SOME ITEMS IN THE OBJECTS BELOW ARE NOT USED IN THE THIRD WISH INVOICE.HTML
    var work =
    {
        number: "1",
        project_name: "Project Name",
        lead_in: "We promised to grant you...",
        to_company: "Tobias Funke",
        to_address: "3425 sudden valley",
        to_city: "Los Angeles,",
        to_state: "CA",
        to_zip: "43433",
        //less_payments: "2000",
        line_items: [
            {
                title: "Wireframe and brand finalized",
                milestone: "1.5",
                price: "4500"
            },
            {
                title: "Design Finalized",
                milestone: "2",
                price: "2000"
            },
            {
                title: "Site coded and functional",
                milestone: "2.5",
                price: "6500"
            },
            {
                title: "Code polished and site fully launched",
                milestone: "3",
                price: "3500"
            }
        ]
    };

})();
