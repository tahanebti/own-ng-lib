import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { ConfirmationPopoverDirective } from './confirmation-popover.directive';
import { FocucsDirective } from './focucs.directive';
import { ConfirmationPopoverOptions, ConfirmationPopoverOptionsInterface } from './confirmation-popover-options.provider';

export const USER_OPTIONS: InjectionToken<string> = new InjectionToken(
  'confirmation popover user options'
);

export function optionsFactory(
  userOptions: ConfirmationPopoverOptions
): ConfirmationPopoverOptions {
  const options = new ConfirmationPopoverOptions();
  Object.assign(options, userOptions);
  return options;
}

@NgModule({
  declarations: [
    PopoverComponent, 
    ConfirmationPopoverDirective, 
    FocucsDirective
  ],
  exports:[
    ConfirmationPopoverDirective, 
    FocucsDirective
  ],
  imports: [
    CommonModule
  ],
  entryComponents:[PopoverComponent]
})
export class PopoverModule {
  static forRoot(
    options: ConfirmationPopoverOptionsInterface = {}
  ): ModuleWithProviders<PopoverModule> {
    return {
      ngModule: PopoverModule,
      providers: [
        {
          provide: USER_OPTIONS,
          useValue: options,
        },
        {
          provide: ConfirmationPopoverOptions,
          useFactory: optionsFactory,
          deps: [USER_OPTIONS],
        },
      ],
    };
  }
 }
