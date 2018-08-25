import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef } from "@angular/core";

@Component({
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnChanges {

    @Input() item: any;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    // constructor(private cd: ChangeDetectorRef) {
    // }

    ngOnChanges() {
        console.debug('ngOnChanges', this.selected);
    }

    deactivate(): void {
        // this.selected = false;
        this.selectedChange.emit(false);
    }

    activate(): void {
        // this.selected = true;
        this.selectedChange.emit(true);
        //this.cd.detectChanges();
    }

}