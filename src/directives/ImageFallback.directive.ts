import { Directive, HostListener, Input, ElementRef, HostBinding, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: 'img[appImageFallback]',
  standalone: true,
    host: {
      '(error)':'updateUrl()',
      '(load)': 'load()',
      '[src]':'src'
     }
})
export class ImageFallbackDirective {

    @Input() src:string="";
    @Input() appImageFallback:string="";
    @HostBinding('class') className="";
    constructor(private el: ElementRef) {
      this.className = 'image-loading';
     }
    // @Output() myCustomEvent = new EventEmitter<string>(); // Emits a string value
    // @HostListener('click') // Listen to the host element's click event
    // onClick() {
    //   const valueToEmit = 'Data from directive!';
    //   this.myCustomEvent.emit(valueToEmit); // Emit the value
    // }
    @Output() myCustomEvent = new EventEmitter<Object>(); // Emits a string value
    @HostListener('error')
    updateUrl() {
      this.myCustomEvent.emit({ src: this.src, target: this.el.nativeElement }); // Emit the value
      // this.src = this.appImageFallback;
    }
    load() {
      this.className = 'image-loaded';
    }
  // @Input() appImageFallback: string = 'tiger.png'; // Default fallback image path

  // constructor(private el: ElementRef) {}

  // @HostListener('error') onError() {
  //   this.el.nativeElement.src = this.appImageFallback;
  // }

}
