import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [HomeComponent, DropdownDirective],
    exports: [DropdownDirective] // no need to export HomeComponent, because in routing, it will be available, and it's not used inside any other components
})
export class CoreModule {}
