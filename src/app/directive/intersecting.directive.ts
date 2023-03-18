import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIntersecting]'
})
export class IntersectingDirective {
  observer!: IntersectionObserver
  @Input() delay: number = 0
  @Input() translationX: number = 0
  @Input() translationY: number = 0
  @Input() duration: number = 600

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {

      if (entries[0].isIntersecting === true) {
        this.el.nativeElement.style.transform = 'translateY(0px) translateX(0px)';
        this.el.nativeElement.style.opacity = '1';
        this.el.nativeElement.style.transition = `all ${
          this.duration / 1000
        }s ${
          this.delay / 1000
        }s ease`;

        this.unobserve();
      } else {
        this.el.nativeElement.style.transform = `translateY(${this.translationY}px) translateX(${this.translationX}px)`;
        this.el.nativeElement.style.opacity = '0';
      }
    });
    this.observer.observe(this.el.nativeElement as HTMLElement);
  }

  unobserve() {
    this.observer.disconnect();
  }

}
