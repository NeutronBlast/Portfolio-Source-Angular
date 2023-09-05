import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {animate, AnimationBuilder, style} from "@angular/animations";

@Directive({
  selector: '[appScrollDetector]'
})
export class ScrollDetectorDirective {
  @Input() animationType: 'slideIn' | 'reverseSlideIn' | 'fadeIn' = 'slideIn';
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder
  ) {}


  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden'); // Initial visibility set to hidden

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.3, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.playAnimation();
          observer.unobserve(this.el.nativeElement); // Stop observing after triggering animation
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }

  private playAnimation(): void {
    let animationFactory;

    if (this.animationType === 'slideIn') {
      animationFactory = this.animationBuilder.build([
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]);
    } else if (this.animationType === 'reverseSlideIn') {
      animationFactory = this.animationBuilder.build([
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]);
    } else if (this.animationType === 'fadeIn') {
      animationFactory = this.animationBuilder.build([
        style({opacity: 0}),
        animate('1s ease-in-out', style({ opacity: 1 }))
      ])
    }

    // @ts-ignore
    const animationPlayer = animationFactory.create(this.el.nativeElement);

    // Set visibility to visible before playing the animation
    animationPlayer.onStart(() => {
      this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
    });

    animationPlayer.play();
  }

}
