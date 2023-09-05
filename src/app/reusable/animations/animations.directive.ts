import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {animate, AnimationBuilder, style} from "@angular/animations";

@Directive({
  selector: '[appAnimations]'
})
export class AnimationsDirective {
  @Input() animationName: string = ''; // Input to specify animation name
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder
  ) { }

  ngOnInit(): void {
    let animationFactory;

    // Select the appropriate animation based on the input
    if (this.animationName === 'slideUp') {
      animationFactory = this.animationBuilder.build([
        style({opacity: 0, transform: 'translateY(20px)'}),
        animate('0.5s ease-in-out', style({opacity: 1, transform: 'translateY(0)'})),
      ]);
    } else if (this.animationName === 'slideIn') {
      animationFactory = this.animationBuilder.build([
        style({opacity: 0, transform: 'translateX(-100%)'}),
        animate('0.5s ease-in-out', style({opacity: 1, transform: 'translateX(0)'})),
      ]);
    } else if (this.animationName === 'reverseSlideIn') {
      animationFactory = this.animationBuilder.build([
        style({opacity: 0, transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({opacity: 1, transform: 'translateX(0)'})),
      ]);
    }

    // @ts-ignore
    const animationPlayer = animationFactory.create(this.el.nativeElement);
    animationPlayer.play();
  }
}
