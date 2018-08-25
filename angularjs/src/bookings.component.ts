
export const bookingsComponent: angular.IComponentOptions = {
    controller: function($scope) {
        const that = this;

        this.bookings = [
            { id: '4711', from: 'Graz', to: 'New York', date: new Date() },
            { id: '4712', from: 'New York', to: 'Graz', date: new Date() }
        ];

        this.selection = {
            '4711': false,
            '4712': true
        }

        this.change = function(booking, e) {
            console.debug('change', e);
            that.selection[booking.id] = e.detail;
        }

        this.test = function() {
        }
        
    },
    template: `
        <!--
        <ul ng-repeat="b in $ctrl.bookings">
            <li>{{b.id}}, {{b.from}} - {{b.to}}, {{b.date | date:'short'}} </li>
        </ul>
        -->

        <div ng-repeat="b in $ctrl.bookings">
            {{$ctrl.selection[b.id]}}
            <flight-card ng-prop-item="b" ng-prop-selected="$ctrl.selection[b.id]" ng-on-selected_change="$ctrl.change(b, $event)"></flight-card>
        </div>

        <pre>{{$ctrl.selection}}</pre>
    `
};