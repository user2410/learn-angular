import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

const showAnimation = animation([
  style({ transform: '{{transform}}', opacity: 0 }),
  animate('{{transition}}'),
]);

const hideAnimation = animation([
  animate('{{transition}}', style({ transform: '{{transform}}', opacity: 0 })),
]);

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  animations: [
    trigger('panelState', [
      transition('void => visible', [useAnimation(showAnimation)]),
      transition('visible => void', [useAnimation(hideAnimation)]),
    ]),
  ],
})
export class DrawerComponent implements OnInit {
  appendTo = 'body';
  container: any;

  @Output() visibleChange: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  @Input() header = '';

  _visible: boolean = false;

  @Input() get visible(): boolean {
    return this._visible;
  }

  set visible(val) {
    this._visible = val;
    this.visibleChange.emit(this._visible);
  }

  @Input() showCloseIcon: boolean = true;
  transformOptions: any = 'translate3d(-100%, 0px, 0px)';
  transitionOptions: string = '150ms cubic-bezier(0, 0, 0.2, 1)';

  _position: string = 'left';

  @Input() get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;

    switch (value) {
      case 'left':
        this.transformOptions = 'translate3d(-100%, 0px, 0px)';
        break;
      case 'right':
        this.transformOptions = 'translate3d(100%, 0px, 0px)';
        break;
      case 'top':
        this.transformOptions = 'translate3d(0px, -100%, 0px)';
        break;
      case 'bottom':
        this.transformOptions = 'translate3d(0px, 100%, 0px)';
        break;
    }
  }

  constructor() {}

  hide() {
    this.onHide.emit({});
  }

  close(event: Event) {
    this.hide();
    this.visibleChange.emit(false);
    event.preventDefault();
  }

  onAnimationStart(event: any) {
    switch (event.toState) {
      case 'visible':
        this.container = event.element;
        this.appendContainer();
        break;
    }
  }

  onAnimationEnd(event: any) {
    switch (event.toState) {
      case 'void':
        this.hide();
        break;
    }
  }

  appendContainer() {
    document.body.appendChild(this.container);
  }

  ngOnInit(): void {}
}
