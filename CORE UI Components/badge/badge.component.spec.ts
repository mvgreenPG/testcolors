import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
    describe('Component', () => {
        let component: BadgeComponent;
        let fixture: ComponentFixture<BadgeComponent>;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [BadgeComponent]
            }).compileComponents();
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(BadgeComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
            expect(component.color()).toBeUndefined();
            expect(component.border()).toBeTruthy();
            expect(component.bold()).toBeTruthy();
        });

        it('should not apply is-bold class if badge text is regular', () => {
            // Arrange
            fixture.componentRef.setInput('bold', false);
            const debugEl = fixture.debugElement.query(By.css('.Core-Badge'));

            // Act
            fixture.detectChanges();

            // Assert
            expect(debugEl.nativeElement.classList.contains('is-bold')).toBe(
                false
            );
        });
    });

    describe('SimpleBadgeComponent', () => {
        let fixture: ComponentFixture<SimpleBadgeComponent>;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [BadgeComponent, SimpleBadgeComponent]
            }).compileComponents();
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(SimpleBadgeComponent);
            fixture.detectChanges();
        });

        describe('Color Red100', () => {
            it('should have color and border classes', () => {
                // Arrange
                const badgeFixture = TestBed.createComponent(BadgeComponent);
                badgeFixture.componentRef.setInput('color', 'Apple');
                badgeFixture.detectChanges();
                // Act
                const redElement = badgeFixture.debugElement.query(
                    By.css('.Core-Badge')
                );
                // Assert
                expect(
                    redElement.classes['Core-Badge-color--Apple']
                ).toBeTruthy();
                expect(redElement.classes['is-border']).toBeTruthy();
            });
            it('should have color and no border class', () => {
                // Arrange
                const badgeFixture = TestBed.createComponent(BadgeComponent);
                badgeFixture.componentRef.setInput('border', false);
                badgeFixture.componentRef.setInput('color', 'Apple');
                badgeFixture.detectChanges();
                // Act
                const redElement = badgeFixture.debugElement.query(
                    By.css('.Core-Badge')
                );
                // Assert
                expect(
                    redElement.classes['Core-Badge-color--Apple']
                ).toBeTruthy();
                expect(redElement.classes['is-border']).toBeFalsy();
            });
        });
    });
});

@Component({
    template: `
        <coreui-badge></coreui-badge>
    `,
    standalone: false
})
class SimpleBadgeComponent {
    @ViewChild(BadgeComponent, { static: true })
    public badge: BadgeComponent;
}
