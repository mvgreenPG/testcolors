import {
    AfterViewInit,
    Component,
    ElementRef,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
    input
} from '@angular/core';

/** This is the badge color.*/
export type BadgeColor =
    | 'Lime'
    | 'Pineapple'
    | 'Tangerine'
    | 'Apple'
    | 'Plum'
    | 'Watermelon'
    | 'Coconut'
    | 'Raspberry'
    | 'Slate'
    | 'Elderberry'
    | 'Blueberry'
    | 'AI';

/**
 * CORE UI BadgeComponent is the badge.
 * @export
 */
@Component({
    selector: 'coreui-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class BadgeComponent implements AfterViewInit {
    /**
     * The badgeLabel elementRef.
     * @ignore
     */
    @ViewChild('badgeLabel', { read: ElementRef })
    public badgeLabel: ElementRef;
    /**
     * Whether the badge is filled.
     * @deprecated Use border instead. Set border to false for filled appearance, true for outlined appearance.
     * @ignore
     */
    public filled = input(true);

    /**
     * Whether the badge has border.
     */
    public border = input(true);

    /**
     * Whether the badge has bold text.
     */
    public bold = input(true);

    /**
     * Whether the badge has an icon.
     */
    public hasIcon = input(false);

    /**
     * Whether the badge shows single icon.
     */
    public iconStatus = input(false);

    /**
     * Whether the badge shows a specific badge icon.
     */
    public iconIndicator = input(false);

    /**
     * Whether the badge is neither icon status or indicator.
     */
    public textSimple = input(false);

    /**
     * Optional sub message to display with the badge.
     */
    public subMessage = input<TemplateRef<any>>();

    /**
     * The badge color.
     */
    public color = input<BadgeColor>();

    /**
     * This modifies the size of a stamp badge.
     */
    public size = input<'small' | 'medium' | 'large'>('small');

    /**
     * AfterViewInit implementation.
     * @ignore
     */
    public ngAfterViewInit(): void {
        if (this.hasIcon() && this.badgeLabel) {
            const iconElements =
                this.badgeLabel.nativeElement.querySelectorAll('i');
            iconElements.forEach((iconEl: HTMLElement) => {
                iconEl.setAttribute('aria-hidden', 'true');
            });
        }
    }
}
