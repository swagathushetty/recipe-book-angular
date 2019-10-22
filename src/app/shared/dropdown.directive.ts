import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective {
    
    //it will add the class open to the element if isOpen=false
   @HostBinding('class.open') isOpen=false;

    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
    }


}